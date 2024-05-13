import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/compat";

const USER_INITIAL_STATE = {
  currentUser: null,
  isUserAuthenticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    signInSuccess(state, action) {
      state.currentUser = action.payload;
    },
    signInFailed(state, action) {
      state.error = action.payload;
    },
    signUpSuccess(state, action) {
      state.currentUser = action.payload;
    },
    signUpFailed(state, action) {
      state.error = action.payload;
    },
    signOutStart() {},
    signOutSuccess(state) {
      state.currentUser = null;
    },
    signOutFailed(state, action) {
      state.error = action.payload;
    },
    signUpStart(state, action) {
      state.currentUser = action.payload;
    },
    emailSignInStart(state, action) {
      state.currentUser = action.payload;
    },
    googleSignInStart() {},
    checkUserSession() {},
  },
});

export const {
  signOutStart,
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signUpStart,
  signOutSuccess,
  signOutFailed,
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
