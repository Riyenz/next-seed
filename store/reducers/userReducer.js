import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from 'services/authService';

const initialState = {
  user: {},
};

export const userLogin = createAsyncThunk('user/login', async ({ email, password }) => {
  const response = await AuthService.login({ email, password });

  return response;
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  const response = await AuthService.logout();

  return response;
});

export const userGetSelf = createAsyncThunk('user/get-self', async () => {
  const response = await AuthService.getSelf();

  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(userGetSelf.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
