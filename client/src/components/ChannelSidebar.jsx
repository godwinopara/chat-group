import { useQuery } from "@apollo/client";
import { styled } from "styled-components";
import { GET_CHANNEL } from "../graphql/queries/channelQueries";
import { useParams } from "react-router-dom";
import userPlaceholder from "../assets/user-placeholder.jpeg";
import { VscChevronLeft } from "react-icons/vsc";

const ChannelSidebar = ({ onClick }) => {
	const { channelId } = useParams();
	const { loading, error, data } = useQuery(GET_CHANNEL, {
		variables: { channelId },
	});

	return (
		<SidebarWrapper>
			<SidebarNav>
				<div onClick={onClick}>
					<VscChevronLeft />
				</div>
				<h2>All Channel</h2>
			</SidebarNav>
			<ChannelDescription>
				<h2>{data?.channel.name}</h2>
				<p>{data?.channel.description}</p>
			</ChannelDescription>
			<ChannelList>
				<h3>MEMBERS</h3>
				<ul>
					{data?.channel.members.map((member, id) => {
						return (
							<ChannelUserWrapper key={id}>
								<Image src={userPlaceholder} alt="user image placeholder" />
								<List>{member.name}</List>
							</ChannelUserWrapper>
						);
					})}
				</ul>
			</ChannelList>
			<div></div>
		</SidebarWrapper>
	);
};

export default ChannelSidebar;

const SidebarWrapper = styled.nav`
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
	align-items: center;
	min-height: 59.49px;
	margin-bottom: 20px;
	padding: 0 27px 0 33px;
	background: #0b090c;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	div {
		margin-right: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	svg {
		font-size: 2.4rem;
	}
`;

const Image = styled.img`
	height: 42px;
	width: 42px;
	border-radius: 7px;
`;

const ChannelUserWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ChannelDescription = styled.div`
	margin-bottom: 44px;
	position: relative;
	padding: 0 27px 0 33px;

	h2 {
		margin-bottom: 18px;
	}
`;

const ChannelList = styled.div`
	padding: 0 27px 0 33px;

	h3 {
		margin-bottom: 25px;
	}
`;

const List = styled.li`
	list-style: none;
	cursor: pointer;
	margin-left: 28px;

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

// const StyledLink = styled(Link)`
// 	display: flex;
// 	align-items: center;
// 	list-style: none;
// 	color: inherit;
// 	text-decoration: none;
// `;
