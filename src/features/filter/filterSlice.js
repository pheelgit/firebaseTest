import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	count: 0,
};

export const filterSlice = createSlice({
	name: "slice",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
	},
});

export default filterSlice.reducer;
export const { increment } = filterSlice.actions;

//selectors

export const selectCount = (state) => state.filter.count;
