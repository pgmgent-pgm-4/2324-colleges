import React from "react";
import Map from "react-map-gl";
const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
export default function MapView({ coords }) {
	console.log(coords);
	return (
		<Map
			mapboxAccessToken={accessToken}
			initialViewState={{
				longitude: coords.long,
				latitude: coords.lat,
				zoom: 14,
			}}
			style={{ width: "100%", height: "100vh" }}
			mapStyle="mapbox://styles/mapbox/streets-v9"
		/>
	);
}
