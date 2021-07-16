

exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'water'},
    {ingredient_name: 'noodles'},
    {ingredient_name: 'salt/boullion packet'}
  ]);
};
