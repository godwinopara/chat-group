import Layout from "../containers/Layout";
import Chatcontent from "../components/Chatcontent";

const Home = () => {
	const welcomeMessages = [
		{
			content: "glad to be here",
			time: "today 11:45am",
			user: {
				name: "Kate Chopin",
			},
		},
		{
			content: "feels great to be here",
			time: "today 11:45am",
			user: {
				name: "Kelechi Opara",
			},
		},
		{
			content: "glad to be here",
			time: "today 11:45am",
			user: {
				name: "Christiana Opara",
			},
		},
		{
			content: "Can wait to connect",
			time: "today 11:45am",
			user: {
				name: "Karin Chopin",
			},
		},
	];

	return (
		<Layout>
			<Chatcontent channelName="Welcome" chats={welcomeMessages} />
		</Layout>
	);
};

export default Home;
