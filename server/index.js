const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

////-------------endpoints-----------////
const restCtrl = require("./Controllers/restaurantController")
app.get("/api/restaurants", restCtrl.getRestaurants)
app.get("/api/restaurants/feed", restCtrl.feedRecipientsRest) //feed recipients
app.post("/api/restaurants", restCtrl.addRestaurant)
app.delete("/api/restaurants/:id", restCtrl.removePost);

const reciCtrl = require("./Controllers/recipientController")
app.get("/api/recipients", reciCtrl.getRecipients)
app.get("/api/recipients/zip", reciCtrl.getZipRestaurants) //to get restaurants within zip

app.post("/api/recipients", reciCtrl.addRecipient)
app.delete("/api/recipients/:id", reciCtrl.removeRecipient);



app.listen(port, ()=> console.log(`listening on port ${port}`));