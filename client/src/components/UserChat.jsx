import { styled } from "styled-components";
import userPlaceholder from "../assets/user-placeholder.jpeg";

const UserChat = () => {
	return (
		<UserChatWrapper>
			<Image src={userPlaceholder} alt="user image" />
			<ChatInfoWrapper>
				<ChatInfo>
					<h3>Nellie Francis</h3>
					<span>Yesterday at 2:29AM</span>
				</ChatInfo>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, sint! Lorem ipsum dolor
					sit amet, consectetur adipisicing elit. Exercitationem voluptatem tempore temporibus,
					facere doloribus quo reiciendis adipisci vero in saepe.
				</p>
			</ChatInfoWrapper>
		</UserChatWrapper>
	);
};

export default UserChat;

const Image = styled.img`
	height: 42px;
	width: 42px;
`;

const ChatInfoWrapper = styled.div`
	margin-left: 28px;
`;

const UserChatWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 41px;
`;

const ChatInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 12px;

	h3 {
		margin-right: 30px;
	}

	span {
		font-size: 14px;
	}
`;
