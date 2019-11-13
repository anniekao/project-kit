import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllContacts } from '../../redux/actions/eventContactsActions';

import './contacts.style.css';

const ContactsPage = ({ user, token, contacts, getAllContacts }) => {
  useEffect(() => {
    if (user) {
      getAllContacts(user.id, token);
    }
  }, [user, getAllContacts, token]);

  const contactItems = contacts.map(contact => {
    return (
      <div key={contact.id}>
        <p>{contact.first_name} {contact.last_name}</p>
        <p>{contact.company} {contact.occupation}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
    );
  });

  return (
    contacts.length > 0 ? contactItems : <div>LOADING</div>
  );
}
 
const mapStateToProps = state => {
  return {
    user: state.user,
    contacts: state.contacts.allContacts,
    token: state.token
  };
};

const mapDispatchToProps = {
  getAllContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsPage);