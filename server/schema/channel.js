import gql from "graphql-tag";
import { channels, users } from "../sample-data.js";
import { typeDefs as User } from "./user.js";

export const typeDefs = gql`
	type Channel {
		id: ID!
		name: String!
		description: String!
		members: [User!]
		messages: [Message!]
	}

	type Message {
		content: String!
		time: String!
		user: User!
	}

	extend type Query {
		channels: [Channel!]
		channel(id: ID!): Channel!
	}
`;

export const resolvers = {
	Query: {
		channels: () => channels,
		channel: (_, args) => channels.find((channel) => channel.id === args.id),
	},

	Channel: {
		members: (root) => {
			const channelMembers = root.members.map((member) => {
				return users.find((user) => user.id === member);
			});
			return channelMembers;
		},

		messages: (root) => {
			const userMessages = root.messages.map((message) => {
				const user = users.find((user) => user.id === message.user);
				return { ...message, user };
			});
			return userMessages;
		},
	},
};
