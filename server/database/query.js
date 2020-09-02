const sqlite3 = require('sqlite3').verbose();
var util = require('util');
let Restaurant = require('./restaurant.js');
const path = require('path')

//use for debugging purposes
/* 
let db = new sqlite3.Database('../../database/tinyDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else{
        console.log('Connected to the tinyDB database.');
    }
    
  });
*/

//Populates the data into the Restaurant object and returns in a callback function. Will be useful
//for displaying data on the website 
var readRestaurants = function(callback) {
    let db = new sqlite3.Database('./server/database/tinyDB.db', sqlite3.OPEN_READWRITE);

    let results = []
    db.all(`SELECT * FROM restaurants`, [], callback);
    db.close()
}

var readRestaurants = function(callback) {
  let db = new sqlite3.Database('./server/database/reci.db', sqlite3.OPEN_READWRITE);

  let results = []
  db.all(`SELECT * FROM recipients`, [], callback);
  db.close()
}

module.exports = {
  readRestaurants
}

//Use for debugging purposes
/*db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
});
*/