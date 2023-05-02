import React, {useState} from "react";
import Helmet from "../components/Layout/Helmet";
import {TextField} from "@mui/material";
import Button from "../components/common/Button";
import {Link} from "react-router-dom";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	return (
		<Helmet title="Login">
			<section className="px-1 py-12">
				<div className="container mx-auto">
					<div className="flex">
						{loading ? (
							<div className="w-12/12">
								<h5 className="font-semibold">Loading....</h5>
							</div>
						) : (
							<div className="w-6/12">
								<h3 className="font-semibold mb-4 text-2xl text-center">Login</h3>
								<form className="flex flex-col gap-4 items-center px-10 rounded-lg py-3 border-2">
									<TextField fullWidth margin="dense" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

									<TextField fullWidth margin="dense" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

									<Button backgroundColor={"bg-main"}>Login</Button>

									<p>
										Don't have an account? <Link to="/signup">Create an account</Link>
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

export default LoginPage;
