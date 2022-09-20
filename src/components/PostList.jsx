import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "../features/filter/filterSlice";

export const PostList = () => {
	const dispatch = useDispatch();
	const count = useSelector(selectCount);
	console.log(count);
	return (
		<div>
			PostList {count}
			<button onClick={() => dispatch(increment())}>
				increm
			</button>
		</div>
	);
};
