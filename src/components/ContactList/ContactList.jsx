import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsOperation';
import { selectContacts, selectFilter } from '../../store/useSelector';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.id}
          {contact.name}: {contact.phone}
          <button onClick={() => handleDelete(contact.id)} className={css.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
