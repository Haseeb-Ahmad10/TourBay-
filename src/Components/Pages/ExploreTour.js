import classes from "./ExploreTour.module.css";
import backgroundImage from '../../Assets/chicago.jpg'; 
import { NavLink } from "react-router-dom";
  import  React from "react";
import SearchPanel from "./SearchPanel";

const ExploreTour = () => {

  return (
    <React.Fragment>
    <div className={classes["explore-tour"]}>
      <div
        className={classes["header-image"]}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
    <nav className={classes["nav-bar"]}>
        <NavLink to="/" className={classes.logo}>
              Tour<span>Bay</span>
         </NavLink>
        <div className={classes["nav-links"]}>
            
            <NavLink to="/book-tour" className={classes["nav-link"]}>
              Tours
            </NavLink>
            <NavLink to="/add-tour" className={classes["nav-link"]}>
              Add Tour
            </NavLink>
            
            <NavLink to="/my-tour" className={classes["nav-link"]}>
              My Tour
            </NavLink>
          </div>
        </nav>
 <SearchPanel/>          
        </div>
        
      <div className={classes["city-tags"]}>
        {[
          "Istanbul", "Dubai", "Ankara", "Orlando",
          "Berlin", "London", "New Orleans"
        ].map((city) => (
          <span key={city} className={classes.tag}>{city}</span>
        ))}
      </div>
    </div>
    </React.Fragment>
  );
};

export default ExploreTour;
