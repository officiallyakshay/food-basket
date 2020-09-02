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
app.post("/api/restaurants", restCtrl.addRestaurant)
app.delete("/api/restaurants/:id", restCtrl.removePost);

const reciCtrl = require("./Controllers/recipientController")
app.get("/api/recipients", reciCtrl.getRecipients)
app.post("/api/restaurants", reciCtrl.addRecipient)
app.delete("/api/restaurants/:id", reciCtrl.removeRecipient);



app.listen(port, ()=> console.log(`listening on port ${port}`));