import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '@/services/authService';
import { IAuth } from '@/models/auth';

const initialState = {
  user: {} as IAuth,
};

export const authLogin = createAsyncThunk('auth/login', async (authParams: Partial<IAuth>, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(authParams);

    return response;
  } catch (error) {
    return rejectWithValue(error)
  }
});

export const authRegister = createAsyncThunk('auth/register', async (authParams: Partial<IAuth>, { rejectWithValue }) => {
  try {
    const response = await AuthService.register(authParams);

    return response;
  } catch (error) {
    return rejectWithValue(error)
  }
});

export const authLogout = createAsyncThunk('user/logout', async () => {
  const response = await AuthService.logout();

  return response;
});

export const authGetUser = createAsyncThunk('auth/getUser', async () => {
  const response = await AuthService.getSelf();

  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload as IAuth;
    });

    builder.addCase(authGetUser.fulfilled, (state, action) => {
      state.user = action.payload as IAuth;
    });
  },
});

export default authSlice;
