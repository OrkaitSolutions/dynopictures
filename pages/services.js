import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useEffectAsync } from "../components/helpers/helpers";
import Image from "next/image";
import Link from "next/link";

const gallery = () => {
	const unsplash = (search = "", width, height) => {};

	return (
		<div className="gallery-wrapper">
			<div className="gallery">
				{/* X00 | 000 | 000 */}

				<Link href="/gallery/product" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/product.jpg"
								alt=""
								title=""
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Product Photography
						</div>
					</div>
				</Link>

				<Link href="/gallery/wedding" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/wedding.jpg"
								alt=""
								title=""
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Wedding Photography
						</div>
					</div>
				</Link>

				{/* 0X0 | 000 | 000 */}
				<Link href="/gallery/closeup" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/closeup.jpg"
								alt="Closeup Photgraphy by dyno pictures"
								title="Closeup Photgraphy by dyno pictures"
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Closeup Photography
						</div>
					</div>
				</Link>

				{/* 00X | 000 | 000 */}
				<Link href="/gallery/beauty" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/beauty.jpg"
								alt=""
								title=""
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Beauty Photography
						</div>
					</div>
				</Link>

				{/* 000 | X00 | 000 */}
				<Link href="/gallery/food" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/food.jpg"
								alt=""
								title=""
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Food Photography
						</div>
					</div>
				</Link>

				{/* 000 | 0X0 | 000 */}
				<Link href="/gallery/model" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/model.jpg"
								alt=""
								title=""
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Model Photography
						</div>
					</div>
				</Link>

				{/* 000 | 000 | X00 */}
				<Link href="/gallery/fashion" passHref>
					<div className="gallery__item">
						<div className="gallery__item__image">
							<img
								src="/showcase/fashion.jpg"
								alt=""
								title=""
								width="100%"
								height="100%"
							></img>
						</div>
						<div className="gallery__item__text">
							Fashion Photography
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default gallery;
