const screens = {
	sm: 640,
	// => @media (min-width: 640px) { ... }

	md: 768,
	// => @media (min-width: 768px) { ... }

	lg: 1024,
	// => @media (min-width: 1024px) { ... }

	xl: 1280,
	// => @media (min-width: 1280px) { ... }
};

class MediaQueryConstructor {
	constructor(width) {
		this.width = width;
	}

	onMobile() {
		return this.width < screens.sm;
	}

	onTablet() {
		return this.width >= screens.sm && this.width < screens.md;
	}

	onDesktop() {
		return this.width >= screens.md && this.width < screens.lg;
	}

	onLargeDesktop() {
		return this.width >= screens.lg && this.width < screens.xl;
	}
}

const MediaQuery = (width) => {
    return new MediaQueryConstructor(width);
}

export default MediaQuery;
