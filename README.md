# turbo-react

This is a mix of React, React's JSX, and Turbolinks that applies DOM "diffs"
without any server configuration—it just needs plain old HTML.

**Demo:** https://turbo-react.herokuapp.com/

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

Reactize turns the `<body>` into a React element: [reactize.js](https://github.com/ssorallen/turbo-react/blob/master/src/reactize.js)

Reactize is hooked into Turbolinks: [reactize.js#32](https://github.com/ssorallen/turbo-react/blob/master/src/reactize.js#L32)


#### Running locally

1. Clone this repo

        $ git clone git@github.com:ssorallen/turbo-react.git

2. Install dependencies

        $ bundle install
        $ npm install

3. Run the server and watch JS changes

        $ bundle exec rackup # Change the port with the `-p` flag
        $ webpack --progress --colors --watch

4. Visit the app: [http://localhost:9292](http://localhost:9292)

### Feedback

Tweet at me: [@ssorallen](https://twitter.com/ssorallen?rel=author)
