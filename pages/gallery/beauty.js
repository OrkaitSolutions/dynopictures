import beautyData from "../../data/gallery/beauty.gallery.data";
import GalleryView from "../../components/blocks/GalleryView.block";

const Party = () => {
	return <GalleryView header="beauty Image Gallery" data={beautyData} />;
};

export default Party;