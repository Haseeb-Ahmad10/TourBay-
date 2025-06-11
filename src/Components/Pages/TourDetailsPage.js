import React from "react";
import { useParams } from "react-router-dom";
import TourDetails from "./TourDetails";
import chicago from "../../Assets/chicago.jpg"; 
import miami from "../../Assets/miami.jpg"; 
import paris from "../../Assets/paris.jpg";
import london from "../../Assets/london.jpg";
import berlin from "../../Assets/berlin.jpg";
import newYork from "../../Assets/newyork.jpg";

const tourData = {
  chicago: {
    image: chicago,
    title: "Explore Chicago",
    description: "Experience the Windy City with architecture, deep-dish, and the lakefront.",
    price: 249,
    duration: "3 days, 2 nights",
    location: "Chicago, IL",
    rating: 4.7,
  },
  miami: {
    image: miami,
    title: "Miami Beach Getaway",
    description: "Relax on the sunny beaches of Miami with our exclusive tour packages.",
    price: 299,
    duration: "4 days, 3 nights",
    location: "Miami, FL",
    rating: 4.8,
  },
  paris: {
    image: paris,
    title: "Paris in a Day",
    description: "Experience the magic of Paris with a full-day guided tour of the city.",
    price: 399,
    duration: "3 days, 2 nights",
    location: "Paris, France",
    rating: 4.6,
  },
    london: {
        image: london,
        title: "London Landmarks Tour",
        description: "Explore iconic landmarks of London with our expert guides.",
        price: 349,
        duration: "3 days, 2 nights",
        location: "London, UK",
        rating: 4.5,
    },
    berlin: {
        image: berlin,
        title: "Berlin History Tour",
        description: "Dive into the rich history of Berlin with our comprehensive tour.",
        price: 279,
        duration: "3 days, 2 nights",
        location: "Berlin, Germany",
        rating: 4.4,
    },
    newYork: {
        image: newYork,
        title: "New York City Adventure",
        description: "Experience the hustle and bustle of NYC with our exciting tour packages.",
        price: 475,
        duration: "5 days, 4 nights",
        location: "New York, NY",
        rating: 4.9,
    },

};

const TourDetailsPage = () => {
  const { id } = useParams();
  const tour = tourData[id];

  if (!tour) return <div>Tour not found</div>;

  return <TourDetails {...tour} />;
};

export default TourDetailsPage;
