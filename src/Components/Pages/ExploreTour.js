import React, { useState } from "react";
import classes from "./ExploreTour.module.css";
import backgroundImage from '../../Assets/chicago.jpg'; 
import { NavLink } from "react-router-dom";

const ExploreTour = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
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

        <div className={classes["search-panel"]}>
          <div className={classes["search-box"]}>
            <div className={classes["input-group"]}>
              <label> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)"><path d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05z"/><circle cx="6.5" cy="6.5" r="2.5"/></g></svg></span> Location</label>
              <input
                type="text"
                placeholder="Where you want to go?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className={classes["input-group"]}>
              <label> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/></svg></span>  Choose Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div className={classes["input-group"]}>
              <label> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 3v18M17 8.23c0-4.973-9-4.973-9 0c0 5.578 9 1.962 9 7.54c0 4.973-9 4.973-9 0"/></svg></span> Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option>Choose Here</option>
                <option value="0-100">$0 - $100</option>
                <option value="100-500">$100 - $500</option>
                <option value="500+">$500+</option>
              </select>
            </div>

            <button className={classes["search-button"]}>🔍</button>
          </div>
        </div>
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
  );
};

export default ExploreTour;
