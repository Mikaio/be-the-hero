
exports.up = function(knex) {
  // table's creation
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {
  // if something goes wrong, the table will be deleted
  return knex.schema.dropTable('ongs')
};
