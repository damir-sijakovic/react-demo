import React, { useContext } from "react";
import { AppContext } from "./app-context";

const ComponentTwo = () => {
	
	const [ state, dispatch ] = useContext(AppContext);
	
	
	return(
		<div className="w3-margin w3-padding">	
			<p>			  
			  <div className="w3-button w3-blue" onClick={(() => dispatch({ type: 'increaseCount' }))} > + </div>
			  <span> Component two - Increment count </span>
			</p> 		
		</div>	
		
	);

};

export default ComponentTwo;


	
	
