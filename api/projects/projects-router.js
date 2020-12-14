// Write your "projects" router here!
const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();
//GET PROJECT
router.get("/", (req, res) => {
  Projects.get(req.query.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving the projects" });
    });
});
//GET PROJECTS BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.get(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error retrieving the project with id: " + id });
    });
});
//ADD NEW PROJECTS
router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the project",
      });
    });
});
//EDIT PROJECT
router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error updating the project",
      });
    });
});
//DELETE PROJECT
router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "The project has been nuked" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the hub",
      });
    });
});
//GET PROJECT ACTION
router.get("/:id/actions", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving the projects" });
    });
});

module.exports = router;
