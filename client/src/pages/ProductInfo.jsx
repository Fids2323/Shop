import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Layout/Helmet";
import productImg from "../assets/images/phone.png";
import Button from "../components/common/Button";
import ProductDetails from "../components/ui/ProductDetails";
import {useDispatch} from "react-redux";
import {cartActions} from "../store/slices/cartSlice";
import {toast} from "react-toastify";

const ProductInfo = () => {
	const {id} = useParams();
	const product = products.find((item) => item.id === id);
	const {title, imgUrl, category, price, shortDesc, description, reviews, avgRating} = product;

	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(
			cartActions.addItem({
				id,
				imgUrl,
				title,
				price,
			})
		);
		toast.success("Product added successfully");
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	return (
		<Helmet title={title}>
			<section className="pb-10">
				<div className="container mx-auto">
					<div className="flex">
						{/*Card product*/}
						<div className="w-6/12">
							<img src={productImg} alt="Product" />
						</div>

						<div className="w-6/12 mt-16">
							<h2 className="text-4xl font-semibold text-main mb-2">{title}</h2>
							<div className="flex items-center gap-5 mb-4">
								<div>
									<span>
										<i className="ri-star-s-fill" style={{color: "coral"}}></i>
									</span>
									<span>
										<i className="ri-star-s-fill" style={{color: "coral"}}></i>
									</span>
									<span>
										<i className="ri-star-s-fill" style={{color: "coral"}}></i>
									</span>
									<span>
										<i className="ri-star-s-fill" style={{color: "coral"}}></i>
									</span>
									<span>
										<i className="ri-star-half-s-line" style={{color: "coral"}}></i>
									</span>
								</div>
								<p>
									(
									<span className="font-semibold" style={{color: "coral"}}>
										{avgRating}
									</span>{" "}
									rating)
								</p>
							</div>

							<span className="text-lg font-medium mb-3">${price}</span>
							<p>{shortDesc}</p>

							<Button backgroundColor={"bg-main"} onClick={() => addToCart()}>
								Add to cart
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Description/ Reviews */}
			<ProductDetails product={product} />
		</Helmet>
	);
};

export default ProductInfo;
