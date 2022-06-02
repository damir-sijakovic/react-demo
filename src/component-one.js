import React, { useContext } from "react";
import { AppContext } from "./app-context";

const ComponentOne = () => {
	
	const [ state, dispatch ] = useContext(AppContext);
	

	return(
		<div className="w3-margin w3-padding">	
			<p>			  
			  <div className="w3-button w3-blue" onClick={(() => dispatch({ type: 'decreaseCount' }))} > - </div>
			  <span> Component one - Decrement count </span>
			</p> 		
		</div>	
	);

};

export default ComponentOne;




