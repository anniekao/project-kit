import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventContacts } from '../../redux/actions/eventContactsActions';

import './event-contacts.style.css';

const EventContactsPage = ({ user, contacts, getEventContacts }) => {
  const { eventId } = useParams();

  useEffect(() => {
    if (user) {
      getEventContacts(user.id, eventId);
    }
  }, [user, eventId, getEventContacts]);

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
    contacts: state.eventContacts.contacts
  };
};

const mapDispatchToProps = {
  getEventContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContactsPage);