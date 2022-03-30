import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { createWrapper } from "next-redux-wrapper";

import SwitchLanguage from "./slices/language.slice";
import SwitchTheme from "./slices/theme.slice";

export const store = configureStore({
	reducer: {
		language: SwitchLanguage,
		theme: SwitchTheme
	}
});

const makeStore = () => store;

export const wrapper = createWrapper<Store<any>>(makeStore);
