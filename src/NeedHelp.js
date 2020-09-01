import React from 'react';
import MapPage from '../src/MapPage';
import { App } from './App';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA9QVRCFi7gUdzwot0oueSSy90hybtqNpM");

class NeedHelp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      latitude: -1.2884, //default
      longitude: 36.8233,
      list: [0,1],
      number: 2, 
      sortBy: 'best_match'
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
 
  


    
  }
  //this is used to change from address to cordinates
  Converter(location){
  Geocode.fromAddress(location).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      this.state = {
        latitude: lat,
        longitude:lng,
        

      

      }
      this.setState({
       latitude: lat,
       longitude: lng
      });
    
    
      
    },
    error => {
      console.error(error)
    }
  );
  }

  handleTermChange(event) {

    this.setState({term: event.target.value});
  }
  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }

  handleLocationChange(event) {
   this.Converter(event);
   
  }


  handleSearch(event) {
    this.setState(this.state.term, this.state.lat,this.state.lng, this.state.number);

    event.preventDefault();
  }

 GoodJob = (value) =>  {
  value = this.state.number;
    alert("Thank you for feeding "+ value +" people today!"+
    " Make sure to follow social distancing protocols when getting your food")
   
  };

  render() {
    return (
    
      <div className="SearchBar">
         
  
        <div className="SearchBar-fields">
          <input placeholder="Name" onChange={this.handleTermChange} />
          <input placeholder="Address?" onChange={this.handleLocationChange}/>
        
        </div>
        <label>
        <h3>Details About Situaton </h3>
    
    
    <br></br>
    <label>
      How Many People Can We Serve?
      <input placeholder="number" onChange={this.handleNumberChange} />
    </label>
    <br></br>
    <label>
      Delivery Information / PickUp Information
     <input type="text" name="name" />
    </label>
    
    <br></br>
    <br></br>
    
   
    <strong>Add Me to Food Basket Map! </strong>
    <text>{this.state.latitude}</text>
    <br></br>
        <text>{this.state.longitude}</text>
   
    <button  type="submit" value="Submit" onClick={this.GoodJob}>
  Submit
    
</button>
    </label>
        
        <div className="SearchBar-submit">
        <MapPage place={this.state.term} latVal={this.state.latitude} longVal={this.state.longitude}/>
         
        </div>
      
      </div>
    );
  }
}

export default NeedHelp;