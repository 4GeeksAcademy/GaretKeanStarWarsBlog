
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// addToFavorites function is called when clicking on the heart icon. This function is going to add that item to the store.favorites.
// Inside of the same functions have a way to delete the favorite if it is already a favorite.
// for the <h5> tags bring in item.name variable. for the <p> use ternary operator depending on what the category is.
// card button group div linked to the details page, button for icon for add to favorites



const Card = ({item, index, category}) => {
    const { store, actions } = useContext(Context);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/"; 

    return (

        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>

    );




};

export default Card