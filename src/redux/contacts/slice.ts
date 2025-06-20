import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";
import {ContactsState} from "../../types/redux";

const initialState: ContactsState = {
    items: [],
    loading: false,
    error: false,
};

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items = action.payload;
             })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
             })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items.push(action.payload);
             })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
             })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.items = state.items.filter(item => item.id !== action.payload.id)
             })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
    })
});

export default slice.reducer;