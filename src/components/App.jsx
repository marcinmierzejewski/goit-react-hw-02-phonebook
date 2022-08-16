import React, { Component } from 'react';

import { PhoneBook } from './phoneBook/PhoneBook';
import { ContactsList } from './contactsList/ContactsList';
import { nanoid } from 'nanoid';
import { SearchFilter } from './searchFilter/SearchFilter';

export const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;

    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
    });

    console.log(contacts);
  };

  searchByName = e => {
    this.setState({ filter: e.target.value });
  };

  viewContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(cont => cont.name.includes(filter));
  };

  deleteContact = id => () => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(cont => cont.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>React homework 2 phonebook</h1>
        <PhoneBook newContact={this.addNewContact} />
        <h2>Contacts</h2>
        <SearchFilter searchByName={this.searchByName} />
        <ContactsList
          contacts={this.viewContacts()}
          deleteItem={this.deleteContact}
        />
      </div>
    );
  }
}
