import axios from "axios";

export const addRestaurant = (params) => {};

export const getRestaurants = (cb) => {
    console.log("starting call to getrest")
  axios.get("/api/restaurants").then((res) => {
      console.log("axios response", res)
    cb(null, res.data);
  });
};
