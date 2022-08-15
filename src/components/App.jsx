import React, { Component } from 'react';

import { PhoneBook } from "./phoneBook/PhoneBook";
import { ContactsList } from './contactsList/ContactsList';
import { nanoid } from "nanoid";

export const INITIAL_STATE = {
  name: "",
  number: "",
  contacts: [{id: 'id-1', name: 'Rosie Simpson'}],
};

export class App extends Component {
  state = {    
    ...INITIAL_STATE
  }


  addNewContact = ({name, number}) => {
    const { contacts } = this.state
    this.setState({contacts: [...contacts, {name, number, 'id':nanoid()}]})
    console.log( contacts )
  }
   
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>React homework 2 phonebook</h1>
        <PhoneBook newContact={this.addNewContact}/>
        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts}/>
      </div>
    )
  }

}

