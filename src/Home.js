import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  onClick(ev) {
    ev.preventDefault();
  };
  render() {
    const { onClick } = this;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Food Basket</h1>
        <h3>Saving Food To Save Lives</h3>
        <div>
          <form>
            <button onClick={(ev) => onClick(ev)}>
              <Link to='/restaurant'>Feed Now</Link>
            </button>
            < br />
            <button onClick={(ev) => onClick(ev)}>
              <Link to='/user'>Get Food</Link>
            </button>
          </form>
        </div>
      </div>
    );
  };
};

export default Home;