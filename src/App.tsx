// React
import React from 'react';

// CSS
import './App.scss';

// Components
import GithubProfile from './components/GithubProfile';
import LightDarkMode from './components/LightDarkMode';

const App = () => {
	return (
		<div className="App">
			<GithubProfile />
			<LightDarkMode />
		</div>
	);
};

export default App;
