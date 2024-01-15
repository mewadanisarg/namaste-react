import React from "react";
import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    location,
    sla,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Approx {sla.slaString}</h4>
    </div>
  );
};
export default ResturantCard;
