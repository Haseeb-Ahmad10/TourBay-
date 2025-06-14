import React from "react";
import classes from "./TourDetails.module.css";
import Button from "../UI/Button";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";


const TourDetails = ({ image, title, description, price, duration, location, rating }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate('/add-tour');
  };
  return (
    <React.Fragment>
    <Header />
    <div className={classes["tour-details"]}>
      <img src={image} alt={title} className={classes["detail-image"]} />

      <div className={classes["detail-content"]}>
        <h1 className={classes['detail-title']}>{title}</h1>

        <div className={classes['detail-info']}>
          <p ><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)"><path d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05z"/><circle cx="6.5" cy="6.5" r="2.5"/></g></svg></span><strong > Location:</strong> {location}</p>
          <p><strong><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 0 0-.583.156a1 1 0 0 1-.59-1.911q.36-.112.73-.195a1 1 0 0 1 1.197.754m2.05 0a1 1 0 0 1 1.196-.754c4.454 1.01 7.78 4.992 7.78 9.752c0 5.523-4.478 10-10 10c-4.761 0-8.743-3.325-9.753-7.779a1 1 0 0 1 1.95-.442a8 8 0 1 0 9.58-9.58a1 1 0 0 1-.753-1.197M6.614 4.72a1 1 0 0 1-.053 1.414q-.222.205-.427.426A1 1 0 0 1 4.668 5.2q.255-.276.532-.533a1 1 0 0 1 1.414.053M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1M3.693 8.388a1 1 0 0 1 .661 1.25a8 8 0 0 0-.156.583a1 1 0 0 1-1.95-.442q.084-.37.195-.73a1 1 0 0 1 1.25-.661"/></g></svg></span> Duration:</strong> {duration}</p>
          <p><strong><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36"><path fill="#FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"/></svg></span> Rating:</strong> {rating} / 5</p>
          <p><strong><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 3v18M17 8.23c0-4.973-9-4.973-9 0c0 5.578 9 1.962 9 7.54c0 4.973-9 4.973-9 0"/></svg></span> Price:</strong> ${price}</p>
        </div>

        <p className={classes['detail-description']}>{description}</p>

        <Button className={classes['book-now-btn']} onClick={handleBookNow} >Book Now</Button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default TourDetails;
