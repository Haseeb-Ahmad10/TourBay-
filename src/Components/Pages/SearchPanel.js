import React, { useState, useEffect, useCallback } from "react";
import { Country, City } from "country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import classes from "./SearchPanel.module.css";
import backgroundImage from "../../Assets/chicago.jpg";
import peshawar from '../../Assets/peshawar.jpg';
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import {  notification } from 'antd';

const SearchPanel = function () {
  const [selectedDate, setSelectedDate] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

// Notification setup
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = type => {
    api[type]({
      message: 'Booking Successful',
      description:
        'Your tour has been successfully booked! Enjoy your trip.',
    });
  };

  // Load countries on mount
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  // Load cities when country changes
  useEffect(() => {
    if (selectedCountry) {
      setCities(City.getCitiesOfCountry(selectedCountry.isoCode));
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  // search input validation logic
  const theFieldsAreValid = useCallback(() => {
    if (!selectedCountry || !selectedCity) {
      alert("Please select a country and city.");
      return false;
    }
    if (!selectedDate) {
      alert("Please select a date.");
      return false;
    }
    if (new Date(selectedDate) < new Date().setHours(0, 0, 0, 0)) {
      alert("Please select a valid future date.");
      return false;
    }
    if (!priceRange) {
      alert("Please select a price range.");
      return false;
    }
    return true;
  }, [selectedCountry, selectedCity, selectedDate, priceRange]);
  const handleModal = () => {
   
      if(theFieldsAreValid()){
        setIsModalOpen(true);
      }

  }

  
  const handleReset = () => {
    setSelectedCountry(null);
    setSelectedCity("");
    setSelectedDate("");
    setPriceRange("");
    setIsModalOpen(false);
  }
  console.log('hello')

  const handleCountryChange = (e) => {
            const country = countries.find(c => c.isoCode === e.target.value);
            setSelectedCountry(country);
            setSelectedCity("");
          }

    return (
        <React.Fragment>
        {contextHolder}
    <div className={classes["search-panel"]}>
        <div className={classes["search-box"]}>
          <div className={classes["input-group"]}>
              
          <label> <span className={classes.icons}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 2)"><path d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05z"/><circle cx="6.5" cy="6.5" r="2.5"/></g></svg></span> Location</label>
            
        <select
          value={selectedCountry?.isoCode || ""}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>

      {cities.length > 0 && (
        <label>
          
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </label>
      )}    
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
              <label> <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 3v18M17 8.23c0-4.973-9-4.973-9 0c0 5.578 9 1.962 9 7.54c0 4.973-9 4.973-9 0"/></svg></span> Price Range</label>
              <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Price Range</option>
          <option value="low">$50 - $100</option>
          <option value="medium">$100 - $200</option>
          <option value="high">$200+</option>
        </select>
        </div>
            <div>
            <Button className={classes['search-button']} onClick={handleModal}  ><span>
              <svg className={classes['search-icon']} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill='#fff' d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
              </span></Button>
          </div>
          </div>
          </div>
           <Modal
            isOpen={isModalOpen}
            onClose={()=>{setIsModalOpen(false)}}
             title={selectedCity}
        description={`Explore the beautiful city of ${selectedCity} in ${selectedCountry?.name} on ${selectedDate}. Enjoy a tour that fits your budget of ${priceRange}.`}
        image={ selectedCountry?.isoCode === 'PK' && selectedCity === 'Peshawar' ? peshawar : backgroundImage}      
            >
          <div style={{ marginTop: "1rem" }}>
          <Button type='primary' className={classes['book-btn']} onClick={() =>{ openNotificationWithIcon('success')
            handleReset() 
          }           
           }>Book Now</Button>
          </div>
      </Modal>
    
    </React.Fragment>
         
    )}

export default SearchPanel;