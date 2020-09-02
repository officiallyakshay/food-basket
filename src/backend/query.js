const sqlite3 = require('sqlite3').verbose();
let Restaurant = require('./restaurant.js');


let db = new sqlite3.Database('../../database/tinyDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else{
        console.log('Connected to the tinyDB database.');
    }
    
  });


var readRecords = function(callback) {
    let db = new sqlite3.Database('../../database/tinyDB.db', sqlite3.OPEN_READWRITE);

    db.serialize(() => {
        db.each(`SELECT * FROM restaurants`, (err, row) => {
          if (err) {
            console.error(err.message);
            callback(err);
          }
          var rest = new Restaurant(
              name = row.name,
              quantity = row.quantity,
              address = row.address,
              contact = row.contact,
              start = row.start,
              end = row.end
         );
         console.log(util.inspect(row));
         console.log(rest.name + "\t")
         //console.log(rest + "\t");       //Prints out the Restaurant Object called rest. 
          callback(row);
       });
    });

    db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}



