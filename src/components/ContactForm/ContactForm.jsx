import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/contactsOperation';
import { selectContacts } from '../../store/useSelector';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const [error, setError] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = formData;

    const isDuplicateContact = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isDuplicateContact) {
      setError('Contact already exists');
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', number: '' });
    setError('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.inputName}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.inputNumber}
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
