// Api
import axios from 'axios';

import { GITHUB_REST_API_USERS_URL } from '../constants/general';

/**
 * Search through the Github Rest API to find a Github User.
 *
 * @param {string} inputFieldGitHubUser
 * @returns {array}
 */
export const searchForGithubProfile = async (inputFieldGitHubUser: string) => {
	return await axios
		.get(`${GITHUB_REST_API_USERS_URL}${inputFieldGitHubUser}`)
		.then((result) => {
			if (result.data.errors) throw new Error('Invalid Query Provided.');
			return result.data;
		})
		.catch((error) => {
			// Up Up and Away
			throw error;
		});
};

/**
 * Search through the Github Rest API to find all the repositories of a Github User.
 *
 * @param {string} inputFieldGitHubUser
 * @returns {array}
 */
export const searchForGithubTopRepositories = async (inputFieldGitHubUser: string) => {
	return await axios
		.get(`${GITHUB_REST_API_USERS_URL}${inputFieldGitHubUser}/repos`, {
			params: {
				type: 'owner',
				sort: 'created',
				direction: 'desc',
			},
		})
		.then((result) => {
			if (result.data.errors) throw new Error('Invalid Query Provided.');
			return result.data;
		})
		.catch((error) => {
			// Up Up and Away
			throw error;
		});
};
