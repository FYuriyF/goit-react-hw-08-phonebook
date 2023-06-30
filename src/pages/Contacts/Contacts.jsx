import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../store/contactsOperation';
import { getError, getIsLoading } from '../../store/useSelector';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      {isLoading && !error && (
        <b
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
          }}
        >
          Loading...
        </b>
      )}
      <ContactList />
    </div>
  );
}
