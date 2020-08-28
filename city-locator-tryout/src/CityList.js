import React from "react";

export const CityList = ({ cities, setCity }) => {
	return (
		<select size ="30"
			onChange={iEvent => {
				setCity(iEvent.target.value);
			}}
		>
			{cities.map(city => (
				<option key={city} value={city} >{city}</option>
			))}
		</select>
	);
};
