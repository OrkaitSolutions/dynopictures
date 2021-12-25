import { useContext, useRef } from "react";
import Link from "next/link";
import UseContext from "../context/UseContext";

const CategoryBlock = () => {
	const { scrollHandler, categoryRef } = useContext(UseContext);

	return (
		<div className="category-wrapper">
			<div className="category-services">
				<h2>Services</h2>
			</div>
			<div className="category-container">
				<div className="category">
					<div
						className="category__item"
						onClick={() => scrollHandler(categoryRef)}
					>
						<div className="category__item__image">
							<img src="/category/bag.svg" alt="" />
						</div>
						<p>Product Photography</p>
					</div>
					<div
						className="category__item"
						onClick={() => scrollHandler(categoryRef)}
					>
						<div className="category__item__image">
							<img src="/category/cosmetics.svg" alt="" />
						</div>
						<p>Beauty Photography</p>
					</div>
					<div
						className="category__item"
						onClick={() => scrollHandler(categoryRef)}
					>
						<div className="category__item__image">
							<img src="/category/videography_2.svg" alt="" />
						</div>
						<p>Commercial Videography</p>
					</div>
					<div
						className="category__item"
						onClick={() => scrollHandler(categoryRef)}
					>
						<div className="category__item__image">
							<img src="/category/model.svg" alt="" />
						</div>
						<p>Model Photoshoot</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryBlock;
