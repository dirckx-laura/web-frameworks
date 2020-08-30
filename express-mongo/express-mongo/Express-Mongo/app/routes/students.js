var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
var db;

MongoClient.connect("mongodb://localhost:27017", (err, database) => {
  if (err) return console.log(err);
  db = database.db("students");
});

/* GET ALL STUDENTS */
router.get("/", (req, res) => {
  db.collection("items")
    .find()
    .toArray((err, result) => {
      if (err) return;
   
      res.render("list.ejs", { students: result });
    });
});

/* SHOW ADD STUDENT FORM */
router.get("/add", (req, res) => {
  res.render("add.ejs", {});
});

/* ADD STUDENT TO DB */
router.post("/add", (req, res) => {
  db.collection("items").insertOne(req.body, (err, result) => {
    if (err) return;
    res.redirect("/");
  });
});

/* SEARCH FORM */
router.get("/search", (req, res) => {
    res.render("search.ejs", {});
  });
  
  /* FIND A STUDENT */
  router.post("/search", (req, res) => {
    var query = { naam: req.body.naam };
    db.collection("items").findOne(query, (err, result) => {
      if (err) return;
      if (result == "") res.render("search_not_found.ejs", {});
      else res.render("search_result.ejs", { student: result });
    });
  });
  
  /* DELETE A STUDENT */
  router.post("/delete", (req, res) => {
    db.collection("items").findOneAndDelete(
      { naam: req.body.naam },
      (err, result) => {
        if (err) return res.send(500, err);
        res.redirect("/");
      }
    );
  });

module.exports = router;
