import React from 'react';
import { Link } from 'react-router-dom'

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onClick(ev) {
    ev.preventDefault();
  };
  render() {
    return (
      <ul>
        {/* {
          this.props.restaurant.map( restaurant => 
            <li key={restaurant.id}>{restaurant.name}</li>  
          )
        } */}
      </ul>
    );
  };
};

export default UserView;