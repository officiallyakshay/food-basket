import React, { Component } from 'react';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Food Basket</h1>
      <h3>Providing food for those in need</h3>
      <form>
        <input placeholder="email" />
        <br />
        <input placeholder="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9QVRCFi7gUdzwot0oueSSy90hybtqNpM'
})(App);