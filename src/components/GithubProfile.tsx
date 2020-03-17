// React
import React, { useState, useEffect } from 'react';

// CSS
import './GithubProfile.scss';

// Constants
import { GITHUB_PROFILE_HEADER } from '../constants/general';

// Components
import SearchForm from './SearchForm';
import ProjectCard from './ProjectCard';

import { searchForGithubProfile } from '../api/GithubApi';

const GithubProfile = () => {
	const [inputFieldGitHubUser, setInputFieldGitHubUser] = useState('');
	const [githubUser, setGithubUser] = useState('');
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		async function searchForGitHubUser() {
			try {
				const result = await searchForGithubProfile(inputFieldGitHubUser);
				setGithubUser(result);
				setErrorText('');
			} catch (error) {
				setErrorText(error.message);
			}
		}

		if (inputFieldGitHubUser.length !== 0) searchForGitHubUser();
	}, [inputFieldGitHubUser]);

	/**
	 * Updates the State of Github User
	 *
	 * @param {string} githubUser
	 * @returns {void}
	 */
	const setNewGithubUser = (githubUser: string) => {
		setInputFieldGitHubUser(githubUser);
	};

	return (
		<>
			<div className="GithubProfiles">
				<header className="GithubProfiles__header">
					<p>{GITHUB_PROFILE_HEADER}</p>
				</header>
				<SearchForm setNewGithubUser={setNewGithubUser} errorText={errorText} />
			</div>
			<div className="GithubContainer">
				<div className="GithubContainer__Wrapper">
					<div className="GithubContainer__Avatar">{githubUser && <ProjectCard />}</div>
					<div className="GithubContainer__Repositories">
						{githubUser && (
							<>
								<div className="GithubContainer__Repositories--firstRow">
									<ProjectCard />
									<ProjectCard />
								</div>
								<div className="GithubContainer__Repositories--secondRow">
									<ProjectCard />
									<ProjectCard />
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default GithubProfile;
