// React
import React from 'react';

// CSS
import './App.scss';

// Constants
import { GITHUB_PROFILE_HEADER } from './constants/general';

// Components
import SearchForm from './components/SearchForm';
import ProjectCard from './components/ProjectCard';

const App = () => {
	return (
		<div className="App">
			<div className="GithubProfiles">
				<header className="GithubProfiles__header">
					<p>{GITHUB_PROFILE_HEADER}</p>
				</header>
				<SearchForm />
			</div>
			<div className="GithubContainer">
				<div className="GithubContainer__Wrapper">
					<div className="GithubContainer__Avatar">
						<ProjectCard />
					</div>
					<div className="GithubContainer__Repositories">
						<div className="GithubContainer__Repositories--firstRow">
							<ProjectCard />
							<ProjectCard />
						</div>
						<div className="GithubContainer__Repositories--secondRow">
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
