import React from 'react';
import MapPage from '../src/MapPage';
import { App } from './App';


class NeedHelp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      lat: -1.2884,
      long: 36.8233,
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
 

    

  
  }
  

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLatChange(event) {
    this.setState({location: event.target.value});
  }
  handleLongChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.setState(this.state.term, this.state.lat,this.state.long);

    event.preventDefault();
  }

  

  render() {
    return (
    
      <div className="SearchBar">
         
        <div className="SearchBar-sort-options">
         
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Name" onChange={this.handleTermChange} />
          <input placeholder="Lat?" onChange={this.handleLatChange}/>
          <input placeholder="Long?" onChange={this.handleLongChange}/>
        </div>
        <label>
        <h3>Details About Situaton </h3>
    
    <label>
      How Many People Can We Serve?
     <input type="text" name="name" />
    </label>
    
    <br></br>
    <br></br>
    
    
    <br></br>
    <br></br>
    <strong>Add Me to Food Basket Map! </strong>
    <input type="submit" value="Submit" />
    </label>
        <div className="SearchBar-submit">
        <MapPage place={this.state.term} latVal = {this.state.lat} longVal = {this.state.long}/>
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      
      </div>
    );
  }
}

export default NeedHelp;