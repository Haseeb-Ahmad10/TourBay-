import Header from "../Header/Header";

import React from "react";
import TourCard from "../UI/TourCard";
import chicago from "../../Assets/chicago.jpg"; 
import miami from "../../Assets/miami.jpg"; 
import paris from "../../Assets/paris.jpg";
import london from "../../Assets/london.jpg";
import berlin from "../../Assets/berlin.jpg";
import newYork from "../../Assets/newyork.jpg";

const tours = [ {
     id: 'chicago',
  image: chicago,
  title: "Explore Chicago",
  description: "Discover the Windy City with guided tours, boat rides, and skyscraper views.",
  price: 249 ,
},

{
    id: 'miami',
  image: miami, 
  title: "Miami Beach Getaway",
  description: "Relax on the sunny beaches of Miami with our exclusive tour packages.",
  price: 299,
},

{
    id: 'paris',
  image: paris,
  title: "Paris in a Day",
  description: "Experience the magic of Paris with a full-day guided tour of the city.",
  price: 399,
},

{
    id: 'london',
  image: london,
  title: "London Landmarks Tour",
  description: "Explore iconic landmarks of London with our expert guides.",
  price: 349,
},

 {
    id: 'berlin',
  image: berlin,
  title: "Berlin History Tour",
  description: "Dive into the rich history of Berlin with our comprehensive tour.",
  price: 279,
},

{
    id: 'newYork',
  image: newYork,
  title: "New York City Adventure",
  description: "Experience the hustle and bustle of NYC with our exciting tour packages.",
  price: 475,
}
]

const BookTour = function () {
// const chicagoTour = {
//     id: 'chicago',
//   image: chicago,
//   title: "Explore Chicago",
//   description: "Discover the Windy City with guided tours, boat rides, and skyscraper views.",
//   price: 249 ,
// };

// const miamiTour = {
//     id: 'miami',
//   image: miami, 
//   title: "Miami Beach Getaway",
//   description: "Relax on the sunny beaches of Miami with our exclusive tour packages.",
//   price: 299,
// };

// const parisTour = {
//     id: 'paris',
//   image: paris,
//   title: "Paris in a Day",
//   description: "Experience the magic of Paris with a full-day guided tour of the city.",
//   price: 399,
// };

// const londonTour = {
//     id: 'london',
//   image: london,
//   title: "London Landmarks Tour",
//   description: "Explore iconic landmarks of London with our expert guides.",
//   price: 349,
// };

// const berlinTour = {
//     id: 'berlin',
//   image: berlin,
//   title: "Berlin History Tour",
//   description: "Dive into the rich history of Berlin with our comprehensive tour.",
//   price: 279,
// };

// const newYorkTour = {
//     id: 'newYork',
//   image: newYork,
//   title: "New York City Adventure",
//   description: "Experience the hustle and bustle of NYC with our exciting tour packages.",
//   price: 475,
// };

// const handleBooking = () => {
//   alert("Booking confirmed!");
// };

// //  return (
// //     <React.Fragment>
// //       <Header />
// //     <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "40px" }}>
//       {/* <TourCard key={id}  {...chicagoTour} onBook={handleBooking} />
//         <TourCard  {...miamiTour} onBook={handleBooking} />
//         <TourCard  {...parisTour} onBook={handleBooking} />
//         <TourCard {...londonTour} onBook={handleBooking} />
//         <TourCard  {...berlinTour} onBook={handleBooking} />
//         <TourCard  {...newYorkTour} onBook={handleBooking} /> */}
//       {/* Add more <TourCard /> with different data */}

      
//     {/* </div>
//     </React.Fragment>
//   ); */}

  return (
    <React.Fragment>
      <Header />
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "40px" }}>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} />
      ))}
    </div>
    </React.Fragment>
  );


}

export default BookTour;






