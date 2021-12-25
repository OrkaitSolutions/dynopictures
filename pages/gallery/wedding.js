import GalleryView from "../../components/blocks/GalleryView.block";
import weddingData  from "../../data/gallery/wedding.gallery.data";

const wedding = () => {
	return <GalleryView header="wedding Image Gallery" data={weddingData} />;
};

export default wedding;
