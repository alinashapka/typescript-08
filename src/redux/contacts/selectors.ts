import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
import { RootState } from "../types";

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], (contacts, nameFilter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
    });