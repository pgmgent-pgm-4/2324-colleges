import React, { useState } from "react";

export default function MessageToggle() {
	const [showMessage, setShowMessage] = useState(false);
	const handleShowMessage = () => {
		setShowMessage(!showMessage);
	};

	return (
		<>
			<button onClick={handleShowMessage}>Show message</button>
			{showMessage && <div>MessageToggle</div>}
		</>
	);
}
