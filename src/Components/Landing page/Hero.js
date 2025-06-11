import Button from "../UI/Button";
import classes from "./Hero.module.css";
import greece from "../../Assets/greece2.jpg";
import usa from "../../Assets/usa1.jpg";
import chc from '../../Assets/chc.jpg'
import Header from "../Header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = function () {

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header />
    <div className={classes.hero}>
      <div className="hero-content">
        <h1 className={classes['hero-title']}>Explore The New World With TourBay</h1>
        <p>No matter where in the world you want to go, we can help get you there and make your tour a stupendous memory</p>
        <Button className={classes['explore-btn']}  onClick={() => navigate('/explore')}>Explore Now</Button>
      </div>
                
        <div className={classes["hero-image"]}>
            <div className={classes['image-greece']}>
            <img
                src={greece} 
                alt="Hero"
                className={classes['image-greece']}
            />
            </div>
                    
           <div className={classes['image-usa-chc']}>
            <img
                src={usa} 
                alt="Hero"
                className={classes['image-usa']}
                />
                <img
                src={chc}
                alt="Hero"
                className={classes['image-chc']}
            />
            </div>
        </div>    
    </div>
    </React.Fragment>
  );
}

export default Hero;