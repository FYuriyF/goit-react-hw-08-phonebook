export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
