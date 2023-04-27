import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import CardProduct from "../pages/CardProduct";
import Cart from "../pages/Cart";
import LoginPage from "../pages/LoginPage";
import Shop from "../pages/Shop";

const Routers = () => {
	return (
		<Routes>
			<Route path="home" element={<Home />} />
			<Route path="shop" element={<Shop />} />
			<Route path="shop/:id" element={<CardProduct />} />
			<Route path="cart" element={<Cart />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="/" element={<Navigate to="home" />} />
		</Routes>
	);
};

export default Routers;
