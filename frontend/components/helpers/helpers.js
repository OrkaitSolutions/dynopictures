import { useEffect } from "react";

function useEffectAsync(effect, inputs) {
	useEffect(() => {
		effect();
	}, inputs);
}

const isEmpty = (arg) => {
	if (arg == null) {
		return true;
	} else if (typeof arg === "undefined") {
		return true;
	} else if (arg.length === 0) {
		return true;
	} else if (typeof arg === "object" && Object.keys(arg).length === 0) {
		return true;
	}
	return false;
};

const url = (endpoint) => {
	return `https://dynopictures.com${endpoint ?? "/"}`;
};


export { useEffectAsync, isEmpty, url };
