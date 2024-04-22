import React, { useState } from "react";

export default function ToggleMessage({ message }) {
	const [showMessage, setShowMessage] = useState(true);
	const handleClickShow = () => {
		setShowMessage(!showMessage);
	};
	return (
		<div>
			<button onClick={handleClickShow}>Show/hide message</button>
			{showMessage && <p>{message}</p>}
		</div>
	);
}
