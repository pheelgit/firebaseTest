import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import testFetchSlice from "../features/testFetch/testFetchSlice";
import todosSlice from "features/todos";

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		test: testFetchSlice,
		todos: todosSlice,
	},
});
