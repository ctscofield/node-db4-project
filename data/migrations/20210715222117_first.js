

exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 250).notNullable()
    })
    .createTable('quantity', table => {
      table.increments('quantity_id')
      table.string('quantity_value').notNullable()
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 250).notNullable()
    })
    .createTable('steps', table => {
      table.increments('step_id')
      table.string('step_number').notNullable()
      table.string('instructions', 500).notNullable()
      table.integer('quantity_id')
        .references('quantity_id')
        .inTable('quantity')
      table.integer('ingredient_id')
        .references('ingredient_id')
        .inTable('ingredients')
    })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('quantity')
    .dropTableIfExists('recipes')
};
