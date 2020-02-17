import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {

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
      name: 'Jaime',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      connected: true
      },
      {
      name: 'Sam',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      connected: false
      },
      {
      name: 'Jose',
      image: 'https://randomuser.me/api/portraits/men/0.jpg',
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

  renderPeople(){
   return(
    this.state.contacts.map((person)=>{
      return this.checkForStatus(person)
    })
   ) 
  }

  render(){
    return (
      <div className="ContactList">
        {this.renderPeople()}
      </div>
    );    
  }
}

export default ContactList;
/* import React from 'react';

 class ContactList extends Component {
    constructor()
    {
        super()
        this.state={
        contacts: [
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
            },
            {
                name: 'Sam',
                image: 'https://randomuser.me/api/portraits/men/49.jpg',
                connected: false
            },{
                name: 'Cher',
                image: 'https://randomuser.me/api/portraits/men/49.jpg',
                connected: false
            },
        ]
    }
}

render(){
    return (
        <div className="ContactList">
            <h1>map functioning correctly</h1> 
          {
            this.state.contacts.map((rowdata)=>      
        <div>
            <div>{rowdata.name}</div>
            <div>{rowdata.image}</div>
            <div>{rowdata.connected}</div>
        </div>
     
    )    
  }
        </div>
 */

    /*  state = {
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

    var table = contacts.map((x)=>x.name)  */
  
/* 
export default ContactList  */