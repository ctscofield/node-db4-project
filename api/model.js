const db = require('./../data/db-config')

async function findById(recipe_id) {
  const rows = await db('recipes as r')
    .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
    .where('r.recipe_id', recipe_id)
    .select('st.*')
    .orderBy('st.step_number')

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    steps: []
  }
  rows.forEach(row => {
    if (row.step_id) {
      result.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.instructions
      })
    }
  })
  return result
}