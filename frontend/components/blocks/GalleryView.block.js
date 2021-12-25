import LightGallery from "lightgallery/react";
import { url } from "../helpers/helpers";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryView = (props) => {
	return (
		<div className="view">
			<div className="view__header">
				<div className="view__header__title">
					<h2>{props.header}</h2>
				</div>
			</div>
			<div className="lightbox__wrapper">
				<LightGallery mode="lg-fade" plugins={[lgZoom]}>
					{props.data.map((item, index) => {
						return (
							<>
								<a
									data-src={url(item.src)}
									data-sub-html={`<h4> ${item.info} </h4><p> Photo Clicked by @${item.credit}</p>`}
								>
									<div className="image__wrapper">
										<img src={url(item.thumb_src)} />
									</div>
								</a>
							</>
						);
					})}
				</LightGallery>
			</div>
		</div>
	);
};

export default GalleryView;
