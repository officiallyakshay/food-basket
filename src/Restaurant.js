import React from 'react';
import { Link } from 'react-router-dom'

class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
      numberServed: '',
      address: '',
      pickupTime: ''
    }
  }
  onClick(ev) {
    ev.preventDefault();
  };
  render() {
    const { name, number, numberServed, address, pickupTime } = this.state;
    const { onClick } = this;
    return (
      <div style={{ display: 'inline-flex' }}>
        <h3>Don't be in haste to waste</h3>
        <div style={{ alignContent: 'center' }}>
          <form style={{ display: 'inline-grid' }}>
            <input 
              placeholder="Name*" 
              value={name}
              onChange={e => this.setState({ name : e.target.value }) } 
            />
            {console.log(name)}
            <input 
              placeholder="Phone Number*" 
              value={number}
              onChange={e => this.setState({ number : e.target.value }) }
            />
            {console.log(number)}
            <input 
              placeholder="Number I can Serve*" 
              value={numberServed}
              onChange={e => this.setState({ numberServed : e.target.value }) }
            />
            {console.log(numberServed)}
            <input 
              placeholder="Address*" 
              value={address}
              onChange={e => this.setState({ address : e.target.value }) }
            />
            {console.log(address)}
            <input 
              placeholder="Time For Pickup*" 
              value={pickupTime}
              onChange={e => this.setState({ pickupTime : e.target.value }) }
            />
            {console.log(pickupTime)}
            <br />
            <button onClick={(ev) => onClick(ev)}>
              <Link to='/thankyou'>Submit</Link>
            </button>
          </form>
        </div>
      </div>
    );
  };
};

export default Restaurant;