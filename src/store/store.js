import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import searchSlice from "../features/search/searchSlice";
import testFetchSlice from "../features/testFetch/testFetchSlice";

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		search: searchSlice,
		test: testFetchSlice,
	},
});
