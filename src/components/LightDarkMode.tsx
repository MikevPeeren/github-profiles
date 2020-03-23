// React
import React from 'react';
import { useLocalStorage } from 'beautiful-react-hooks';

// CSS
import './LightDarkMode.scss';

// Icons
import { GiSunflower, GiEvilMoon } from 'react-icons/gi';

const LightDarkMode = () => {
	const [lightMode, setLightMode] = useLocalStorage('LightMode', true);

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
