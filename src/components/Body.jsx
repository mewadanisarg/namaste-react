import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export default Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurantsData(
      // Optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantsData === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantsData.filter(
              (res) => res.avgRating > 4
            );
            setRestaurantsData(filteredRestaurants);
            console.log(restaurantsData);
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
