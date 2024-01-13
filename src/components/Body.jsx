import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

export default Body = () => {
  console.log(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Top Rate Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
