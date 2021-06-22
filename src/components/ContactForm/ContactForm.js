import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";



class Form extends Component {

    static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

    state = {
        name: '',
        number: ''
    };

    nameInputId = shortid.generate();

    handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    this.setState({[name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();

    };

    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
        
      <input
        type="text"
        value={this.state.name} onChange={this.handleChange}
        name="name"
        id={this.nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        
        />
        </label>
        <label>
          Number
          <input
            type="tel"
            
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
/>
        </label>
        <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default Form;

