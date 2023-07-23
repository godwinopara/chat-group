import { styled } from "styled-components";

const QueryResult = ({ loading, error, data, children }) => {
	if (error) {
		return <p>ERROR: {error.message}</p>;
	}

	if (loading) {
		return <SpinnerContainer>Loading .....</SpinnerContainer>;
	}

	if (data) {
		return children;
	}
};

export default QueryResult;

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;
