exports.seed = function(knex, Promise) {
  return knex("teas")
    .del()
    .then(() => {
      return knex("teas").insert([
        { name: "Darjeeling First Flash",
    season: "March April",
    aroma: 5,
    body: 4,
    sweet: 4,
    bitter: 3,
    color:1,
    kind: "Darjeeling",
    recommend: "1",
    milk: false
 },
 { name: "Darjeeling Second Flash",
    season: "May June",
    aroma: 5,
    body: 4,
    sweet: 3,
    bitter: 4,
    color:3,
    kind: "Darjeeling",
    recommend: "3",
    milk: false
 },
 { name: "Darjeeling Autumnal",
 season: "October November",
 aroma: 5,
 body: 2,
 sweet: 4,
 bitter: 2,
 color:3,
 kind: "Darjeeling",
 recommend: "4",
 milk: true
},
{ name: "Assam",
season: "October November",
aroma: 5,
body: 5,
sweet: 4,
bitter: 1,
color:5,
kind: "Darjeeling",
recommend: "5",
milk: true
},
      ]);
    });
};
