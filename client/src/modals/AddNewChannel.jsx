import { createPortal } from "react-dom";
import { styled } from "styled-components";

const AddNewChannel = ({
	showModal,
	onSubmit,
	channelName,
	channelDescription,
	handleChangeChannelDescription,
	handleChangeChannelName,
}) => {
	return (
		<div>
			{showModal &&
				createPortal(
					<NewChannel
						onSubmit={onSubmit}
						handleChangeChannelDescription={handleChangeChannelDescription}
						handleChangeChannelName={handleChangeChannelName}
						channelDescription={channelDescription}
						channelName={channelName}
					/>,
					document.body
				)}
		</div>
	);
};

export default AddNewChannel;

function NewChannel({
	onSubmit,
	handleChangeChannelName,
	handleChangeChannelDescription,
	channelDescription,
	channelName,
}) {
	return (
		<FormWrapper>
			<Form onSubmit={onSubmit}>
				<h2>NEW CHANNEL</h2>
				<div>
					<ChannelNameInput
						type="text"
						placeholder="Channel Name"
						value={channelName}
						onChange={handleChangeChannelName}
					/>
					<ChannelDescriptionTextArea
						name="new-channel"
						id="new-channel"
						cols="10"
						rows="4"
						placeholder="Channel Description"
						value={channelDescription}
						onChange={handleChangeChannelDescription}
					></ChannelDescriptionTextArea>
				</div>
				<ButtonWrapper>
					<SubmitButton type="submit">Save</SubmitButton>
				</ButtonWrapper>
			</Form>
		</FormWrapper>
	);
}

const FormWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(18, 15, 19, 0.5);
	color: #f2f2f2;
`;

const Form = styled.form`
	border-radius: 24px;
	background: #120f13;
	padding: 35px 39px 23px 45px;
	min-width: 656px;
	margin-left: 72px;
`;

const ChannelNameInput = styled.input`
	display: block;
	width: 100%;
	margin-top: 27px;
	margin-bottom: 27px;
	height: 48px;
	padding: 11px 16px;
	font-size: 18px;
	border-radius: 8px;
	background: #3c393f;
	outline: none;
	color: #828282;
	border: none;
`;

const ChannelDescriptionTextArea = styled.textarea`
	display: block;
	width: 100%;
	padding: 10px 16px 0;
	font-size: 18px;
	margin-bottom: 22px;
	border-radius: 8px;
	background: #3c393f;
	outline: none;
	color: #828282;
	border: none;
`;

const ButtonWrapper = styled.div`
	text-align: right;
`;

const SubmitButton = styled.button`
	width: 100px;
	height: 40px;
	cursor: pointer;
	border-radius: 8px;
	background: var(--blue-1, #2f80ed);
	outline: none;
	border: none;
`;
