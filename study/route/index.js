const server = require("./http");
const router = require("./route");

server.start(router.route);