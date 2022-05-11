const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('systems-list.json');
const middlewares = jsonServer.defaults();
const prot = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);