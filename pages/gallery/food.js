import foodData from "../../data/gallery/food.gallery.data";
import GalleryView from "../../components/blocks/GalleryView.block";

const Party = () => {
	return <GalleryView header="Food Image Gallery" data={foodData} />;
};

export default Party;