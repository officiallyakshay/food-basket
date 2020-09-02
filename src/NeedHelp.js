import React from 'react';
import MapPage from '../src/MapPage';
import { App } from './App';
import Geocode from "react-geocode";
import Logo from "./logo.PNG";
import background from "./background.jpg";
import Button from 'react-bootstrap/Button';

Geocode.setApiKey("AIzaSyA9QVRCFi7gUdzwot0oueSSy90hybtqNpM");
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.

 
// Enable or disable logs. Its optional.


class NeedHelp extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      
      term: '',
      latitude: null, //default
      longitude: null,
      list: [0,1],
      number: 0, 
      location:""
    
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
 
  


    
  }
  
  

  //this is used to change from address to cordinates
  Converter(location1){
  
    console.log(this.state.location)
  location1 = this.state.location;
    
  Geocode.fromAddress(location1).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      
      
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
  this.setState({location: event.target.value});
   this.Converter();
   
  }


  handleSearch(event) {
    this.setState(this.state.term, this.state.lat,this.state.lng, this.state.number,this.state.location);

    event.preventDefault();
  }

 GoodJob = (value) =>  {
  
  value = this.state.number;
   
    alert("Thank you for feeding "+ value +" people today!"+
    "    Make sure to follow social distancing protocols                                       WEAR A MASK      MAINTAIN SOCIAL DISTANCING           ")
    
    
   
   
  };

  
     
  

  render() {
    return (
    
      <div style = {{backgroundColor:"rgb(240, 240, 245)" ,height: 1700, top:100}} className="SearchBar">
         
         <img style = {{position: "absolute", height: 300, right: 250, bottom: 200}}src={background} alt= "website logo"></img>
         <text style = {{position: "absolute", right: 400, bottom: 150, color:"rgb(255, 102, 102)", fontSize:25, fontStyle: "italic"}}> don't be haste in waste</text>
         <img style = {{height: 70}}src={Logo} alt= "website logo"></img>
         <Button style = {{position: "absolute", left: 950, top: 20,color: "white", backgroundColor:"rgb(255, 102, 102)", height:50, width:100}}variant="outline-info">Home</Button>{' '}
         <Button style = {{position: "absolute", left: 1100, top: 20,color: "rgb(255, 102, 102)", height:50, width:100,color: "white", backgroundColor:"rgb(255, 102, 102)"}}variant="outline-info">Contact</Button>{' '}
         
         
        <div className="SearchBar-fields">
        <h3>Contact Info </h3>
          <input style = {{borderColor:"rgb(255, 102, 102)"}}placeholder="Name" onChange={this.handleTermChange} />
          <br></br>
          <br></br>
          <input style = {{borderColor:"rgb(255, 102, 102)"}}placeholder="Phone Number" />
          <br></br>
          <br></br>
          <input style = {{borderColor:"rgb(255, 102, 102)"}} placeholder="Address"  onChange={this.handleLocationChange}/>
        
        </div>
        <label>
        <h3>Details About Situation </h3>
    
    
    <br></br>
    <label>
      How Many People Can We Serve?
      <br></br>
      <input style = {{borderColor:"rgb(255, 102, 102)"}} placeholder="# of Meals" onChange={this.handleNumberChange} />
    </label>
    <br></br>
    <br></br>
    <label>
      Delivery Information / PickUp Information
      <br></br>
     <input style = {{borderColor:"rgb(255, 102, 102)"}} placeholder="time/location"type="text" name="name" />
    </label>
    
    <br></br>
    <br></br>
    
   
    <strong>Add Me to Food Basket Map! <span>&nbsp;&nbsp;</span></strong>
   
       
    <button type="submit" value="Submit" onClick={this.GoodJob} style = {{position: "absolute", color: "rgb(255, 102, 102)", height:40, width:100,color: "white", backgroundColor:"rgb(255, 102, 102)"}}>
  Submit
    
</button>
<br></br>
<br></br>
    </label>
    <br></br>
        
        <div className="SearchBar-submit">
        
        
        </div>
        <div>

{/*     
    <h1 style={{color: "red" ,textAlign: "right"}}>LeaderBoard</h1>
    <h3 style={{textAlign: "right"}}> Number 1: {this.state.term}</h3>
    <h5 style={{textAlign: "right"}}> Served: {this.state.number} meals! </h5> */}
<div >
<MapPage place={this.state.term} latVal={this.state.latitude} longVal={this.state.longitude}/>
  
</div>
        </div>
      

        
      </div>
      
      
    );
  }
  
}

export default NeedHelp;