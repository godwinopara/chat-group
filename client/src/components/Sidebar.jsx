import { useEffect, useState } from "react";
import ChannelSidebar from "./ChannelSidebar";
import HomeSidebar from "./HomeSidebar";
import { useLocation, useParams } from "react-router-dom";

const Sidebar = () => {
	const { channelId } = useParams();
	const { pathname } = useLocation();

	const [showHomeNav, setShowHomeNav] = useState(true);
	const [showChannelNav, setShowChannelNav] = useState(false);

	const handleShowHomeNav = () => {
		setShowHomeNav(false);
		setShowChannelNav(true);
	};

	const handleShowChannelNav = () => {
		setShowChannelNav(false);
		setShowHomeNav(true);
	};

	useEffect(() => {
		if (pathname.includes("/channel/")) {
			setShowHomeNav(false);
			setShowChannelNav(true);
		}
	}, []);

	return (
		<>
			{showHomeNav && <HomeSidebar onClick={handleShowHomeNav} />}
			{showChannelNav && <ChannelSidebar onClick={handleShowChannelNav} />}
		</>
	);
};

export default Sidebar;
