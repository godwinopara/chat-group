import { gql } from "@apollo/client";

export const GET_CHANNELS = gql`
	query getChannels {
		channels {
			id
			name
		}
	}
`;

export const GET_CHANNEL = gql`
	query getChannel($channelId: ID!) {
		channel(id: $channelId) {
			name
			description
			members {
				name
			}
			messages {
				content
				time
				user {
					name
				}
			}
		}
	}
`;
