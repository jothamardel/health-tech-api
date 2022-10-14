const http = require("http");
const dotenv = require("dotenv");
const { app } = require("./app");
dotenv.config();

const PORT = process.env.PORT ?? 5000;

const server = http.createServer(app);

const startServer = async function () {
  server.listen(PORT, () => {
    console.log(`server is listening on port:::: ${PORT}`);
  });
};

startServer();
