var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('products')
})

/* GET ALL PRODUCTS */
router.get('/', (req, res) => {
  db.collection('items').find().toArray((err, result) => {
    if (err) return
     res.json(result)
  })
})

/* ADD PRODUCT TO DB */
router.post('/add', (req, res) => {
  db.collection('items').insertOne(req.body, (err, result) => {
    if (err) return
    res.redirect('/')
  })
})

/* FIND A PRODUCT */
router.post('/search', (req, res) => {
 var query = { name: req.body.name }
 db.collection('items').findOne(query, (err, result) => {
   if (err) return
   if (result != '')
       res.json(result)
 });
})

/* DELETE A PRODUCT */
router.delete('/delete/:name', (req, res) => {
  db.collection('items').findOneAndDelete({ name: req.params.name }, (err, result) => {
    if (err) return res.send(500, err)
    res.redirect('/')
  })
})

module.exports = router;