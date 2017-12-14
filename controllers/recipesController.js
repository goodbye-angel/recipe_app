// dependencies
const express = require('express');
const recipes = express.Router();

// models
const Recipe = require('../models/recipes.js');

// ROUTES -------------------------------------

// index
recipes.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
});

// create
// recipes.post('/', async (req, res) => {
//
// });

// delete
// recipes.delete('/:id', async (req, res) => {
//
// });

// edit
// recipes.put('/:id', async (req, res) => {
//
// });

module.exports = recipes;
