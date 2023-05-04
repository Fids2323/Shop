import React, {useEffect, useState} from "react";
import Helmet from "../components/Layout/Helmet";
import {TextField} from "@mui/material";
import Button from "../components/common/Button";
import {Link} from "react-router-dom";
import {validationSchema} from "../utils/validationSchema";
import {parceYupError} from "../utils/parceYupError";

const SignUp = () => {
	const [data, setData] = useState({
		userName: "",
		email: "",
		password: "",
		file: [],
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const isValid = Object.keys(errors).length === 0;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValid) {
			//отправка
			console.log("Отправлено!");
		}
	};

	const handleChange = (e) => {
		const {value, name} = e.target;
		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		validationSchema
			.validate(data, {abortEarly: false})
			.then(() => setErrors({}))
			.catch((yupError) => {
				const errors = parceYupError(yupError);
				setErrors(errors);
			});
	}, [data]);

	return (
		<Helmet title="Signup">
			<section className="px-1 py-12">
				<div className="container mx-auto">
					<div className="flex items-center justify-center">
						{loading ? (
							<div className="w-12/12">
								<h5 className="font-semibold">Loading....</h5>
							</div>
						) : (
							<div className="w-6/12">
								<h3 className="font-semibold mb-4 text-2xl text-center">Signup</h3>
								<form className="flex flex-col gap-4 items-center px-10 rounded-lg py-3" onSubmit={handleSubmit}>
									<TextField
										fullWidth
										margin="dense"
										type="text"
										placeholder="Username"
										value={data.userName}
										onChange={handleChange}
										error={Boolean(errors.userName)}
										helperText={errors.userName}
										name="userName"
									/>

									<TextField
										fullWidth
										margin="dense"
										type="email"
										placeholder="Enter your email"
										value={data.email}
										onChange={handleChange}
										error={Boolean(errors.email)}
										helperText={errors.email}
										name="email"
									/>

									<TextField
										fullWidth
										margin="dense"
										type="password"
										placeholder="Enter your password"
										error={Boolean(errors.password)}
										helperText={errors.password}
										onChange={handleChange}
										name="password"
									/>

									<TextField margin="dense" type="file" error={Boolean(errors.file)} helperText={errors.file} onChange={handleChange} name="file" />

									<Button backgroundColor={"bg-main"}>Create an Account</Button>

									<p>
										Already have an account?{" "}
										<Link className="text-gray-500 font-medium" to="/login">
											Login
										</Link>
									</p>
								</form>
							</div>
						)}
					</div>
				</div>
			</section>
		</Helmet>
	);
};

export default SignUp;
