
exports.up = function(knex) {
    return  knex.schema.createTable("sweets", function(table) {
        // id
        table.integer("id");
        // name
        table.string("name");
      });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable("sweets");
};
