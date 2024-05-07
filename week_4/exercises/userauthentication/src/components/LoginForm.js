import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({
	username,
	setUsername,
	password,
	setPassword,
}) {
	const { user, login } = useContext(UserContext);
	const [isFormError, setIsFormError] = useState(false)
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsFormError(login({ username, password }));
	};
	useEffect(() => {
		if (user) navigate("/");
	}, [user]);
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div>
				<button type="submit">submit</button>
			</div>
		</form>
	);
}
