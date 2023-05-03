import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from 'services/authService';

export const userLogin = createAsyncThunk('user/login', async ({ email, password }) => {
  const response = await AuthService.login({ email, password });

  return response;
});

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
