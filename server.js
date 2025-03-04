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


const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);

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
