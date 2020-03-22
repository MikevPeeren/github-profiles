import React from 'react';

const LightDarkMode = () => {
	return (
		<div className="theme-switch-wrapper">
			<label className="theme-switch">
				<input type="checkbox" id="checkbox" />
				<div className="slider round"></div>
			</label>
			<em>Enable Dark Mode!</em>
		</div>
	);
};

export default LightDarkMode;
