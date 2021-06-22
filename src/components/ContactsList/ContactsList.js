import React from "react";
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContacts }) => (
    
    <ul>{contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p>{name}:{number}</p>
            <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
    ))}
            
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContacts: PropTypes.func.isRequired
}
 

export default ContactsList;