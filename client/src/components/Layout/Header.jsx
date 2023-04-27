import React from "react";
import {NavLink} from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import userImg from "../../assets/images/user.png";

const Header = () => {
	return (
		<header>
			<div className="container mx-auto">
				{/* Logo */}
				<div>
					<img src={logoImg} alt="logo" />
					<div>
						<h1>Shop</h1>
					</div>
				</div>

				{/* Navigation */}
				<div>
					<ul>
						<li>
							<NavLink to="home">Home</NavLink>
						</li>
						<li>
							<NavLink to="home">Shop</NavLink>
						</li>
						<li>
							<NavLink to="home">Cart</NavLink>
						</li>
					</ul>
				</div>

				{/* Header's icons */}
				<div>
					<span>
						<i className="ri-shopping-cart-line"></i>
					</span>
					<span>
						<i className="ri-heart-line"></i>
					</span>

					<span>
						<img src={userImg} alt="user icon" />
					</span>
				</div>

				{/* Mobile menu */}
				<div>
					<span>
						<i className="ri-menu-fill"></i>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
