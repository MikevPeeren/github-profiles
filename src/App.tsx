// React
import React from 'react';

// CSS
import './App.scss';

// Components
import SearchForm from './components/SearchForm';

const App = () => {
	return (
		<div className="App">
			<div className="GithubProfiles">
				<header className="GithubProfiles__header">
					<p>Github Profiles</p>
				</header>
				<SearchForm />
			</div>
		</div>
	);
};

export default App;
