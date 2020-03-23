// React
import React, { useEffect } from 'react';
import { useLocalStorage } from 'beautiful-react-hooks';

// CSS
import './LightDarkMode.scss';

// Icons
import { GiSunflower, GiEvilMoon } from 'react-icons/gi';

const LightDarkMode = () => {
	const [lightMode, setLightMode] = useLocalStorage('LightMode', 'light-mode');

	useEffect(() => {
		changeLightDarkMode(lightMode);
	}, [lightMode]);

	const handleLightDarkMode = () => {
		setLightMode(lightMode === 'dark-mode' ? 'light-mode' : 'dark-mode');
	};

	const changeLightDarkMode = (lightMode: string) => {
		const body = document.body;
		if (body && body.className) {
			body.className = lightMode;
		}
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
