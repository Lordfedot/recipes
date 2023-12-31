import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DisplayUser } from "../Helpers/Interfaces";



const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: DisplayUser, thunkAPI) => {
    try {
      const res = await axios.post("https://t2d-soyammy-backend.onrender.com/api/auth/register", credentials);
      token.set(res.data.token);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post("https://t2d-soyammy-backend.onrender.com/api/auth/login", credentials);
      token.set(res.data.token);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("https://t2d-soyammy-backend.onrender.com/api/auth/logout", async (_, thunkAPI) => {
  try {
    token.unset();
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
