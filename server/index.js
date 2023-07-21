import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs as User, resolvers as userResolvers } from "./schema/user.js";
import { typeDefs as Channel, resolvers as channelResolvers } from "./schema/channel.js";
import gql from "graphql-tag";

const Query = gql`
	# Since i want seperate every Schema field into it's own
	# seperate file i need to add this placeholder here so that
	# i can extend the Query field for other schema field to us
	#  in other schema definitions
	type Query {
		_empty: String
	}
`;

const server = new ApolloServer({
	typeDefs: [Query, User, Channel],
	resolvers: { ...userResolvers, ...channelResolvers },
});

const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log(`Server running on port ${url}`);
};

startServer();
