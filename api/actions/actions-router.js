const express = require("express");

const Actions = require("./actions-model");

const router = express.Router();

//GET ACTIONS
router.get("/", (req, res) => {
  Actions.get(req.query.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error getting actions" });
    });
});
//GET ACTIONS BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Actions.get(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error getting action:  " + id });
    });
});

//ADD NEW ACTION
router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the action",
      });
    });
});
//EDIT ACTION
router.put("/:id", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error editing action",
      });
    });
});
//DELETE ACTION
router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "delete success" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "there has been an error deleting the action",
      });
    });
});

module.exports = router;
