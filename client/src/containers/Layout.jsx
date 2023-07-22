import Chatcontent from "../components/Chatcontent";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Layout = () => {
	return (
		<LayoutWrapper>
			<Sidebar />
			<Chatcontent />
		</LayoutWrapper>
	);
};

export default Layout;

const LayoutWrapper = styled.div`
	display: flex;
	width: 100%;
`;
