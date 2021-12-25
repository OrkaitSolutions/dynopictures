import React, { useState, useEffect } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import { isEmpty } from "../helpers/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import customToast from "../helpers/customToast";

const FIRST_IMAGE = {
	imageUrl: "/showcase/model.jpg",
};
const SECOND_IMAGE = {
	imageUrl: "/showcase/food.jpg",
};

const ContactBlock = () => {
	const formInitalState = {
		name: "",
		email: "",
		message: "",
	};

	const [user, setUser] = useState(formInitalState);

	const onChangeHandler = ({ target: { value, name } }) => {
		setUser({
			...user,
			[name]: value,
		});
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (isEmpty(user?.name || "")) {
			customToast("warning", "Name cannot be empty");
		} else if (!isEmail(user?.email || "")) {
			customToast("warning", "Email is not valid");
		} else if (isEmpty(user?.message || "")) {
			customToast("warning", "Message cannot be empty");
		} else {
			axios
				.post("https://submit-form.com/kW4Gb2xf", {
					...user,
				})
				.then((result) => {
					if (result?.status === 200) {
						customToast("success", "message is sent");
						setTimeout(() => {
							setUser(formInitalState);
						}, 1000);
					} else {
						customToast("error", "Could not send message");
					}
				})
				.catch(() => {
					customToast("error", "Could not send message");
				});
		}
	};

	return (
		<div className="contact-wrapper">
			<div className="contact__image">
				<div className="contact__image__showcase">
					<ReactBeforeSliderComponent
						firstImage={FIRST_IMAGE}
						secondImage={SECOND_IMAGE}
					/>
				</div>
			</div>
			<div className="contact__main">
				<div className="contact">
					<h3>Contact Me</h3>

					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						className="no-autofill"
						required={true}
						onChange={onChangeHandler}
						value={user.name}
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						className="no-autofill"
						required={true}
						onChange={onChangeHandler}
						value={user.email}
					/>

					<label htmlFor="Message">Message</label>
					<textarea
						type="text"
						name="message"
						required={true}
						onChange={onChangeHandler}
						value={user.message}
					/>

					<div className="btn-contact contact-button-override">
						<div className="btn-contact__icon">
							{/* fontawesome use */}
							<FontAwesomeIcon icon={faComment} color="#fff" />
						</div>
						<div
							className="btn-contact__text"
							onClick={formSubmitHandler}
						>
							Contact Me
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBlock;
