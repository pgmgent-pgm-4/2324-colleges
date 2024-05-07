import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<LoginForm
				username={username}
				password={password}
				setUsername={setUsername}
				setPassword={setPassword}
			/>
		</div>
	);
}
