import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  sideBarView: boolean;
}

const initialState: StateType = {
  sideBarView: false,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateSideBarView: (state, action) => {
      state.sideBarView = action.payload;
    },
  },
});

export const { updateSideBarView } = ThemeSlice.actions;
export default ThemeSlice.reducer;
