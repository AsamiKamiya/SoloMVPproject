const db = require("./knex");
const app = require("./app")(db);

const PORT = process.env.PORT || 9000;

app.listen({ port: PORT }, () => {
  console.log("server start 9000");
});
