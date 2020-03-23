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
			console.log(result);
			if (result.data.errors) throw new Error('Invalid Query Provided.');
			return result.data;
		})
		.catch((error) => {
			console.log(error.response);
			// Up Up and Away
			if (error.response && error.response.status === 404) throw new Error('User could not be Found!');
			// Up Up and Away
			if (error.response && error.response.status === 403) throw new Error('API Rate Limit has been reached!');
			// Up Up and Away
			else throw error;
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
			console.log(error.response);
			// Up Up and Away
			if (error.response && error.response.status === 404) throw new Error('User could not be Found!');
			// Up Up and Away
			if (error.response && error.response.status === 403) throw new Error('API Rate Limit has been reached!');
			// Up Up and Away
			else throw error;
		});
};
