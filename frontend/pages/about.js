import TextScramble from "../components/blocks/TextSramble";

const about = () => {
	return (
		<section className="about__wrapper">
			<div className="about__effect">
				<TextScramble />
			</div>
			<div className="about">
				<h2> Why Choose Dyno pictures?</h2>
				<p>
					Because when things matter, you've only got one shot. And
					there's no substitute for experience. These days,
					photography is practiced by anyone with a smartphone, but
					it's mastered by few.
				</p>

				<h3>Consistency</h3>
				<p>
					DynoPictures(DP) know how to achieve great results—every
					time. You get a strong collection of images that tell your
					story, not a few lucky snapshots, and you will work with
					someone who knows how to produce a quality image under any
					circumstances.
				</p>
				<h3>Technical Skills</h3>
				<p>
					DynoPictures(DP) are more than picture takers. They are
					students of art, lighting, posing, fashion and even interior
					design. They combine these elements to create images that
					fit your unique style and become works of art you will
					treasure for generations.
				</p>

				<h3>Professionalism</h3>
				<p>
					When you hire DynoPictures(DP) you know you're getting
					someone who is willing to go the extra mile to deliver the
					best possible images.
				</p>
			</div>
		</section>
	);
};

export default about;
