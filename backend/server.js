const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

const { mongoConnect } = require("./config/db.config");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
}

startServer();
