import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

export default Body = () => {
  const [restaurantsData, setRestaurantsData] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantsData.filter(
              (res) => res.avgRating > 4
            );
            setRestaurantsData(filteredRestaurants);
            console.log(filteredRestaurants);
          }}
        >
          Top Rate Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantsData.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
