import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: "light",
	themes: ["light", "dark"]
};

export const SwitchTheme = createSlice({
	name: "Language",
	initialState,
	reducers: {
		changeLanguage: (state, action) => {
			state.theme = action.payload;
		}
	}
});

export const { changeLanguage } = SwitchTheme.actions;

export default SwitchTheme.reducer;
