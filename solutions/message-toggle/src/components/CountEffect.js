import React, { useState, useEffect } from "react";

export default function CountEffect() {
	// Step 9: Create a state variable using the useState hook
	const [count, setCount] = useState(0);

	// Step 2: Call the useEffect hook
	useEffect(() => {
		// Step 4: Log a message to the console when the component mounts
		console.log("Component mounted");

		// Step 7: Log a message when the effect runs
		return () => {
			console.log("Effect ran");
		};
	}, [count]); // Step 10: Add the state variable to the dependency array

	// Step 11: Add an event or action that changes the state variable
	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>useEffect Exercise</h1>
			<p>Count: {count}</p>
			<button onClick={incrementCount}>Increment Count</button>
		</div>
	);
}
