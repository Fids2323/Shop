import React from "react";
import Helmet from "../components/Layout/Helmet";
import {Link} from "react-router-dom";
import heroImg from "../assets/images/hero.png";

const Home = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<Helmet title={"Home"}>Home</Helmet>

			{/* Hero */}
			<section className="main">
				<div className="container pt-5 mx-auto flex items-center justify-between flex">
					<div className="lg:w-6/12 md:w-6/12">
						<div className="main__content">
							<p className="main__subtitle">Popular product in {currentYear}</p>
							<h2>Keep up with the times and achieve success</h2>
							<p>
								"Discover the latest tech trends with our popular products.Stay ahead of the game and achieve success with our premium selection of smartphones, watches, video cards
								and more
							</p>
							<button className="buy__btn active:scale-125">
								<Link to="/shop">Buy now</Link>
							</button>
						</div>
					</div>

					<div className="lg:w-6/12 md:w-6/12">
						<img src={heroImg} alt="mainImg" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
