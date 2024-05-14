import React from "react";
import Map from "react-map-gl";
import MapMarker from "./MapMarker";

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapView() {
	return (
		<Map
			mapboxAccessToken={mapboxToken}
			initialViewState={{
				longitude: 3.73249,
				latitude: 51.04017,
				zoom: 9,
			}}
			style={{ width: "100vw", height: "100vh" }}
			mapStyle="mapbox://styles/mapbox/streets-v9"
		>
			<MapMarker longitude="3.73249" latitude="51.04017" />
		</Map>
	);
}
