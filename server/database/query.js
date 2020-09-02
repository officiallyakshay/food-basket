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

//Gets the restaurant within the zip code and has enough quantity
var readRestaurantsInZip = function(zip, quantity, callback){
  let db = new sqlite3.Database('./server/database/tinyDB.db', sqlite3.OPEN_READWRITE);
  let qry = "SELECT * FROM restaurants where zipcode='"+zip+"' and quantity>='"+quantity+"'";
  db.all(qry, [], callback);
  db.close()
}

//After recipient chooses the restaurant, decrease the restaurant quantity by quantity and update the db
var feedRecipients = function(rest_name, zipcode, quantity, callback) {
  let db = new sqlite3.Database('./server/database/tinyDB.db', sqlite3.OPEN_READWRITE);
  let qry = "UPDATE restaurants SET quantity=quantity-'"+quantity+"' WHERE name='"+rest_name+"' and zipcode='"+zipcode+"'";
  db.all(qry, [], callback);
  db.close()
}

module.exports = {
  readRestaurants,
  readRecipients,
  readRestaurantsInZip,
  feedRecipients
}

