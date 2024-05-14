import React, { useState } from "react";
import Map from "react-map-gl";
import { countries } from "../data/countries";
import MapPin from "./MapPin";
import { ColorRing, DNA } from "react-loader-spinner";
import "./mapview.css";

// create accesstoken at https://www.mapbox.com/
// use library react-map-gl to embed map from mapbox
const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapView({ coords }) {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoaded = () => {
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && (
				<div className="overlayer">
					{/* <ColorRing
						visible={true}
						height="80"
						width="80"
						ariaLabel="color-ring-loading"
						wrapperStyle={{}}
						wrapperClass="color-ring-wrapper"
						colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
					/> */}
					<DNA
						visible={true}
						height="80"
						width="80"
						ariaLabel="dna-loading"
						wrapperStyle={{}}
						wrapperClass="dna-wrapper"
					/>
				</div>
			)}
			<Map
				mapboxAccessToken={accessToken}
				initialViewState={{
					longitude: coords.long,
					latitude: coords.lat,
					zoom: 4,
				}}
				style={{ width: "100vw", height: "100vh" }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
				onLoad={handleLoaded}
			>
				{countries.map((country, i) => (
					<MapPin
						key={country.id}
						coords={{ long: country.longitude, lat: country.latitude }}
						isoCode={country.iso2Code}
					/>
				))}
			</Map>
		</>
	);
}
