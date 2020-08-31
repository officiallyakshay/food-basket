import React from 'react';
import Button from 'react-bootstrap/Button';


function Register() {
  return (
    <div className="App">
    <h1> Register your Restaurant</h1>
      <form>
     <label>
      Name:
    <input type="text" name="name" />
    </label>
    </form>
    <form>
     <label>
      Address:
    <input type="text" name="name" />
    </label>
    </form>
    <form>
     <label>
      Contact Person:
    <input type="text" name="name" />
    </label>
    </form>
    <form>
     <label>
     Phone Number:
    <input type="text" name="name" />
    </label>
    </form>
    
    <h1>Hours for Pickup</h1>
    
    <label>
     Sunday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <label>
     Monday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <label>
     Tuesday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <label>
     Wednesday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <label>
     Thursday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <label>
     Friday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <label>
     Saturday:
     {"AM"} <input type="text" name="name" />
     {"PM"} <input type="text" name="name" />
    </label>
    <br></br>
    <input type="submit" value="Submit" />
    </div>
    
     
  );
  


}


export default Register;
