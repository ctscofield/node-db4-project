
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'Ramen noodles'},
    // {recipe_id: 2, recipe_name: 'Pancakes'},
    // {recipe_id: 3, recipe_name: 'Hot Pocket'}
  ]);
};
