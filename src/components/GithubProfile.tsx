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
import { searchForGithubProfile, searchForGithubTopRepositories } from '../api/GithubApi';

const GithubProfile = () => {
	const [inputFieldGitHubUser, setInputFieldGitHubUser] = useState('');
	const [githubUser, setGithubUser] = useState({
		login: '',
		avatarUrl: '',
		bio: '',
		repositories: {
			totalCount: 0,
		},
		watching: {
			totalCount: 0,
		},
	});
	const [githubTopRepositories, setGithubTopRepositories] = useState([
		{
			node: {
				id: '',
				createdAt: '',
				name: '',
				description: '',
				url: '',
				forkCount: 0,
				stargazers: {
					totalCount: 0,
				},
			},
		},
	]);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		/**
		 * Searches through the Github GraphQL Database for the user.
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
								avatarUrl={githubUser.avatarUrl}
								bio={githubUser.bio}
								repositoriesCount={githubUser.repositories.totalCount}
								watchingCount={githubUser.watching.totalCount}
							/>
						)}
					</div>
					<div className="GithubContainer__Repositories">
						{githubTopRepositories[0].node.id && (
							<>
								<div className="GithubContainer__Repositories--firstRow">
									<ProjectCard repository={githubTopRepositories[0].node} />
									<ProjectCard repository={githubTopRepositories[1].node} />
								</div>
								<div className="GithubContainer__Repositories--secondRow">
									<ProjectCard repository={githubTopRepositories[2].node} />
									<ProjectCard repository={githubTopRepositories[3].node} />
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
