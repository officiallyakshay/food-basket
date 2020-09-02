class Restaurant {
    constructor(name, quantity, address, zipcode, contact, start, end){
        this.name = name;
        this.quantity = quantity;
        this.address = address;
        this.zipcode = zipcode;
        this.contact = contact;
        this.start = start;
        this.end = end;
    }
}

module.exports = Restaurant;