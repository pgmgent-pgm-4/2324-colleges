import React from "react";
import Map from "react-map-gl";
import { countries } from "../data/countries";
import MapPin from "./MapPin";
//create accesstoken at https://www.mapbox.com/
// use library react-map-gl to embed map from mapbox
const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapView({ coords }) {
	return (
		<Map
			mapboxAccessToken={accessToken}
			initialViewState={{
				longitude: coords.long,
				latitude: coords.lat,
				zoom: 4,
			}}
			style={{ width: "100vw", height: "100vh" }}
			mapStyle="mapbox://styles/mapbox/streets-v9"
		>
			{countries.map((country, i) => (
				<MapPin
					key={country.id}
					coords={{ long: country.longitude, lat: country.latitude }}
					isoCode={country.iso2Code}
				/>
			))}
		</Map>
	);
}
