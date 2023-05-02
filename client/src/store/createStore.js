import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const rootReducers = combineReducers({cart: cartReducer});

export function createStore() {
	return configureStore({
		reducer: rootReducers,
	});
}
