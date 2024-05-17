import React, { useEffect, useRef } from "react";
import style from "./app.module.css";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
 
const KEY = "Contacts";

const App = () => {
	const contacts = useSelector(getContacts);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(KEY, JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);

    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm  />

        <h2>Contacts</h2>
        <Filter  />
        <ContactList />
      </div>
    );
  }


export default App;