import fashionData from "../../data/gallery/fashion.gallery.data";
import GalleryView from "../../components/blocks/GalleryView.block";

const Party = () => {
	return <GalleryView header="fashion Image Gallery" data={fashionData} />;
};

export default Party;