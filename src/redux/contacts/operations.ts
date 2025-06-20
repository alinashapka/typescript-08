import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, NewContact } from "../../types/redux";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
        const res = await axios.get<Contact[]>("/contacts");
        return res.data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact: NewContact) => {
        const res = await axios.post<Contact>("/contacts", newContact);
        return res.data;
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId: string) => {
        const res = await axios.delete<Contact>(`/contacts/${contactId}`);
        return res.data;
});