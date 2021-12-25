// import "../styles/flexboxgrid.min.css";
import "../styles/index.css";
// import 'tailwindcss/tailwind.css'
import "bootstrap/dist/css/bootstrap.css";
// import '../styles/utils.css';
import { useEffect, useRef } from "react";
import useWindowDimensions from "../components/hooks/useWindowDimensions";
import UseContext from "../components/context/UseContext";
import "swiper/css/bundle";
import "react-before-after-slider-component/dist/build.css";
import Head from "next/head";

import NavbarBlock from "../components/blocks/Navbar.block";
import FooterBlock from "../components/blocks/Footer.block";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const HeadMeta = () => (
	<Head>
		<title>Dyno pictures</title>
		<meta name="description" content="Dyno pictures" />
		<meta name="keywords" content="Dyno pictures" />
		<meta name="author" content="Dyno pictures" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Dyno pictures" />
		<meta property="og:description" content="Dyno pictures" />
		<meta
			property="og:image"
			content="/assets/logo.png"
		/>
		<meta property="og:url" content="https://dynopictures.com/" />
		<meta property="og:site_name" content="Dyno pictures" />
	</Head>
);

function MyApp({ Component, pageProps }) {
	const { width, height } = useWindowDimensions();

	const categoryRef = useRef(null);

	const scrollHandler = (scroll) => {
		scroll.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		document.querySelector("body").classList = "";
	}, []);

	return (
		<>
			<HeadMeta />
			<UseContext.Provider
				value={{ width, height, categoryRef, scrollHandler }}
			>
				<NavbarBlock />
				<Component {...pageProps} />
				<FooterBlock />
			</UseContext.Provider>
		</>
	);
}

export default MyApp;
