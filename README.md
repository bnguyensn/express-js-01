# Node.js / Express / JavaScript

Just a standard Node.js / Express / JavaScript project template.

### Environments

There are 2 environment variables: `NODE_ENV` and `PORT`. If omitted, running `npm start` will start the Express server in development mode (via `nodemon`) on a random port number.

### Commands

`npm start`: start the project. If `NODE_ENV` is set as `production` then will look for the entry point in the `dist` directory, else will run `nodemon`.

`npm build`: build the project using Babel. Babel allows us to write modern JavaScript syntax in the Node.js environment, the most notable of which is the `import`/`export` syntax in place of the usual `require`.

### API (Routes)

There are 2 APIs:

#### `GET /api/math/`

This pings the `/math` route. Returns a static message notifying the user that the server is up and running.

#### `GET /api/math/add`

This adds up all query parameters with key = `n` and return the sum. Any parameter not convertible to a number will be treated as 0.

Example: `/api/math/add?n=1&n=2&n=3&n="hello"` will return 1 + 2 + 3 + 0 = 6
