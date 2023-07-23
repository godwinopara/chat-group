import React from "react";
import Layout from "../containers/Layout";
import Chatcontent from "../components/Chatcontent";
import { useQuery } from "@apollo/client";
import { GET_CHANNEL } from "../graphql/queries/channelQueries";
import { useParams } from "react-router-dom";

const ChannelChats = () => {
	const { channelId } = useParams();
	const { loading, error, data } = useQuery(GET_CHANNEL, {
		variables: { channelId },
	});

	return (
		<Layout>
			<Chatcontent channelName={data?.channel.name} chats={data?.channel.messages} />
		</Layout>
	);
};

export default ChannelChats;
