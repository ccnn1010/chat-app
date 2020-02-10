import React, {Component} from 'react';
import './App.css';
import Contact from './Components/Contact.js';

class App extends Component {

  state = {
    contacts: 
    [
      {
      name: 'Javi',
      image: 'https://randomuser.me/api/portraits/men/51.jpg',
      connected: false
      },
      {
      name: 'Cat',
      image: 'https://randomuser.me/api/portraits/women/50.jpg',
      connected: true
      },
      {
      name: 'Alex',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      connected: false
      }
    ]
  }

  checkForStatus(person){
    return (
      person.connected
      ? <Contact name={person.name} image={person.image} onlineStatus/>
      : <Contact name={person.name} image={person.image} />
    )
  }

  render(){
    return (
      <div className="App">
        {this.checkForStatus(this.state.contacts[0])}
        {this.checkForStatus(this.state.contacts[1])}
        {this.checkForStatus(this.state.contacts[2])}
      </div>
    );    
  }
}

export default App;

/* checkForStatus(){
    return(
      this.state.connected
    ?<Contact name={this.state.name} image={this.state.image} onlineStatus />
    :<Contact name={this.state.name} image={this.state.image} />
  )
} */
/* 
    render() {
      return (
      <div className="App">
        {this.checkForStatus()}
      </div>
      );
    }
  }

  export default App; */
  
//the first step is to create class App extends Component
//Step 2: write render (){<div className="App"> <Contact/></div>);}} to check it works then add the state under the class statement. 
//step 3: Create states that can be render. In this case a name was needed, an image and whether the person was connected (online or offline)
//Step 4: write state = {name: '', image:'', connected:}  Connected should not have strings as it is a boolean it should only have true or false.
//Step 5: fill in the information you know in the states.
//Step 6:In the <div> write <Contact name={this.state.name} image={this.state.image} connected={this.state.connected} this connects the documents to the Contact.js file as well as the states listed above
//Step 9: To create the boolean create a funtion after the state.  The function name is checkForStatus which relates to whether the person is online or offline. Then create a return where the this.checkForStatus() states whether it is online or offline. 
//Step 10: create a Ternary Operator using ? : to create an if and else statement.  You cannot use if and else in JSX.  
/* checkForStatus(){
  return(
    this.state.connected
  ?<Contact name={this.state.name} image={this.state.image} onlineStatus />
  :<Contact name={this.state.name} image={this.state.image} />
)
} */ 
//This function works by calling the this.state.connected state and when the state is true it return the name, image and onlineStatus which was created in the Contact.js file. If false it returns the name, image and offline status.




//Three Images
//Step 1: To show the three images you need to add contacts: to the state and then create three groups of states for each person.
//Step 2: You need to change the function so that the person is called upon. For instance checkForStatus(person) in the brackets write person.
//Step 3: change the this.status.name to person.name and then the same for image.
/* checkForStatus(person){
  return(
    person.connected
    ?<Contact name={person.name} image={person.image} onlineStatus />
    :<Contact name={person.name} image={person.image} />
)
}  */

//Step 4: after render() add {this.checkForStatus()} three times to call on the three people

  /* render(){
    const Avatar = (name, image, status)=>{
      if (status === false){
          image =' ' 
      }
      return <Avatar name={name} src={image} />
     }
    
  }
} */

  


//Three props from App.js:  Name of person, image and state online or offline (true or false)
/* Turn app into a class component creat state with a name */
