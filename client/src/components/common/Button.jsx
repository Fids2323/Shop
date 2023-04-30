import React from "react";

const Button = ({backgroundColor, children}) => {
	const getColorText = (backgroundColor) => (backgroundColor === "bg-main" ? "text-white" : "text-main");

	return (
		<button className={`px-20 py-2 mt-8 md:mt-16 lg:mt-20 text-center rounded-md font-medium cursor-pointer ${backgroundColor} ${getColorText(backgroundColor)} hover:text-hover active:scale-110`}>
			{children}
		</button>
	);
};

export default Button;
