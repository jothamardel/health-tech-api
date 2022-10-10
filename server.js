const http = require("http");
const { app } = require("./app");

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is listening on port:::: ${PORT}`);
});
