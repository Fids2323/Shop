import React from "react";
import {TextField} from "@mui/material";

const FormOrder = () => {
	return (
		<form>
			<TextField fullWidth margin="dense" id="name" label="Enter your name" variant="standard" required />
			<TextField fullWidth margin="dense" id="email" label="Enter your email" variant="standard" required />
			<TextField fullWidth margin="dense" id="phone" label="Phone number" variant="standard" required />
			<TextField fullWidth margin="dense" id="address" label="Street address" variant="standard" required />
			<TextField fullWidth margin="dense" id="city" label="City" variant="standard" required />
			<TextField fullWidth margin="dense" id="postal" label="Postal code" variant="standard" required />
			<TextField fullWidth margin="dense" id="country" label="Country" variant="standard" required />
		</form>
	);
};

export default FormOrder;
