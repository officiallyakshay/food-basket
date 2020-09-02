const restaurants = [
  {
    id: 1,
    name: "Olive Garden",
    quantity: 5,
    address: "124 Street Ave",
    zipcode: 55555,
    contact: "Sam Peterson",
    start_time: 5,
    end_time: 8,
  },
  {
    id:2,
    name: "Macaroni Grill",
    quantity: 10,
    address: "456 Street Ave",
    zipcode: 55554,
    contact: "Sam Jennings",
    start_time: 6,
    end_time: 9,
  },
  {
    id:3,
    name: "Este Pizza",
    quantity: 2,
    address: "888 Street Ave",
    zipcode: 55553,
    contact: "Sam Smith",
    start_time: 3,
    end_time: 9,
  },
  {
    id: 4,
    name: "Cheesecake Factory",
    quantity: 30,
    address: "897 Street Ave",
    zipcode: 55554,
    contact: "Sam Johnson",
    start_time: 2,
    end_time: 4,
  },
];
const queries = require("../database/query")
console.log('queries', queries)
module.exports = {
  getRestaurants: (req, res) => {
    queries.readRestaurants((e, r) => {
      if (e) {
        console.error("error at readrest", err.message)
      res.status(500)
      }
      res.status(200).send(r)
    }
    )
  },
  getZipRestaurants: (req, res) => {
    queries.readRestaurantsInZip((e, r) => {
      if (e) {
        console.error("error at readrest", err.message)
      res.status(500)
      }
      res.status(200).send(r)
    }
    )
  },
  feedRecipientsRest: (req, res) => {
    queries.feedRecipients((e, r) => {
      if (e) {
        console.error("error at readrest", err.message)
      res.status(500)
      }
      res.status(200).send(r)
    }
    )
  },
  addRestaurant: (req,res) => {
    const {name, quantity, address, zipcode, contact, start_time, end_time} = req.body;
    let id = restaurants.length+1
    const newRestaurant = {
      id,
      name: name || "add restaurant name", 
      quantity: quantity || 0, 
      address, 
      zipcode,
      contact, 
      start_time, 
      end_time,
    }
    id++
    restaurants.push(newRestaurant)
    res.status(200).send(restaurants)
  },
  removePost: (req, res) => {
  const {id} = req.params
  const index = restaurants.findIndex(element =>element.id === +id)
  restaurants.splice(index, 1)
  res.status(200).send(restaurants)
  }
};
