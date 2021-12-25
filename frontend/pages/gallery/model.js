import modelData from "../../data/gallery/model.gallery.data";
import GalleryView from "../../components/blocks/GalleryView.block";

const Party = () => {
	return <GalleryView header="model Image Gallery" data={modelData} />;
};

export default Party;