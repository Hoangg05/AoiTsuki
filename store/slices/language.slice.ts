import { createSlice } from "@reduxjs/toolkit";
import CNLangs from "lang/cn/index.lang.cn";
import VNLangs from "lang/vn/index.lang.vn";

const initialState = {
	language: "vn",
	languages: ["vn", "cn"],
	translations: {
		vn: VNLangs,
		cn: CNLangs
	}
};

export const SwitchLanguage = createSlice({
	name: "Language",
	initialState,
	reducers: {
		changeLanguage: (state, action) => {
			state.language = action.payload;
		}
	}
});

export const { changeLanguage } = SwitchLanguage.actions;

export default SwitchLanguage.reducer;
