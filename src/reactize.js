var turbolinks = require('./turbolinks.js');

var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');

var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var convertHTML = require('html-to-vdom')({
    VNode: VNode,
    VText: VText
});

var bodyVTree = {};

var Reactize = {
  version: "0.5.0"
};

Reactize.applyDiff = function(replacementElement, targetElement) {
  var replacementVtree = convertHTML(replacementElement.outerHTML.trim());
  var patches = diff(bodyVTree, replacementVtree);
  targetElement = patch(targetElement, patches);
  bodyVTree = replacementVtree;
};

function applyBodyDiff() {
  //generate a globla virtual-dom tree for the body element
  bodyVTree = convertHTML(document.body.outerHTML.trim());
  global.removeEventListener("load", applyBodyDiff);
}

global.addEventListener("load", applyBodyDiff);

// Turbolinks calls `replaceChild` on the document element when an update should
// occur. Monkeypatch the method so Turbolinks can be used without modification.
global.document.documentElement.replaceChild = Reactize.applyDiff;

module.exports = global.Reactize = Reactize;
