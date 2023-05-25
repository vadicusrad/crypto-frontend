import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteAssets, getTopPriceData } from '../../thunks/assets';

const initialState = {
  assets: [],
  favoriteAssets: [],
};

export const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssets.fulfilled, (state: any, action: any) => {
      state.favoriteAssets.push(action.payload);
    });
    builder.addCase(getTopPriceData.fulfilled, (state: any, action: any) => {
      state.assets = action.payload;
    });
  },
});

export default assetSlice.reducer;
