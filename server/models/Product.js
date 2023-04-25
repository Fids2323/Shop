const {Schema, model} = require("mongoose");

const schema = new Schema(
	{
		title: {type: String},
		imgUrl: {type: String},
		category: {type: String},
		price: Number,
		shortDesc: String,
		description: String,
		reviews: [
			{
				rating: {type: Number},
				text: {type: String},
			},
		],
		avgRating: Number,
	},
	{
		timestamps: true,
	}
);

module.exports = model("Product", schema);
