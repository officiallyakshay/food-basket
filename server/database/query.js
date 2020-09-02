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
    // db.serialize(() => {
    //     db.each(`SELECT * FROM restaurants`, (err, row) => {
    //       if (err) {
    //         console.error("error at readrest", err.message);
    //         callback(err);
    //       }
    //       var rest = new Restaurant(
    //           name = row.name,
    //           quantity = row.quantity,
    //           address = row.address,
    //           contact = row.contact,
    //           start = row.start,
    //           end = row.end
    //      );
    //      results.push(rest)
    //      console.log(util.inspect(row));
    //      //console.log(rest.name + "\t")
    //      //console.log(rest + "\t");       //Prints out the Restaurant Object called rest. 
    //     });
    //     callback(null,results);
    // });
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