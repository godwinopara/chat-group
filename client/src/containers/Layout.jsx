import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Layout = ({ children }) => {
	return (
		<LayoutWrapper>
			<Sidebar />
			{children}
		</LayoutWrapper>
	);
};

export default Layout;

const LayoutWrapper = styled.div`
	display: flex;
	width: 100%;
`;
