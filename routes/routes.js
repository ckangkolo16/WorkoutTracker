const router = require("express").Router();
const path = require("path");

const db = require("../models");

router.get("/", (req, res) => {
  const statPage = "../public/index.html";
  res.sendFile(path.join(__dirname, statPage));
});

router.get("/exercise", (req, res) => {
  const exPage = "../public/exercise.html";
  res.sendFile(path.join(__dirname, exPage));
});

router.get("/stats", (req, res) => {
  const statPage = "../public/stats.html";
  res.sendFile(path.join(__dirname, statPage));
});

// API ROUTES

// all
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

//
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

//range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

//
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    {
      _id: req.params.id,
    },
    {
      $push: { exercises: req.body },
    },
    (err, updated) => {
      if (err) res.status(500).json(err);
      res.json(updated);
    }
  );
});

module.exports = router;
