import {
	faPhoneAlt,
	faEnvelope,
	faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import UseContext from "../context/UseContext";

const DirectionBlock = () => {
	const { categoryRef } = useContext(UseContext);

	return (
		<div className="direction__wrapper">
			<div className="direction">
				<div className="direction__contact" ref={categoryRef}>
					<div className="direction__contact__image">
						<img src="/assets/camera.png"></img>
					</div>

					<div className="direction__contact__text">
						Hey! we are looking forward to start a project for you!
					</div>

					<div className="direction__contact__buttons">
						<div className="btn-contact">
							<div className="btn-contact__icon">
								<FontAwesomeIcon
									icon={faPhoneAlt}
									color={"#fff"}
									width="100%"
								/>
							</div>
							<div
								href="tel:+900300400"
								className="btn-contact__text"
								onClick={() => {
									window.location = "tel:+91 8291219363";
								}}
							>
								+91 8291219363
							</div>
						</div>

						<div className="btn-contact">
							<div className="btn-contact__icon">
								<FontAwesomeIcon
									icon={faEnvelope}
									color={"#fff"}
									width="100%"
								/>
							</div>
							<div
								className="btn-contact__text"
								onClick={() => {
									window.location =
										"mailto:dynopicture@gmail.com";
								}}
							>
								dynopicture@gmail.com
							</div>
						</div>

						<div className="btn-contact">
							<div className="btn-contact__icon">
								<FontAwesomeIcon
									icon={faMapMarker}
									color={"#fff"}
									width="100%"
								/>
							</div>
							<Link
								passHref={true}
								href="https://g.page/dynopictures?share" 
							>
								<div className="btn-contact__text">Find Us</div>
							</Link>
						</div>
					</div>
					<div className="direction__contact__address">
						36/2 Navjeevan Nagar, Hariyali Village, Mumbai,
						Maharashtra 400083 India
					</div>
				</div>
			</div>

			{/* <div className="direction__contact">
				
			</div> */}
		</div>
	);
};

export default DirectionBlock;
