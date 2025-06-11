import React from "react";
import classes from "./TourCard.module.css";
import {useNavigate} from "react-router-dom";

const TourCard = ({id, image, title, description, price, onBook }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/tour/${id}`);
    };

  return (
    <div className={classes["tour-card"]} onClick={handleClick}>
      <img src={image} alt={title} className={classes["tour-image"]} />
      <div className={classes["tour-content"]}>
        <h3 className={classes["tour-title"]}>{title}</h3>
        <p className={classes["tour-description"]}>{description}</p>
        <div className={classes["tour-footer"]}>
          <span className={classes["tour-price"]}>${price}</span>
          {/* <button className="book-button" onClick={onBook}>
            Book Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
