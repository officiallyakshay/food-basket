import React, { useState, useEffect } from "react";
import { getRestaurants } from "./RestaurantApi";

export default function RestaurantList() {
  let [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants((e, r) => {
      console.log("r", e, r);
      if (e) console.log("component error", e);
      setRestaurants(r);
    });
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div>
          <div className="restaurantlist">{restaurant.name}</div>
          <div>{restaurant.quantity}</div>
          <div>{restaurant.address}</div>
          <div>{restaurant.zipcode}</div>
          <div>{restaurant.contact}</div>
          <div>{restaurant.start}</div>
          <div>{restaurant.end}</div>
        </div>
      ))}
    </div>
  );
}
