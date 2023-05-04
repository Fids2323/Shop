import React, {useRef, useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import userImg from "../../assets/images/user.png";
import {useSelector} from "react-redux";

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
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

	const handleScroll = () => {
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
				headerRef.current.classList.add("top-0");
				headerRef.current.classList.add("left-0");
				headerRef.current.classList.add("z-50");
				headerRef.current.classList.add("bg-white");
				headerRef.current.classList.add("md:sticky");
				headerRef.current.classList.add("shadow-2xl");
			} else {
				headerRef.current.classList.remove("top-0", "left-0", "z-50", "bg-white", "sticky", "shadow-2xl");
			}
		});
	};
	const stickyHeaderToScroll = () => {
		if (window.innerWidth < 768) {
			setIsOpen(!isOpen);
			// toggle body class to prevent scrolling
			if (!isOpen) {
				document.body.classList.add("overflow-hidden");
			} else {
				document.body.classList.remove("overflow-hidden");
			}
		}
	};

	const navigateToCart = () => {
		navigate("/cart");
	};

	// cleanup body class on unmount
	useEffect(() => {
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	useEffect(() => {
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const getMenuClasses = (isOpen) => {
		if (isOpen) {
			return "block w-full h-full top-0 right-0 text-5xl flex flex-col items-center justify-center gap-8 bg-white absolute md:hidden";
		} else {
			return "hidden flex gap-10 text-lg text-main md:flex";
		}
	};

	return (
		<header className="flex justify-between items-center p-2 bg-gray-100" ref={headerRef}>
			<div className="container mx-auto flex items-center w-full justify-between">
				{/* Logo */}
				<div className="flex items-center justify-center">
					<Link to="/">
						<img src={logoImg} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
					</Link>
					<h2 className="text-lg md:text-xl lg:text-3xl text-main">AllStocks</h2>
				</div>

				{/* Navigation */}
				<nav onClick={stickyHeaderToScroll}>
					<ul className={getMenuClasses(isOpen)}>
						{navigationLinks.map((item, index) => (
							<li key={index} className="text-main cursor-pointer font-medium ">
								<NavLink to={item.link} className={(navClass) => (navClass.isActive ? "font-bold" : "font-medium")}>
									{item.text}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				{/*Cart User Burger*/}
				<div className="flex gap-4 ">
					<span className={isOpen ? "hidden relative active:scale-125" : "block relative active:scale-125"} onClick={navigateToCart}>
						<i className="ri-shopping-cart-line text-lg text-main cursor-pointer"></i>
						<span className="absolute top-1/2 right-[-15%] cursor-pointer w-4 h-4 text-sm bg-main text-white flex items-center justify-center font-medium rounded-full z-10">
							{totalQuantity}
						</span>
					</span>

					<span>
						<img src={userImg} alt="user icon" className="w-8 h-8 cursor-pointer active:scale-110" />
					</span>

					{/* Mobile menu */}
					<button className="block md:hidden" onClick={stickyHeaderToScroll}>
						{isOpen ? <i class="ri-close-line w-8 h-8 text-3xl font-bold text-main relative z-100"></i> : <i className="ri-menu-fill w-8 h-8 text-2xl font-bold text-main"></i>}
					</button>
				</div>
			</div>
			<div></div>
		</header>
	);
};

export default Header;
