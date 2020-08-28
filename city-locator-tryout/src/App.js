import React, { useState } from "react";
import { Locator } from "./Locator.js";
import { CityList } from "./CityList";
import cities from "./cities.json";

const App = () => {
	const [city, setCity] = useState("Antwerpen");

	const getCoordinates = iName => {
		const found = cities.filter(city => city.Name === iName);
		return [found[0].Lat, found[0].Lon];
	};

	return (
		<div>
			<CityList cities={cities.map(city => city.Name).sort()} setCity={setCity} />
			<Locator coordinates={getCoordinates(city)} />
		</div>
	);
};
export default App;
