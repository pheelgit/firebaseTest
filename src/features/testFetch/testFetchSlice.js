import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "41c43e73-7d321df6-530a2f3f-88a9f058";
const DAYLY_STORE = "https://fortniteapi.io/v2/shop";

const initialState = {
	posts: [],
};

export const getShopList = createAsyncThunk(
	"testFetch/getPosts",
	async (_, { rejectWithValue, dispatch }) => {
		const res = await axios.get(DAYLY_STORE, {
			headers: {
				Authorization: API_KEY,
			},
		});

		dispatch(setPost(res.data.shop));
	}
);

export const testFetchSlice = createSlice({
	name: "testFetch",
	initialState,
	reducers: {
		setPost: (state, action) => {
			state.posts = action.payload;
		},
	},
	extraReducers: {
		[getShopList.fulfilled]: () => console.log("fulfield"),
		[getShopList.pending]: () => console.log("pending"),
		[getShopList.rejected]: () => console.log("rejected"),
	},
});

export const { setPost } = testFetchSlice.actions;
export default testFetchSlice.reducer;
