import React, { useState } from "react";
import Light from "./Light";
import Dimmer from "./Dimmer";

export default function DimmedLight() {
	const [dimPercentage, setDimPercentage] = useState(50);
	return (
		<div>
			<Light dimPercentage={dimPercentage} />
			<Dimmer
				setDimPercentage={setDimPercentage}
				dimPercentage={dimPercentage}
			/>
		</div>
	);
}
