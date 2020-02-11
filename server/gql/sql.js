module.exports = (db) => ({
    Tea: () => {
      return db("teas")
    },
  Query: {
   teas: (context, arg) => {
      return db("teas").select("*").where("milk", "=", arg.input.milk);
    },
  },
});
