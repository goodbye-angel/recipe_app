const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  cookingTime: String,
  servingSize: String,
  img: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
