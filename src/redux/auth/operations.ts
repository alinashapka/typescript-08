import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, AuthState, RefreshResponse } from "../../types/redux";
import { RootState } from "../types";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value: string) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (values: RegistrationForm) => {
      const res = await axios.post<AuthResponse>("/users/signup", values);
      setAuthHeader(`Bearer ${res.data.token}`);
      return res.data;
  }
);

export const logIn = createAsyncThunk("auth/login", async (values: LoginForm) => {
    const res = await axios.post<AuthResponse>("/users/login", values);
    setAuthHeader(`Bearer ${res.data.token}`);
    return res.data;
});

export const logOut = createAsyncThunk("auth/logout", async () => {
    await axios.post("/users/logout");
    setAuthHeader("");
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState() as RootState;
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
    const res = await axios.get<RefreshResponse>("/users/current");
    return res.data;
},
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState() as RootState;
            return reduxState.auth.token !== null;
        },
    });