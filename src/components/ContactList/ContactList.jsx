import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactReducer';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    console.log(contacts);
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contFilter = getFilteredContacts();
  // const contFilter = contacts;

  return (
    <ul>
      {contFilter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            onClick={() => handleDelete(contact.id)}
            type="button"
            className={css.btndelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
