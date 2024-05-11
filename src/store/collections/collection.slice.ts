import { createSlice } from "@reduxjs/toolkit";

export const COLLECTIONS_INITIAL_STATE = {
  collections: [],
  isLoading: false,
  error: null,
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState: COLLECTIONS_INITIAL_STATE,
  reducers: {
    fetchCollectionsStart(state) {
      state.isLoading = true;
    },
    fetchCollectionsSuccess(state, action) {
      state.collections = action.payload;
      state.isLoading = false;
    },
    fetchCollectionsFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCollectionsFailed,
  fetchCollectionsSuccess,
  fetchCollectionsStart,
} = collectionsSlice.actions;

export const collectionsReducer = collectionsSlice.reducer;
