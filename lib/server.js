// const koa = require("koa");

module.exports = (server /* , options */) => {
  // handle http request

  server.on("request", (req, res) => {
    req.passThrough();
    // req.pipe(client);
  });

  // handle websocket request
  server.on("upgrade", (req, socket) => {
    // do something
    req.passThrough();
  });

  // handle tunnel request
  server.on("connect", (req, socket) => {
    // do something
    req.passThrough();
  });
};
