import React, { Component } from 'react';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import NeedHelp from '../src/NeedHelp';


const mapStyles = {
  width: '50%',
  height: '50%'
  
};


class MapPage extends React.Component {
  
    
  state = {
   
  
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};


  render() {

    console.log(this.props);
    return (

      !this.props.longVal && !this.props.latVal ? null : <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        
      lat:(this.props.latVal),
      lng: (this.props.longVal) //it works when you put in actual coordinates
      }}
    >
      <Marker
          onClick={this.onMarkerClick}
          name={this.props.place}
          
        />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
      >
        <div>
            <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
      </Map>
     
  
     
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9QVRCFi7gUdzwot0oueSSy90hybtqNpM'
})(MapPage);