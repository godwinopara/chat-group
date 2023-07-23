import Layout from "../containers/Layout";
import Chatcontent from "../components/Chatcontent";
import { useQuery } from "@apollo/client";
import { GET_CHANNEL } from "../graphql/queries/channelQueries";
import QueryResult from "../components/QueryResult";

const Home = () => {
	const { loading, error, data } = useQuery(GET_CHANNEL, {
		variables: { channelId: "1" },
	});

	return (
		<Layout>
			<QueryResult loading={loading} error={error} data={data}>
				<Chatcontent channelName={data?.channel.name} chats={data?.channel.messages} />
			</QueryResult>
		</Layout>
	);
};

export default Home;
