import { createSlice } from "@reduxjs/toolkit";
const lightTheme = {
    mode: "light",
    bg: "#F7F9FC",
    bgPanel: "#FFFFFF",
    textPrimary: "#eeeeee",
    textSecondary: "#b8b8b8",
    heading: "#000000de",
    shadow: "#eae7e7",
  }; 
const themeSlice = createSlice({
    name: "theme",
    initialState: {theme: lightTheme},
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        }
    }
})

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;