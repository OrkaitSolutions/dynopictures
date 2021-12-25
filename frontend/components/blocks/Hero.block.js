import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { sliderData, sliderDataMobile } from "../../data/slider.data";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { useContext } from "react";
import UseContext from "../context/UseContext";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const HeroBlock = () => {
	const { width } = useContext(UseContext);
    const [sliderDataFinal, setSliderData] = useState(sliderData);

    useEffect(() => {
        if (width >= 600) {
            setSliderData(sliderData);
        } else {
            setSliderData(sliderDataMobile);
        }
    }, [width]);

 

	return (
		<div className="swiper__wrapper">
			<Swiper
				loop={true}
				pagination={{ dynamicBullets: true }}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				className="mySwiper"
			>
				{
                    Object.values(sliderDataFinal).map((url) => (
                        <SwiperSlide>
                            <img src={url} alt="" />
                        </SwiperSlide>
                  ))
                }
			</Swiper>
		</div>
	);
};

export default HeroBlock;
