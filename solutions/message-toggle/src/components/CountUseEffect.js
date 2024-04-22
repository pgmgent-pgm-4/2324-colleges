import React, { useEffect, useState } from "react";

export default function CountUseEffect() {
	const [count, setCount] = useState(0);
	console.log("render countuseeffect");
	useEffect(() => {
		console.log("mounted component");
		return () => {
			console.log("effect ran");
		};
	}, [count]);

	const hanleClick = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<div>
			{count} <button onClick={hanleClick}>plus</button>
		</div>
	);
}
