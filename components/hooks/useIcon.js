import { useState, useEffect } from "react";

const useIcon = (initalIcon, finalIcon, initalState) => {

	const [iconStatus, setIconStatus] = useState(initalState);
	const [icon, setIcon] = useState(initalIcon);



	const useIconState = () => {
		iconStatus ? setIcon(finalIcon): setIcon(initalIcon);	
		setIconStatus(!iconStatus);
	};
	return [icon, useIconState, iconStatus];
};


export default useIcon;