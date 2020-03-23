// React
import React, { useState } from 'react';

// CSS
import './LightDarkMode.scss';

// Icons
import { GiSunflower, GiEvilMoon } from 'react-icons/gi';

const LightDarkMode = () => {
	const [lightMode, setLightMode] = useState(true);

	const handleLightDarkMode = () => {
		setLightMode(!lightMode);
	};

	return (
		<div className="LightDarkMode">
			{lightMode && (
				<GiEvilMoon
					className="LightDarkMode__Icon"
					onClick={() => {
						handleLightDarkMode();
					}}
				/>
			)}
			{!lightMode && (
				<GiSunflower
					className="LightDarkMode__Icon"
					onClick={() => {
						handleLightDarkMode();
					}}
				/>
			)}
		</div>
	);
};

export default LightDarkMode;
