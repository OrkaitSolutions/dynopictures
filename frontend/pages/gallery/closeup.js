import closeupData from "../../data/gallery/closeup.gallery.data";
import GalleryView from "../../components/blocks/GalleryView.block";

const Closeup = () => {
	return <GalleryView header="closeup Image Gallery" data={closeupData} />;
};

export default Closeup;