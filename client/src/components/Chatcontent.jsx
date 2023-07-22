import { styled } from "styled-components";
import { VscSend } from "react-icons/vsc";
import UserChat from "./UserChat";

const Chatcontent = ({ scroll }) => {
	return (
		<ChatContentWrapper>
			<HeadingWrapper>
				<Heading>FRONT-END DEVELOPER</Heading>
			</HeadingWrapper>
			<ChatContent>
				<UserChat />
				<UserChat />
				<UserChat />
				<UserChat />
				<UserChat />
				<UserChat />
				<UserChat />
			</ChatContent>
			<ChatInputWrapper>
				<ChatInput>
					<input type="text" name="chat-input" id="chat-input" placeholder="Type a message here" />
					<VscSend />
				</ChatInput>
			</ChatInputWrapper>
		</ChatContentWrapper>
	);
};

export default Chatcontent;

const ChatContentWrapper = styled.section`
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 347px;
	padding: 0 76px 40px 70px;
`;

const ChatContent = styled.div`
	margin: 100px 0 50px;
`;

const ChatInputWrapper = styled.div`
	position: fixed;
	bottom: 0;
	width: 900px;
	padding-bottom: 39.42px;
	background-color: white;
`;

const ChatInput = styled.div`
	width: 100%;
	position: relative;

	input {
		width: 100%;
		height: 52px;
		padding-left: 17.38px;
		border-radius: 8px;
		border: 1px solid black;
	}

	svg {
		position: absolute;
		top: 17px;
		right: 10px;
		display: flex;
		align-items: center;
	}
`;

const HeadingWrapper = styled.div`
	padding: 20px 0;
	position: fixed;
	top: 0;
	width: 900px;
	background-color: white;
`;

const Heading = styled.h1`
	font-weight: 700;
	font-size: 2rem;
	position: sticky;
	top: 0;
`;
