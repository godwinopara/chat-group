import { FaPlus, FaSistrix } from "react-icons/fa6";
import styled from "styled-components";

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<SidebarNav>
				<p>Channel</p>
				<FaPlus />
			</SidebarNav>
			<SearchBar>
				<input type="text" name="search" id="search" />
				<FaSistrix />
			</SearchBar>
			<div>
				<ul>
					<List>
						<span>FE</span>
						FRONT-END DEVELOPER
					</List>
					<List>
						<span>R</span>
						RANDOM
					</List>
					<List>
						<span>B</span>
						BACK-END
					</List>
					<List>
						<span>CA</span>
						CATS AND DOGS
					</List>
					<List>
						<span>W</span>
						WELCOME
					</List>
				</ul>
			</div>
			<div></div>
		</SidebarWrapper>
	);
};

export default Sidebar;

const SidebarWrapper = styled.section`
	width: 25%;
	border: 1px solid black;
	padding: 0 27px 0 33px;
	min-height: 100vh;
`;

const SidebarNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 0;
	border: 1px solid black;
	margin-bottom: 20px;
`;

const SearchBar = styled.div`
	margin-bottom: 35px;
	position: relative;

	input {
		height: 48px;
		width: 100%;
		padding: 12px 12px 12px 35px;
	}

	svg {
		position: absolute;
		left: 10px;
		top: 16px;
		display: flex;
		align-items: center;
	}
`;

const List = styled.li`
	margin-bottom: 20px;
	display: flex;
	align-items: center;

	span {
		margin-right: 12px;
		border: 1px solid black;
		height: 42px;
		width: 42px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
