// React
import React, { useState, useEffect } from 'react';

// CSS
import './GithubProfile.scss';

// Constants
import { GITHUB_PROFILE_HEADER } from '../constants/general';

// Components
import SearchForm from './SearchForm';
import ProjectCard from './ProjectCard';
import AvatarCard from './AvatarCard';

// Api
// Changed GraphQL to Rest Api as authenticating through Github Pages with React is too complex for this Project.
// import { searchForGithubProfile, searchForGithubTopRepositories } from '../api/GithubApiGraphQL';
import { searchForGithubProfile, searchForGithubTopRepositories } from '../api/GithubApiRest';

// Types
// Changed GraphQL to Rest Api as authenticating through Github Pages with React is too complex for this Project.
// import { GITHUB_USER, GITHUB_TOP_REPOSITORIES } from '../types/GithubGraphQL.types';
import { GITHUB_USER, GITHUB_TOP_REPOSITORIES } from '../types/GithubRestApi.types';

const GithubProfile = () => {
	const [inputFieldGitHubUser, setInputFieldGitHubUser] = useState('');
	const [githubUser, setGithubUser] = useState(GITHUB_USER);
	const [githubTopRepositories, setGithubTopRepositories] = useState(GITHUB_TOP_REPOSITORIES);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		/**
		 * Searches through the Github GraphQL Database for the User.
		 */
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

	useEffect(() => {
		/**
		 * Searches through the Github GraphQL Database for the repositories of the User.
		 */
		async function searchForGithubRepositories() {
			try {
				const result = await searchForGithubTopRepositories(inputFieldGitHubUser);
				setGithubTopRepositories(result);
				setErrorText('');
			} catch (error) {
				setErrorText(error.message);
			}
		}

		if (inputFieldGitHubUser.length !== 0) searchForGithubRepositories();
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
					<div className="GithubContainer__Avatar">
						{githubUser.login && (
							<AvatarCard
								login={githubUser.login}
								avatarUrl={githubUser.avatar_url}
								bio={githubUser.bio}
								repositoriesCount={githubUser.public_repos}
								watchingCount={githubUser.followers}
							/>
						)}
					</div>
					<div className="GithubContainer__Repositories">
						{/* TODO: find a better way to do this. */}
						{githubTopRepositories[0].id && (
							<>
								<div className="GithubContainer__Repositories--firstRow">
									<ProjectCard repository={githubTopRepositories[0]} />
									<ProjectCard repository={githubTopRepositories[1]} />
								</div>
								<div className="GithubContainer__Repositories--secondRow">
									<ProjectCard repository={githubTopRepositories[2]} />
									<ProjectCard repository={githubTopRepositories[3]} />
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
