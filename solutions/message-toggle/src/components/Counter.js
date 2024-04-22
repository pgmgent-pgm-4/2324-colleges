import React, { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	const handlePlus = () => {
		setCount((prev) => prev + 1);
	};
	const handleMin = () => {
		setCount((prev) => prev - 1);
	};
	return (
		<>
			<button onClick={handlePlus}>plus</button>
			<div>{count}</div>
			<button onClick={handleMin}>min</button>
		</>
	);
}
