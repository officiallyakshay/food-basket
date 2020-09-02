import axios from "axios";


/**
 * not sure if this is going to be used yet. haven't decided if forms will post directly to server or if we will use this api
 * @param {*} params 
 */
export const addRestaurant = (params) => {};


/**
 * this function will get the list of all restaurants in the database. 
 * @param {*} cb - standard callback(err, results)
 */

export const getRestaurants = (cb) => {
    console.log("starting call to getrest")
  axios.get("/api/restaurants").then((res) => {
      console.log("axios response", res)
    cb(null, res.data);
  });
};
