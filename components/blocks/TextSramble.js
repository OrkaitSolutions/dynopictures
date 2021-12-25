import TextScrambler from "react-scramble-text";
import aboutPhrases from "../../data/scramble.data";

const TextSramble = () => {
	return (
		<div className="text-scrambler">
			<TextScrambler
				symbolColor="rgb(255, 0, 0)"
				phrases={aboutPhrases}
				speed={50}
				pauseTime={800}
			/>
		</div>
	);
};

export default TextSramble;
