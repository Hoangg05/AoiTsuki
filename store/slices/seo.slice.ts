import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	title: "",
	description: "",
	keywords: "",
	image: "",
	url: "",
	type: "",
	site_name: ""
};

export const SEOConfigure = createSlice({
	name: "SEO",
	initialState,
	reducers: {
		Config: (state, action) => {
			state = action.payload;
		}
	}
});

export const { Config } = SEOConfigure.actions;

export default SEOConfigure.reducer;
