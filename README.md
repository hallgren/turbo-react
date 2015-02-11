# turbo-react

This is a clone of the original [turbo-react](https://github.com/ssorallen/turbo-react) project. But instead of using react.js to apply DOM diffs [virtual-DOM](https://github.com/TimBeyer/html-to-vdom) and [html-to-vdom](https://github.com/Matt-Esch/virtual-dom) are used.

This is a mix of Virtual-DOM, html-to-vdom, and Turbolinks that applies DOM "diffs"
without any server configuration—it just needs plain old HTML.

**Demo:** https://turbo-virtualdom.herokuapp.com/

### What it's doing

"Re-request this page" is just a link to the current page. When you click it,
Turbolinks intercepts the GET request and fetchs the full page via XHR.

The panel is rendered with a random panel- class on each request,
and the progress bar gets a random widthX class.

With Turbolinks alone, the entire `<body>` would be replaced, and transitions
would not happen. In this little demo though, React adds and removes
classes and text, and the attribute changes are animated with CSS transitions.
The DOM is otherwise left in tact.

### The Code

Reactize creates a virtual-dom of the `<body>` tag that is later diffed against a replacing `<body>` with the help of turbolinks.

#### Running locally

1. Clone this repo

        $ git clone git@github.com:hallgren/turbo-react/tree/virtual-dom.git

2. Install dependencies

        $ bundle install
        $ npm install

3. Run the server and watch JS changes

        $ bundle exec rackup # Change the port with the `-p` flag
        $ browserify src/reactize.js -o public/dist/reactize.js # Re-build reactize.js
        $ uglifyjs public/dist/reactize.js -m -c -o public/dist/reactize.min.js # Minify

4. Visit the app: [http://localhost:9292](http://localhost:9292)

### Feedback

Tweet at me: [@morganhallgren](https://twitter.com/morganhallgren?rel=author)

All credit to the main author of turbo-react: [@ssorallen](https://twitter.com/ssorallen?rel=author)

