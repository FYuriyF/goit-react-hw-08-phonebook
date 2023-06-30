import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://649c2ce10480757192379e26.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
