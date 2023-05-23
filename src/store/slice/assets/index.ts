import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteAssets } from '../../thunks/assets';

const initialState = {
  assets: [],
  favoriteAssets: [],
};

export const asserSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssets.fulfilled, (state: any, action: any) => {
      state.favoriteAssets.push(action.payload);
    });
  },
});

export default asserSlice.reducer;
