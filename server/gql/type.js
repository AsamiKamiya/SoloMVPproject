const { gql } = require("apollo-server-express");
module.exports = gql`
  type Tea {
    name: String
    season: String
    aroma: Int
    body: Int
    sweet: Int
    bitter: Int
    color: Int
    kind: String
    recommend: String
    milk: Boolean
  }
  type Sweet {
    name: String
  }
  input Milk {
    milk : Boolean
  }
  type Query {
    teas(input: Milk): [Tea]
    sweets: [Sweet]
  }
`;
