import NavbarBlock from "../components/blocks/Navbar.block";
import HeroBlock from "../components/blocks/Hero.block";
import QuoteBlock from "../components/blocks/Quote.block";
import FooterBlock from "../components/blocks/Footer.block";
import DirectionBlock from "../components/blocks/Direction.block";
import CategoryBlock from "../components/blocks/Category.block";
import MoreInfo from "../components/blocks/MoreInfo.block";

const Home = () => {
	return (
		<>
			<section>
				<HeroBlock />
			</section>
			<section className="block">
				<CategoryBlock />
			</section>
			<section className="block">
				<MoreInfo />
			</section>
			<section className="block">
				<QuoteBlock />
			</section>
			<section className="block">
				<DirectionBlock />
			</section>
		</>
	);
};

export default Home;
