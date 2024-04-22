import React from "react";
import "./light.css";

export default function Light({ dimPercentage }) {
	return (
		<div
			className="light"
			style={{ backgroundColor: `hsla(55, 97%, 76%, ${dimPercentage / 100})` }}
		></div>
	);
}
