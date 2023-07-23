import { styled } from "styled-components";
import userPlaceholder from "../assets/user-placeholder.jpeg";

const UserChat = ({ chat }) => {
	return (
		<UserChatWrapper>
			<Image src={userPlaceholder} alt="user image" />
			<ChatInfoWrapper>
				<ChatInfo>
					<h3>{chat?.user.name}</h3>
					<span>{chat?.time}</span>
				</ChatInfo>
				<p>{chat?.content}</p>
			</ChatInfoWrapper>
		</UserChatWrapper>
	);
};

export default UserChat;

const Image = styled.img`
	height: 42px;
	width: 42px;
	border-radius: 7px;
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
