import React, { Component } from 'react';
import { INITIAL_STATE } from 'components/App';



export class PhoneBook extends Component {
  state = {    
    ...INITIAL_STATE
  }


  inputChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value});
  }

  nameSubmit = e => {
    e.preventDefault();
    console.log(`Add ${this.state.name}`);
    this.props.newContact({ ...this.state });
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: ''})
  }

  render() {
    const {name, number} = this.state;

    return (
      <form onSubmit={this.nameSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.inputChange}
          />
        </label>
        <button type='submit'>Add contact</button>
      

      </form>
    )
 
  }
}