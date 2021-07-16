

exports.seed = function(knex, Promise) {
  return knex('quantity').insert([
    {quantity_value: '1'},
    {quantity_value: '3 cups'},
  ]);
};
