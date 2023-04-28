import React from "react";
import {NavLink} from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import userImg from "../../assets/images/user.png";

const navigationLinks = [
	{
		text: "Home",
		link: "home",
	},
	{
		text: "Shop",
		link: "shop",
	},
	{
		text: "Cart",
		link: "cart",
	},
];

const Header = () => {
	return (
		<header className="w-100 h-16 leading-tight">
			<div className="container pt-5 mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<img src={logoImg} alt="logo" className="h-7 w-7" />
					<div>
						<h1 className="text-xl text-main font-bold">AllStocks</h1>
					</div>
				</div>

				{/* Navigation */}
				<div>
					<ul className="flex items-center gap-10 mb-0">
						{navigationLinks.map((item, index) => (
							<li key={index} className="text-main cursor-pointer font-medium">
								<NavLink to={item.link} className={(navClass) => (navClass.isActive ? "font-bold" : "font-medium")}>
									{item.text}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Header's icons */}
				<div className="flex items-center gap-4">
					<span className="relative">
						<i className="ri-shopping-cart-line text-lg text-main cursor-pointer "></i>
						<span className="absolute top-1/2 right-[-15%] w-4 h-4 text-sm bg-main text-white flex items-center justify-center font-medium rounded-full z-10">1</span>
					</span>
					<span className="relative">
						<i className="ri-heart-line text-lg text-main cursor-pointer "></i>
						<span className="absolute top-1/2 right-[-15%] w-4 h-4 text-sm bg-main text-white flex items-center justify-center font-medium rounded-full z-10">1</span>
					</span>

					<span>
						<img src={userImg} alt="user icon" className="w-7 h-7 cursor-pointer active:scale-110" />
					</span>
				</div>

				{/* Mobile menu */}
				<div className="text-lg text-main hidden">
					<span>
						<i className="ri-menu-fill"></i>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
