// React
import React from 'react';

// CSS
import './App.scss';

// Components
import SearchForm from './components/SearchForm';
import ProjectCard from './components/ProjectCard';

const App = () => {
	return (
		<div className="App">
			<div className="GithubProfiles">
				<header className="GithubProfiles__header">
					<p>Github Profiles</p>
				</header>
				<SearchForm />
			</div>
			<div className="GithubProjectContainer">
				<div className="header">
					<div>
						<ProjectCard />
					</div>
					<div>
						<div className="one">
							<ProjectCard />
							<ProjectCard />
						</div>
						<div className="two">
							<ProjectCard />
							<ProjectCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
