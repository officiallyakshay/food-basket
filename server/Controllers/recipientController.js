const recipients = [
    {
      id: 1,
      name: "Doja Cat",
      quantity: 5,
      zipcode: 55555
    }
  ];  
  
  const queries = require("../database/query")
  console.log('queries', queries)
  module.exports = {
    getRecipients: (req, res) => {
      queries.readRecipients((e, r) => {
        if (e) {
          console.error("error at readrest", err.message)
        res.status(500)
        }
        res.status(200).send(r)
      }
      )
    },
    addRecipient: (req,res) => {
      const {name, quantity, zipcode} = req.body;
      let id = recipients.length+1
      const newRecipient = {
        id,
        name: name || "add recipient name", 
        quantity: quantity || 0, 
        zipcode,
      }
      id++
      recipients.push(newRecipient);
      res.status(200).send(recipients)
    },
    removeRecipient: (req, res) => {
    const {id} = req.params
    const index = recipients.findIndex(element =>element.id === +id)
    recipients.splice(index, 1)
    res.status(200).send(recipients)
    }
  };
  