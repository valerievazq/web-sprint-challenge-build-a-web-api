const express = require("express");
const server = express();

const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");
server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`
      <h1>Welcome to the shrine!</h1>
      <p>You shall pass</p>
    `);
});
module.exports = server;
