import React from 'react';
import Logo from "./logo.PNG";
import mask from "./maskpic.PNG";
import Button from 'react-bootstrap/Button';

class ThankYou extends React.Component {
  

  render() {
    return (
     <div style = {{backgroundColor:"white"}}>
        <div style = {{backgroundColor:"rgb(240, 240, 245)" ,height: 1000, top:100}}>
         <img style = {{height: 70}}src={Logo} alt= "website logo"></img>
         <Button style = {{position: "absolute", left: 950, top: 20,color: "white", backgroundColor:"rgb(255, 102, 102)", height:50, width:100}}variant="outline-info">Home</Button>{' '}
         <Button style = {{position: "absolute", left: 1100, top: 20,color: "rgb(255, 102, 102)", height:50, width:100,color: "white", backgroundColor:"rgb(255, 102, 102)"}}variant="outline-info">Contact</Button>{' '}
         <h1 style = {{position:"absolute", left: 455, fontSize: 80, color:"rgb(255, 102, 102)"}}>THANK YOU</h1>
         <text style = {{position:"absolute", left: 425, top: 250,fontSize: 20,color:"rgb(255, 102, 102)"}}> You are now among <strong>3%</strong> of the world who reduced hunger</text>
         <img style = {{position:"absolute",height: 300, top:300,left:200}}src={mask}></img>
         <text style = {{position:"absolute", left: 520, top: 450,fontSize: 20,color:"rgb(255, 102, 102)"}}>Follow safety precautions to <strong>prevent the spread</strong> </text>
         </div>
         
     </div>
      
    );
  }
  
}


export default ThankYou;