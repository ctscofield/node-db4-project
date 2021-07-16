

exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {step_number: '1', instructions: "Boil water in pot on stove top", quantity_id: 2, ingredient_id: 1},
    {step_number: '2', instructions: "Once water comes to a boil take noodles out of Ramen packet and put into pot of boiling water", quantity_id: 1, ingredient_id: 2},
    {step_number: '3', instructions: "Boil noodles for 3 minutes or until soft stirring occasionally"},
    {step_number: '4', instructions: "Once noodles are done pour water and noodles into bowl"},
    {step_number: '5', instructions: "Now use salt/boullion packet that came in Ramen package and pour it into bowl with noodles and enjoy your wonderful depressing meal", quantity_id: 1, ingredient_id: 3},
  ]);
};
