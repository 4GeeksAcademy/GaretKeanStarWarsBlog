import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



// bring in {category} to the Navbar parameters
// create function for handleDelete(index) {actions.deleteFavorites(index)}

// created a dropdown toggle button for the favorites{store.favorites.length} creates a UL
// for each dropdown menu item for each name, wrap in a link for the details bringing in its category and index.
// Bring in a trash icon onClick that bring in a handleDeletefavorite(index)


// flamingtext.com (text design)



export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				
					<button className="btn btn-primary">Check the Context in action</button>
				
			</div>
		</nav>
	);
};
