
exports.up = function(knex) {
    return knex.schema.createTable("teas", function(table) {
        // id
        table.increments();
        // name
        table.string("name");
        // season
        table.string("season");
        // aroma
        table.integer("aroma");
        // body
        table.integer("body");
        // sweet
        table.integer("sweet");
        // bitter
        table.integer("bitter");
        // color
        table.integer("color");
        // kind
        table.string("kind");
        // recommendation
        table.string("recommend");
        // milk
        table.boolean("milk");
    });
   
};

exports.down = function(knex) {
    return knex.schema.dropTable("teas");
    
};
