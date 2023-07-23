import React from "react";
import Layout from "../containers/Layout";
import Chatcontent from "../components/Chatcontent";
import { useQuery } from "@apollo/client";
import { GET_CHANNEL } from "../graphql/queries/channelQueries";
import { useParams } from "react-router-dom";
import QueryResult from "../components/QueryResult";

const ChannelChats = () => {
	const { channelId } = useParams();
	const { loading, error, data } = useQuery(GET_CHANNEL, {
		variables: { channelId },
	});

	return (
		<QueryResult loading={loading} error={error} data={data}>
			<Layout>
				<Chatcontent channelName={data?.channel.name} chats={data?.channel.messages} />
			</Layout>
		</QueryResult>
	);
};

export default ChannelChats;
