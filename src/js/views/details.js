// for the details component I will bring in the category. use useParams from reactrouter.com to grab the id for the index.
// use ternary operator dependant on the category for the info depending on the category and the info.import React, { useContext } from "react";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import tatooine from "../../img/tatooine.jpg"
import noImage from "../../img/no-image.jpg"
import Bespin from "../../img/Bespin.jpg"



export const Details = ({ category }) => {
    const { store } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        setImgErr(false);

    }, [location]);


    const planet = store.planets.find((item, index) => index == params.theid);
    const character = store.characters.find((item, index) => index == params.theid);
    const starship = store.starships.find((item, index) => index == params.theid);

    const handleImgErr = () => setImgErr(true);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";
    const getImageUrl = () => {
        if (imgErr && planet.name === "Tatooine") {
            return tatooine;
        } else if (planet.name === "Bespin") {
            return Bespin;
        } else if (category === "starships") {
            return store.starshipImages[parseInt(params.theid)] || noImage;
        } return GUIDE_URL + category + "/" + (parseInt(params.theid) + 1) + ".jpg";

    }


    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-dark text-light my-5"
                style={{ minWidth: "75%", maxWidth: "75%", boxShadow: "0 8px 12px rgba(255, 255, 255, 0.2)" }}
            >
                <div className="row g-0">
                    <div className="col-md-4 p-3 d-flex align-items-center justify-content-center">
                        <img
                            src={getImageUrl()}
                            onError={handleImgErr}
                            className="img-fluid rounded"
                            alt="img not available"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-5">
                            <h2 className="card-title text-center mb-5"
                                style={{ fontSize: "3rem" }}
                            >
                                <u>
                                    {
                                        category == "characters" ? character.name :
                                            category == "planets" ? planet.name :
                                                starship.name
                                    }
                                </u>
                            </h2>


                            {/* detail 1 */}
                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Birth Year:" :
                                            category == "planets" ? "Terrain:" :
                                                "Manufacturer:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.birth_year :
                                            category == "planets" ? planet.terrain :
                                                starship.manufacturer
                                    }
                                </p>
                            </div>


                            {/* detail 2 */}

                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Hair color:" :
                                            category == "planets" ? "Gravity:" :
                                                "Passengers:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.hair_color :
                                            category == "planets" ? planet.gravity :
                                                starship.passengers
                                    }
                                </p>
                            </div>




                            {/* Detail 3 */}



                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Height:" :
                                            category == "planets" ? "Climate:" :
                                                "Crew limit:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.height :
                                            category == "planets" ? planet.climate :
                                                starship.crew
                                    }
                                </p>
                            </div>


                            {/* Detail 4 */}

                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Gender:" :
                                            category == "planets" ? "Diameter:" :
                                                "Atmospheric top speed:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.gender :
                                            category == "planets" ? planet.diameter :
                                                starship.max_atmosphering_speed
                                    }
                                </p>
                            </div>



                            {/* detail 5 */}


                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Eye color:" :
                                            category == "planets" ? "Population:" :
                                                "Price:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.eye_color :
                                            category == "planets" ? planet.population :
                                                starship.cost_in_credits
                                    }
                                </p>
                            </div>



                            {/* detail 6 */}



                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Weight:" :
                                            category == "planets" ? "Rotational period:" :
                                                "Food reserves:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                        category == "characters" ? character.mass :
                                            category == "planets" ? planet.rotation_period :
                                                starship.consumables
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


Details.propTypes = {
    match: PropTypes.object
};