exports.seed = function(knex, Promise) {
  return knex("sweets")
    .del()
    .then(() => {
      return knex("sweets").insert([
        { id: 1, name: "Youkan"},
        { id: 2, name: "macaron"},
        { id: 3, name: "butter cake"},
        { id: 4, name: "tart"},
        { id: 5, name: "Pound Cake"}
      ]);
    });
};
