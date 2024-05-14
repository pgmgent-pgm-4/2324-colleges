import React from "react";
import { Marker } from "react-map-gl";

export default function MapMarker({ longitude, latitude }) {
	return (
		<Marker longitude={longitude} latitude={latitude} anchor="bottom">
			<img
				style={{ maxWidth: "50px" }}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/World_Flag_%282004%29.svg/1280px-World_Flag_%282004%29.svg.png"
			/>
		</Marker>
	);
}
