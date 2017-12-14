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
recipes.post('/', async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete
recipes.delete('/:id', async (req, res) => {
  try {
    const deleteRecipe = await Recipe.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// edit
// recipes.put('/:id', async (req, res) => {
//
// });

module.exports = recipes;
