import GalleryView from "../../components/blocks/GalleryView.block";
import productData  from "../../data/gallery/product.gallery.data";

const product = () => {
	return <GalleryView header="product Image Gallery" data={productData} />;
};

export default product;
