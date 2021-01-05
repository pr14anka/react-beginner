import React, { useState} from "react";
import { render} from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
//    return  React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me !"),
//     React.createElement(Pet, { name: "Jaxck", Animal: "Dog", Breed: "Local" }),
//     React.createElement(Pet, {
//       name: "Humming",
//       Animal: "Bird",
//       Breed: "Asian",
//     }),
//     React.createElement(Pet, { name: "LUNA", Animal: "Cat", Breed: "Local" }),
//   ]);
    const themeHook = useState('darkBlue');
    return (
        <ThemeContext.Provider value = {themeHook}>
        <div>
            <header>
            <Link to = "/"> 
                Adopt Me !
            </Link>
            </header>
            <Router>
                <SearchParams  path = "/" />
                <Details path= "/details/:id" /> 
            </Router>
            </div>
        </ThemeContext.Provider>
    );
};
render(<App />, document.getElementById("root"));
