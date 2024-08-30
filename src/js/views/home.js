import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
// bring in card component
// inside of return have a div for each type(header)->div(store.characters).map
// return the card component with those props

export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="main-div w-100">
			<div className="d-flex flex-column w-100 mt-3 align-item-center">
				{/* characters card div */}
				<h1>Characters</h1> 
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="characters" /> 
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-item-center">
				{/* planets card div */}
				<h1>Planets</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="planets" /> 
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-item-center">
				{/* starships card div */}
				<h1>Starships</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.starships.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="starships" /> 
						)
					})}
				</div>
			</div>
		</div>
	)

};