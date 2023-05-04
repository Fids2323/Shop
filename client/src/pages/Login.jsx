import React, {useState} from "react";
import {useParams} from "react-router-dom";
import RegisterForm from "../components/common/RegisterForm";
import LoginForm from "../components/common/LoginForm";

const Login = () => {
	const {type} = useParams();

	const [formType, setFormType] = useState(type === "register" ? type : "login");

	const toggleFormType = (params) => {
		setFormType((prevState) => (prevState === "register" ? "login" : "register"));
	};
	return (
		<div className="container mt-5">
			<div className="flex ">
				<div className="w-6/12">
					{formType === "register" ? (
						<>
							<h3 className="mb-4">Register</h3>
							<RegisterForm />
							<p>
								Already have account?{" "}
								<a role="button" onClick={toggleFormType}>
									{" "}
									Sign In
								</a>
							</p>
						</>
					) : (
						<>
							<h3 className="mb-4">Login</h3>
							<LoginForm />
							<p>
								Dont have account?{" "}
								<a role="button" onClick={toggleFormType}>
									{" "}
									Sign Up
								</a>
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
