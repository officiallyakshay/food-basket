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
    <div style={{maxHeight: '1100', maxWidth: '580', 'overflow-y': 'scroll'

  }}>
      {restaurants.map((restaurant) => (
        <div
          className="restaurantlist"
          style={{
            backgroundColor: "rgb(240, 240, 245)",
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 33,
            paddingBottom: 20,
            width: 550,
            height: 135,
            boxShadow: "3px 3px 3px #888888 inset",
            borderRadius: 20,
          }}
        >
          <div style={{ paddingLeft: 20, fontSize: "24px", marginBottom: 6, fontWeight: "bold"}}>
            Restaurant: {restaurant.name}
          </div>
          <div style={{ paddingLeft: 30, fontSize: "18px" }}>
            Meals Avaliable: {restaurant.quantity}
          </div>
          <div style={{ paddingLeft: 30,fontSize: "18px" }}> Location:   {restaurant.address.replace(/\\/g, '')}</div>
          <div style={{ paddingLeft: 30,fontSize: "18px" }}>Zip:   {restaurant.zipcode}</div>
          <div style={{ paddingLeft: 30,fontSize: "18px" }}>Phone:  {restaurant.contact}</div>
          <div style={{ paddingLeft: 30,fontSize: "18px" }}>{restaurant.start}</div>
          <div style={{ paddingLeft: 30,fontSize: "18px" }}>{restaurant.end}</div>
        </div>
      ))}
    </div>
  );
}
