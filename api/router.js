const express = require('express')
const Recipes = require('./model')

const router = express.Router()

router.get("/", (req, res, next) => {
  const { recipe_id } = req.params
  Recipes.findById(recipe_id)
  .then(recipe => {
    // const recipes = recipe[0]
    if (!recipe) {
      res.status(404).json({
        message: "Can't find recipe"
      })
    } else {
      res.json(recipe)
    }
  })
  .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router