const sqlite3 = require('sqlite3').verbose();
var util = require('util');
let Restaurant = require('./restaurant.js');
const path = require('path')


//Populates the data into the Restaurant object and returns in a callback function. Will be useful
//for displaying data on the website 
var readRestaurants = function(callback) {
    let db = new sqlite3.Database('./server/database/tinyDB.db', sqlite3.OPEN_READWRITE);

    let results = []
    db.all(`SELECT * FROM restaurants`, [], callback);
    db.close()
}

var readRecipients = function(zipcode, callback) {
  let db = new sqlite3.Database('./server/database/reci.db', sqlite3.OPEN_READWRITE);

  let results = []
  db.all(`SELECT * FROM recipients`, [], callback);
  db.close()
}

/*var feedRecipients = function(callback) {
  let db = new sqlite3.Database('./server/database/tinyDB.db', sqlite3.OPEN_READWRITE);

}*/

module.exports = {
  readRestaurants,
  readRecipients
}

