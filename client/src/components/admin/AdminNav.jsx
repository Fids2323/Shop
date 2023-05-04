import React from "react";
import {NavLink} from "react-router-dom";
import userImg from "../../assets/images/user.png";

const adminNav = [
	{
		display: "All-Products",
		path: "/dashboard/all-products",
	},
	{
		display: "Orders",
		path: "/dashboard/orders",
	},
	{
		display: "Users",
		path: "/dashboard/users",
	},
];

const AdminNav = () => {
	return (
		<>
			<header className="w-full h-auto py-5 px-0 bg-main">
				<div className="w-full">
					<div className="container mx-auto">
						<div className="flex items-center justify-between gap-10">
							<div className="logo">
								<h2 className="text-xl text-white">AllStocks</h2>
							</div>
							<div className="search__box flex items-center justify-between h-8 w-6/12 ">
								<input type="text" placeholder="Search..." className="rounded-lg h-full  mr-2 w-full px-1" />
								<span>
									<i className="ri-search-line text-white cursor-pointer"></i>
								</span>
							</div>
							<div className="admin__nav-top-right flex items-center justify-center gap-8">
								<span>
									<i className="ri-notification-3-line text-white cursor-pointer "></i>
								</span>
								<span>
									<i className="ri-settings-2-line text-white cursor-pointer"></i>
								</span>
								<img src={userImg} alt="user" className="w-10 h-10 cursor-pointer" />
							</div>
						</div>
					</div>
				</div>
			</header>
			<section className="admin__menu p-0 bg-hero w-full h-16">
				<div className="container mx-auto">
					<div className="">
						<div
							className="admin__navigation mx-auto
						my-4"
						>
							<ul className="admin__menu-list  flex items-center justify-center gap-10">
								{adminNav.map((item, index) => (
									<li className="admin__menu-item text-xl font-normal" key={index}>
										<NavLink to={item.path} className={(navClass) => (navClass.isActive ? "border-b-2 border-main" : "")}>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AdminNav;
