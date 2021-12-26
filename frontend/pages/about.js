import TextScramble from "../components/blocks/TextSramble";
import aboutData from "../data/about.data";

const about = () => {
	return (
		<section className="about__wrapper">
			<div className="about__effect">
				<TextScramble />
			</div>
			<div className="about">
				{/* title */}
				<h2> {aboutData.question.title} </h2>
				<p> {aboutData.question.content} </p>

				{/* consistency */}
				<h2> {aboutData.consistency.title} </h2>
				<p> {aboutData.consistency.content} </p>

				{/* technical */}
				<h2> {aboutData.technical.title} </h2>
				<p> {aboutData.technical.content} </p>

				{/* professionalism */}
				<h2> {aboutData.professionalism.title} </h2>
				<p> {aboutData.professionalism.content} </p>
			</div>
		</section>
	);
};

export default about;
