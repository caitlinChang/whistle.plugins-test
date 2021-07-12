const koa = require("koa");
const util = require("util");

module.exports = (server /* , options */) => {
  // const app = new koa();

  // app.use(async (ctx) => {
  //   console.log("ctx ----");
  //   ctx.cookies.set("test1", "111");
  // });
  // console.log(server.constructor.name);
  server.on("request", (req, res) => {
    // app.callback();
    // console.log("req.constructor = ", Object.keys(req.headers));
    // console.log(arguments);
    // util.inspect(req);
    // console.log(req.constructor.name);
    // console.log(res.hea);
    res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    res.end();
    // console.log("req.constructor = ", req.headers.cookie);
    // req.getReqSession((s) => {
    //   // console.log("s =", s);
    // });
    // req.unsafe_getReqSession((s) => {
    //   // console.log("s =", s);
    // });
  });
};

// req.constructor = function IncomingMessage(socket) {
//   let streamOptions;

//   if (socket) {
//     streamOptions = {
//       highWaterMark: socket.readableHighWaterMark,
//     };
//   }

//   Stream.Readable.call(this, { autoDestroy: false, ...streamOptions });

//   this._readableState.readingMore = true;

//   this.socket = socket;

//   this.httpVersionMajor = null;
//   this.httpVersionMinor = null;
//   this.httpVersion = null;
//   this.complete = false;
//   this.headers = {};
//   this.rawHeaders = [];
//   this.trailers = {};
//   this.rawTrailers = [];

//   this.aborted = false;

//   this.upgrade = null;

//   // request (server) only
//   this.url = "";
//   this.method = null;

//   // response (client) only
//   this.statusCode = null;
//   this.statusMessage = null;
//   this.client = socket;

//   this._consuming = false;
//   // Flag for when we decide that this message cannot possibly be
//   // read by the user, so there's no point continuing to handle it.
//   this._dumped = false;
// };

[
  "_readableState",
  "_events",
  "_eventsCount",
  "_maxListeners",
  "socket",
  "httpVersionMajor",
  "httpVersionMinor",
  "httpVersion",
  "complete",
  "headers",
  "rawHeaders",
  "trailers",
  "rawTrailers",
  "aborted",
  "upgrade",
  "url",
  "method",
  "statusCode",
  "statusMessage",
  "client",
  "_consuming",
  "_dumped",
  "unsafe_getReqSession",
  "unsafe_getSession",
  "unsafe_getFrames",
  "getReqSession",
  "getSession",
  "getFrames",
  "request",
  "originalReq",
  "response",
  "originalRes",
  "localStorage",
  "Storage",
  "clientIp",
  "sessionStorage",
];

[
  "clientIp",
  "id",
  "headers",
  "isFromPlugin",
  "ruleValue",
  "ruleUrl",
  "pipeValue",
  "hostValue",
  "fullUrl",
  "url",
  "realUrl",
  "relativeUrl",
  "method",
  "clientPort",
  "globalValue",
  "proxyValue",
  "pacValue",
  "pluginVars",
];
