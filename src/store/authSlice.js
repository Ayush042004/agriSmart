import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
  clearError
} = authSlice.actions;

export default authSlice.reducer;
