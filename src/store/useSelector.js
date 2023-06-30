export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.value;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;
