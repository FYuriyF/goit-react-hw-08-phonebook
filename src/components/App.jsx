import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../store/contactsOperation';
import { getError, getIsLoading, selectContacts } from '../store/useSelector';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <>
          <h1>Loading...</h1>
        </>
      )}
      {error && <p>Sorry. {error}</p>}
      {!isLoading && !error && contacts.length < 1 && (
        <p>Sorry, there is no contacts yet</p>
      )}
      <ContactList />
    </div>
  );
};

export default App;
