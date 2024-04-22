import React from "react";

export default function Dimmer({ dimPercentage, setDimPercentage }) {
	const handleChange = (e) => {
		setDimPercentage(e.target.value);
	};
	return (
		<div>
			<input
				type="range"
				id="dimmer"
				name="dimmer"
				min="0"
				max="100"
				step="1"
				value={dimPercentage}
				onChange={handleChange}
			/>
			<label htmlFor="dimmer">Dimmer</label>
		</div>
	);
}
