import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  onClick(ev) {
    ev.preventDefault();
  }
  render() {
    const { onClick } = this;
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="home-text">
          <h1>Food Basket</h1>
          <h3>Saving Food To Save Lives</h3>
        </div>
        <div className="form">
          <form>
            <button style={{ borderRadius: 45 }} onClick={(ev) => onClick(ev)}>
              <Link style={{ textDecoration: 'none', color: 'blue' }} to="/nh">Feed Now</Link>
            </button>
            <br />
            <button style={{ borderRadius: 45 }} onClick={(ev) => onClick(ev)}>
              <Link style={{ textDecoration: 'none', color: 'blue' }} to="/map">Get Food</Link>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
