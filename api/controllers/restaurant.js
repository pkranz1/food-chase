const express = require('express');
const router = express.Router();
const db = require('../models');
const { Restaurant } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /restaurant 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
    Restaurant.findAll({})
    .then(restaurant => res.json(restaurant));
});

router.post('/', (req, res) => {
    //let { content } = req.body;
    console.log(req.body)
    Restaurant.create(req.body)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });




module.exports = router;