import React from "react";
import {Link} from "react-router-dom";
import productImg from "../../assets/images/phone.png";

const ProductCard = ({item}) => {
	return (
		<div className="mb-2 md:w-3/12 lg:w-3/12">
			<div className="cursor-pointer">
				<div>
					<img src={productImg} alt="product image" className="hover:scale-90 ease-out duration-300" />
				</div>
				<div className="p-2">
					<h3>
						<Link to={`/shop/${item.id}`} className="text-xl text-main font-semibold mt-4 hover:text-inherit">
							{item.title}
						</Link>
					</h3>
					<span className="text-sm text-gray-400">{item.category}</span>
				</div>
				<div className="flex items-center justify-between p-2">
					<span className="text-main text-lg font-medium">${item.price}</span>
					<span className="active:scale-110">
						<i class="ri-add-line text-lg bg-main text-white rounded p-1 "></i>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
