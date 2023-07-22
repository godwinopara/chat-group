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
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 347px;
	padding: 0 76px 40px 70px;
	background: #252329;
	color: #e0e0e0;
`;

const ChatContent = styled.div`
	margin: 100px 0 50px;
`;

const ChatInputWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 347px;
	width: 70%;
	padding-bottom: 39.42px;
	background: #252329;
	padding-left: 70px;
	input {
		border-radius: 8px;
		background: #3c393f;
		color: #bdbdbd;
	}
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
	position: fixed;
	top: 0;
	left: 347px;
	min-height: 59.49px;
	width: 100%;
	z-index: 100;
	display: flex;
	align-items: center;
	background: #252329;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Heading = styled.h1`
	padding-left: 76px;
	color: #e0e0e0;
`;
