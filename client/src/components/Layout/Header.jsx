import React, {useRef, useEffect} from "react";
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
	const headerRef = useRef(null);
	const menuRef = useRef(null);

	const handleScroll = () => {
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
				headerRef.current.classList.add("top-0");
				headerRef.current.classList.add("left-0");
				headerRef.current.classList.add("z-99");
				headerRef.current.classList.add("bg-white");
				headerRef.current.classList.add("sticky");
				headerRef.current.classList.add("shadow-2xl");
			} else {
				headerRef.current.classList.remove("top-0", "left-0", "z-99", "bg-white", "sticky", "shadow-2xl");
			}
		});
	};

	const handleMenuToggle = () => {
		//menuRef.current.classList.toggle("active__menu");
	};

	useEffect(() => {
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return (
		<header ref={headerRef} className="h-16 leading-tight">
			<div className="container py-3 mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<img src={logoImg} alt="logo" className="h-10 w-10" />
					<div>
						<h1 className="text-xl text-main font-bold">AllStocks</h1>
					</div>
				</div>

				{/* Navigation */}
				<div ref={menuRef} onClick={handleMenuToggle} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 hidden md:static md:block md:bg-inherit md:w-3/12">
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

					{/* Mobile menu */}
					<div className="text-lg text-main hidden">
						<span onClick={handleMenuToggle}>
							<i className="ri-menu-fill"></i>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
