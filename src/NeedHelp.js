import React from 'react';
import Button from 'react-bootstrap/Button';


function NeedHelp() {
  return (
    <div className="NeedHelp">
    <h1> Need Help? </h1>
      <form>
     <label>
      Name:
    <input type="text" name="name" />
    </label>
    <br></br>
    <br></br>
    </form>
    <form>
     <label>
      Address:
    <input type="text" name="name" />
    </label>
    <br></br>
    <br></br>
    </form>
    <form>
     <label>
      Contact Person:
    <input type="text" name="name" />
    </label>
    <br></br>
    <br></br>
    </form>
    <form>
     <label>
     Phone Number:
    <input type="text" name="name" />
    </label>
    <br></br>
    <br></br>
    </form>
    
    <h1>Details About Situaton </h1>
    
    <label>
      How Many People Need Meals?
     <input type="text" name="name" />
    </label>
    
    <br></br>
    <br></br>
    
    <label>
      How Urgent?
     <input type="text" name="name" />
     
    </label>
    <br></br>
    <br></br>
    <label>
    <strong>Add Me to Food Basket Map! </strong>
    <input type="submit" value="Submit" />
    </label>
    </div>
    
     
  );
  


}


export default NeedHelp;
