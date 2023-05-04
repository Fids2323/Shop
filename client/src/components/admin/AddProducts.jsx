import {Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField} from "@mui/material";
import React from "react";
import Button from "../common/Button";

const AddProducts = () => {
	return (
		<section className="px-1 py-10">
			<div className="container mx-auto">
				<div className="flex">
					<div className="w-12/12 flex-col">
						<h4 className="mb-6 text-xl font-semibold">Add product</h4>
						<FormControl action="">
							<TextField margin="dense" id="title" label="Title" type="text" />
							<TextField margin="dense" id="shortDesc" label="Short Description" type="text" />
							<TextField margin="dense" id="description" label="Description" type="text" />
							<TextField margin="dense" id="price" label="Price" type="number" />
							<TextField margin="dense" id="description" label="Description" type="text" />
							<Box sx={{minWidth: 120}}>
								<FormControl fullWidth margin="normal">
									<InputLabel variant="standard" margin="dense" htmlFor="uncontrolled-native">
										Category
									</InputLabel>
									<NativeSelect
										defaultValue={"mobile"}
										inputProps={{
											name: "category",
											id: "uncontrolled-native",
										}}
									>
										<option value={"mobile"}>Mobile</option>
										<option value={"clock"}>Clock</option>
										<option value={"video card"}>Video card</option>
										<option value={"laptop"}>Laptop</option>
									</NativeSelect>
								</FormControl>
							</Box>

							<TextField margin="normal" id="imgUrl" type="file" />
							<Button backgroundColor={"bg-main"}>Add product</Button>
						</FormControl>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddProducts;
