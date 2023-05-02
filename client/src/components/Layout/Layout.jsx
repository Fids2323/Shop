import React from "react";
import Header from "./Header";
import Routers from "../../routers/Routers";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="grow">
				<Routers />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
