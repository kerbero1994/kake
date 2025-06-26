const WebSocket = require("ws");

const WSS = new WebSocket.Server({ port: 8080 });
console.log("new connection");
WSS.on("connection", (ws) => {
  console.log("new connection");
  ws.on("message", (message) => {
    console.log("here", message.toString());
  });
});

setInterval(() => {
  WSS.clients.forEach((client) => {
    client.send("count?");
  });
}, 1000);
