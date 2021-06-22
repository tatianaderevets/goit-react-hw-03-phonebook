// import './App.css';

import { Component } from "react";
import shortid from "shortid";
import Form from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

class App extends Component {

  state = {
    contacts: [

      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  ChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });

  }






  deleteContacts = (contactid) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactid),
    }));
  };

  FormSubmitHandler = ({ name, number }) => {
    // console.log(data);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    }

    this.state.contacts.some((i) => i.name === name)
      ? alert(`${name} is already in contacts`) :
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }))
  };


  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    }
  }

  render() {
    const { filter } = this.state;

    const filterByName = this.getVisibleContacts();


    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.FormSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter}
          onChange={this.ChangeFilter}
        />
        <ContactsList

          contacts={filterByName}
          onDeleteContacts={this.deleteContacts} />
      </div>

    );
  }
}


export default App;
