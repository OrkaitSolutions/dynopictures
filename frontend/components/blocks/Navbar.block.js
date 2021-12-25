import React from "react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import MediaQuery from "../helpers/media.helper";
import { useContext } from "react";
import UseContext from "../context/UseContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavbarBlock = () => {
	const value = useContext(UseContext);

	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (value.width >= 768) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	}, [value.width]);

	const menuStateHandler = () => {
		setMenuOpen(!menuOpen);
	};

	// const CSS = (style1, style2) => (Media.onMobile() ? style1 : style2);

	return (
		<header className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar__action">
					<div className="navbar__action__logo">
						<Link href="/" passHref>
							<Image
								src="/assets/dyno.svg"
								width={120}
								height={100}
							/>
						</Link>
					</div>
					<div
						className="navbar__action__hamburger"
						onClick={menuStateHandler}
					>
						<FontAwesomeIcon icon={faBars} color={"#ddaa44"} />
					</div>
				</div>

				<nav className="navbar__items" hidden={menuOpen}>
					<Link href="/" passHref>
						<div className="navbar__item">Home</div>
					</Link>
					<Link href="/services" passHref prefetch>
						<div className="navbar__item">Services</div>
					</Link>

					<Link href="/contact" passHref>
						<div className="navbar__item">Contact</div>
					</Link>
					<Link href="/about" passHref>
						<div className="navbar__item navbar__item__about">
							About
						</div>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default NavbarBlock;
