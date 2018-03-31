import { Handler } from "aws-lambda";
import { graphql, buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => "Hello" };

export const handler: Handler = async (event, _context, callback) => {
  try {
    const request = JSON.parse(event.body);
    const response = await graphql(schema, request.query, root);

    callback(null, { statusCode: 200, body: JSON.stringify(response) });
  } catch (e) {
    callback(e);
  }
};
