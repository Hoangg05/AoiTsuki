import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { createWrapper } from "next-redux-wrapper";

import SwitchLanguage from "./slices/language.slice";
import SwitchTheme from "./slices/theme.slice";
import SEOConfigure from "./slices/seo.slice";

export const store = configureStore({
	reducer: {
		language: SwitchLanguage,
		theme: SwitchTheme,
		SEO: SEOConfigure
	}
});

const makeStore = () => store;

export const wrapper = createWrapper<Store<any>>(makeStore);
