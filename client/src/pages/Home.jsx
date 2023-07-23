import Layout from "../containers/Layout";
import Chatcontent from "../components/Chatcontent";
import { useQuery } from "@apollo/client";
import { GET_CHANNEL } from "../graphql/queries/channelQueries";

const Home = () => {
	const { loading, error, data } = useQuery(GET_CHANNEL, {
		variables: { channelId: "1" },
	});

	if (loading) return <h1>Loading.....</h1>;
	if (error) return <div>ERROR: {error.message}</div>;

	return (
		<Layout>
			<Chatcontent channelName={data?.channel.name} chats={data?.channel.messages} />
		</Layout>
	);
};

export default Home;
