import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ minWidth: 300 });
	return isMobile ? children : null;
};

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768 });
	return isTablet ? children : null;
};

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 1024 });
	return isDesktop ? children : null;
};

const LargeDesktop = ({ children }) => {
	const isLargeDesktop = useMediaQuery({ minWidth: 1280 });
	return isLargeDesktop ? children : null;
};

export { Desktop, Tablet, Mobile, LargeDesktop };
