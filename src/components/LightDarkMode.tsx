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
		const body = document.body;
		const currentClass = body && body.className;
		if (body && body.className) {
			body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode';
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
