import ChannelChats from "./pages/ChannelChats";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/channel/:channelId" element={<ChannelChats />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
