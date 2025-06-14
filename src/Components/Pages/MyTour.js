import Header from "../Header/Header";
import TourCard from "../UI/TourCard";
import chicago from "../../Assets/chicago.jpg";
import miami from "../../Assets/miami.jpg";
import paris from "../../Assets/paris.jpg";
import london from "../../Assets/london.jpg";
import berlin from "../../Assets/berlin.jpg";
import newYork from "../../Assets/newyork.jpg";
import classes from "./MyTour.module.css";

// import BookTour from "./BookTour";

const MyTour = function () {
    

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
    return (
    <div>
        <Header />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "40px" }}>
         {tours.map((tour) => (
            <div className={classes['card-wrapper']} key={tour.id}>
         <TourCard  {...tour} />
            <div className={classes['card-footer']}>
                <span className={classes.icon}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.689.689 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.689.689 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0Zm6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794l-.001-11.627ZM6.716 6.34c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.726 0c.38 0 .686.31.686.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.728 0c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.685.692a.689.689 0 0 1-.686-.692v-8.05a.69.69 0 0 1 .686-.692ZM9.176 1.382c-.642.045-1.065.264-1.334.662c-.198.291-.297.543-.313.768l4.938-.001c-.014-.291-.129-.547-.352-.792c-.346-.38-.73-.586-1.093-.635l-1.846-.002Z"/></svg></span>
              <button className={classes.btn} >Details</button>
              <button className={classes.btn} >Update</button>
            </div>
         </div>
            ))}
         </div>
    </div>
    )
} 

export default MyTour;