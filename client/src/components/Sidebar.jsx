import { useQuery } from "@apollo/client";
import { FaPlus, FaSistrix } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GET_CHANNELS } from "../graphql/queries/channelQueries";

const Sidebar = () => {
	const { loading, error, data } = useQuery(GET_CHANNELS);

	return (
		<SidebarWrapper>
			<SidebarNav>
				<p>Channel</p>
				<div>
					<FaPlus />
				</div>
			</SidebarNav>
			<SearchBar>
				<input type="text" name="search" id="search" />
				<FaSistrix />
			</SearchBar>
			<ChannelList>
				<ul>
					{data?.channels.map((channel) => {
						return (
							<List key={channel.id}>
								<StyledLink to={`/channel/${channel.id}`}>
									<span>FE</span>
									{channel.name}
								</StyledLink>
							</List>
						);
					})}
				</ul>
			</ChannelList>
			<div></div>
		</SidebarWrapper>
	);
};

export default Sidebar;

const SidebarWrapper = styled.section`
	width: 25%;
	border: 1px solid black;
	min-height: 100vh;
	position: fixed;
	top: 0;
	inset: 0;
	overflow-y: auto;
	background-color: #120f13;
	color: #bdbdbd;
`;

const SidebarNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 59.49px;
	margin-bottom: 20px;
	padding: 0 27px 0 33px;
	background: #0b090c;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	div {
		cursor: pointer;
		border-radius: 8px;
		background: #252329;
		height: 24px;
		width: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const SearchBar = styled.div`
	margin-bottom: 35px;
	position: relative;
	padding: 0 27px 0 33px;

	input {
		height: 48px;
		width: 100%;
		padding: 12px 12px 12px 40px;
		border-radius: 8px;
		background: #3c393f;
		color: #bdbdbd;
	}

	svg {
		position: absolute;
		left: 50px;
		top: 17px;
		display: flex;
		align-items: center;
	}
`;

const ChannelList = styled.div`
	padding: 0 27px 0 33px;
`;

const List = styled.li`
	margin-bottom: 20px;
	list-style: none;
	cursor: pointer;

	span {
		margin-right: 12px;
		border: 1px solid black;
		border-radius: 8px;
		background: #252329;
		height: 42px;
		width: 42px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	list-style: none;
	color: inherit;
	text-decoration: none;
`;
