import React from "react";
import Map from "react-map-gl";
import MapMarker from "./MapMarker";
import { countries } from "../data/countries";
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
			{countries.map((country) => (
				<MapMarker
					key={country.id}
					longitude={country.longitude}
					latitude={country.latitude}
					code={country.iso2Code}
				/>
			))}
		</Map>
	);
}
