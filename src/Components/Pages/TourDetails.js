import React from "react";
import classes from "./TourDetails.module.css";
import Button from "../UI/Button";
import Header from "../Header/Header";

const TourDetails = ({ image, title, description, price, duration, location, rating }) => {
  return (
    <React.Fragment>
    <Header />
    <div className={classes["tour-details"]}>
      <img src={image} alt={title} className={classes["detail-image"]} />

      <div className={classes["detail-content"]}>
        <h1 className={classes['detail-title']}>{title}</h1>

        <div className={classes['detail-info']}>
          <p><strong>📍 Location:</strong> {location}</p>
          <p><strong>⏳ Duration:</strong> {duration}</p>
          <p><strong>⭐ Rating:</strong> {rating} / 5</p>
          <p><strong>💲 Price:</strong> ${price}</p>
        </div>

        <p className={classes['detail-description']}>{description}</p>

        <Button className={classes['book-now-btn']}>Book Now</Button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default TourDetails;
