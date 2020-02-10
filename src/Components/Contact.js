import React from 'react';
import './Contact.css';

const Contact = (props)=>{
  return(
    <div className="Contact">
      <img src={props.image} alt={props.name} className="avatar"/>
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
            {
              props.onlineStatus
              ? <div>
                  <div className="status-online"></div>
                  <p className="status-text">online</p>
                </div>
              : <div>
                  <div className="status-offline"></div>
                  <p className="status-text">offline</p>
                </div>
            }
        </div>
      </div>
    </div>
  )
}


export default Contact

//Step 1: create a const the same name of the file or what ever you choose
//Step 2: write an arrow function e.g. const Contact = () => {return(<div></div>)} 
//Step 3: place props within the brackets of the function 
//Step 4: write {props.name} with the div of the function. Make sure you use curly brackets. {props.name} has been set as a return in the App.js file
//step 5: connect the props image to the props name by using img html tag  <img src={props.image} alt={props.name}/> the alternative if it doesnt run will be the props name
//Step 6: add the className to the div as seen in the Contact.css this is .Contact
//Step 7: add className to the img tag (className ="avatar") and the props.name by adding a paragraph tag (className = 'name') this connects it to the CSS file
//Step 8: To connect the Terinary Operator in the App.js file you need to create a new prop within the return.  
/* {
    props.onlineStatus
    ?<p>ONLINE</p>
    :<p>OFFLINE</p>
} */
//This prop is called onlineStatus and provides the return value that is called in the App.js file. In this case Online or offline. Depending if the terinary operator is true or false as stated in the state on the App.js file.
//Step 9: Connect the css class .status to the Contact.js by creating a new div with this className.  Name the paragraph of the props.onlineStatus className"status-text" to connect this to the CSS.
//Step 10: Create a div within the terninary operator to add the the className="status-online" and status-offline



//Three props from App.js:  Name of person, image and state online or offline (true or false) to show green button or red button if false show red button and text offline vice versa
