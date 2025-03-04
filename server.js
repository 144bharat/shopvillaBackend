// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('database.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });

// module.exports = server;

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();

// Use JSON Server middlewares
server.use(middlewares);
server.use(router);

// Vercel's serverless function handler
module.exports = (req, res) => {
  server(req, res);
};



// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "server.js",
//       "use": "@vercel/node",
//       "config": {
//         "includeFiles": ["database.json"]
//       }
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "server.js"
//     }
//   ]
// }
