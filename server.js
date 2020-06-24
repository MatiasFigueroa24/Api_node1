const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const application = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

const PORT = 3000 || process.env.PORT;

application.use(cors(corsOptions));
application.use(bodyParse.json());

application.use(bodyParse.urlencoded({ extended: true }));
const db = require("./models/index");

// la instacia  db.config
db.sequelizeInstanceDB.sync();

const controller = require("./controllers/subjet.controller");
application.get("/api/subjet/", (req, res) => {
  controller.findAll(req, res);
});
app.get("/api/subject/:title", (req, res) => {
  controller.findAll(req, res);
});

app.get("/api/subject/:id", (req, res) => {
  controller.findOne(req, res);
});

app.post("/api/subject", (req, res) => {
  controller.create(req, res);
});

app.delete("/api/subject/:id", (req, res) => {
  controller.delete(req, res);
});

require("./router/subject.router")(app);

application.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
