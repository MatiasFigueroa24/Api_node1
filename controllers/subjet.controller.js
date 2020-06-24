const db = require("../models/index");
const Subject = require(db.Subject);
const Op = db.Sequelize.Op;

const errorHandler = require("../models/function");

// llego un paticion date- ip, tambien guarda la materia
exports.create = (Req, resp) => {
  if (!req.body.title || !req.body.cohort) {
    resp.status(400).send({
      message: "Title cannot be empty",
    });
    return;
  }
  const subject = {
    title: req.body.title,
    description: req.body.description,
    cohort: req.body.cohort,
  };
  //se intenta crear un materia
  Subject.create(subject)
    // cuando se resuelva sastifactoriamente
    .then((data) => {
      resp.send(data);
    })
    //cuando se resuelvva y tengamos un error
    .cat((err) => {
      resp.status(500).send({
        message: err.message || "something went wrong with the service ",
      });
    });
};
exports.findAll = (req, resp) => {
  const title = req.query.title;
  // esto hace que si viene difinido title y titulo no es igual a nulo va a igualar condicion al onjeto op.like
  const condition = title ? { title: { [Op.like]: "%${title}%" } } : null;

  Subject.findAll({ where: condition })
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      errorHandler(res, "Error find all", 500);
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Subject.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandler(res, "Error find one", 500);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Subject.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Subject was updated successfully",
        });
      } else {
        res.status(404).send({
          mensage: "Cannot update Subject with ID " + id,
        });
      }
    })
    .catch((err) => {
      errorHandler(res, "Error update", 500);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Subject.destroy(req.body, { where: { id: id } })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Subject was delete successfully",
        });
      } else {
        res.status(404).send({
          mensage: "Cannot delete Subject with ID " + id,
        });
      }
    })
    .catch((err) => {
      errorHandler(res, "Error update", 500);
    });
};
