

exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 250).notNullable()
    })
    .createTable('steps', table => {
      table.increments('step_id')
      table.string('step_number').notNullable()
      table.string('instructions', 500).notNullable()
      table.integer('quantity_id')
        .unsigned()
        .notNullable()
        .references('quantity_id')
        .inTable('quantity')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('quantity', table => {
      table.increments('quantity_id')
      table.string('quantity_value').notNullable()
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 250).notNullable()
    })
};

exports.down = function(knex) {
  return knex.scheme
    .dropTableIfExists('ingredients')
    .dropTableIfExists('quantity')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
