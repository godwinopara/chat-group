import gql from "graphql-tag";
import { users } from "../sample-data.js";

export const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		status: String!
		email: String
		phone: String
		aboutMe: String
		imageUrl: String
	}

	extend type Query {
		users: [User!]!
	}
`;

export const resolvers = {
	Query: {
		users: () => users,
	},
};
