import React from "react";
import { useDispatch } from "react-redux";
import { getShopList } from "../../features/testFetch/testFetchSlice";
import { ShopList } from "../../components/ShopList";
import cl from "../../styles/Homepage.module.css";

export const Homepage = () => {
	const dispatch = useDispatch();

	const btnHandl = () => {
		dispatch(getShopList());
	};

	return (
		<div className={cl.homePage}>
			<ShopList />
			<div className="flex space-x-2 justify-center">
				<div>
					<button
						onClick={() => btnHandl()}
						type="button"
						className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
					>
						load Shop
					</button>
				</div>
			</div>
		</div>
	);
};
