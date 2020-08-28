import React, { Component } from 'react';
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

export const Locator = ({ coordinates }) => {
	return (
		<Map center={[50.6, 4.6]} zoom={8} width={800} height={540}>
			<Marker anchor={coordinates} />
		</Map>
	);
};
