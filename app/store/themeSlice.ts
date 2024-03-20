import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    changeTheme(state, action) {
      if (state.theme === 'light') {
        action.payload.theme = 'dark';
      } else {
        action.payload.theme = 'light';
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
