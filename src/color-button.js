import React, { useContext } from "react";
import { AppContext } from "./app-context";

const ColorButton = () => {
	
	const [ state, dispatch ] = useContext(AppContext);
	

	return(
		<div className="w3-margin w3-padding">	
			Change background color.
			
			<br />			
			<button className="w3-button w3-green" onClick={(() => dispatch({ type: 'setBackgroundGreen' }))} > Set to green </button>
			<button className="w3-button w3-orange" onClick={(() => dispatch({ type: 'setBackgroundOrange' }))} > Set to orange </button>
			<button className="w3-button w3-blue" onClick={(() => dispatch({ type: 'setDefaultBackground' }))} > Set to default </button>
		</div>	
	);

};

export default ColorButton;




