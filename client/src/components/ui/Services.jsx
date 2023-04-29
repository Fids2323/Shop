import React from "react";
import serviceData from "../../assets/data/serviceData.js";

const Services = () => {
	return (
		<section className="services">
			<div className="container pt-5 mx-auto flex items-center justify-between flex gap-6">
				<div className="flex gap-3">
					{serviceData.map((service, index) => (
						<div className="lg:w-3/12 md:w-4/12" key={index}>
							<div className="p-5 flex items-center gap-3 cursor-pointer h-36 rounded-md hover:scale-110 ease-out duration-300" style={{background: service.bg}}>
								<span>
									<i className={service.icon + " text-4xl p-2"}></i>
								</span>
								<div>
									<h3 className="text-main text-xl font-semibold">{service.title}</h3>
									<p className="text-lg text-gray-400">{service.subtitle}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
