import './App.css';
import React, { useReducer } from "react";
import { AppContext } from "./app-context";
import { initialState, reducer } from './app-state.js';
import ComponentOne from "./component-one";
import ComponentTwo from "./component-two";
import ColorButton from "./color-button";


const App = () => {
	
	const [state, dispatch] = useReducer(reducer, initialState);
		
	return (
	     <AppContext.Provider value={[state, dispatch]}>
	        

         
        <div className="app-container w3-card-4" style={{backgroundColor: state.bodyBackground  }}>

		<header className="w3-container w3-blue">
		  <h1>DS React App</h1>
		  <p>Using useReducer object as global state with context</p>
		</header>

		<div className="w3-container">
			<span className="w3-tag w3-jumbo w3-black w3-margin w3-padding">{state.count}</span>
	        <hr />
			<ComponentOne />	
			<ComponentTwo />	
			<ColorButton />
		</div>

		<footer className="w3-container w3-blue">
		  <h5>Using w3.css framework for demo</h5>
		</footer>

		</div> 
         
         
         </AppContext.Provider>
	);
};

export default App;
