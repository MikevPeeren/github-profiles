// Api
import axios from 'axios';

/**
 * Generate a new connection to the GitHub GraphQL API
 *
 * @returns {}
 */
const setupGitHubConnection = () => {
	return axios.create({
		baseURL: 'https://api.github.com/graphql',
		headers: {
			Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
		},
	});
};

/**
 * Search through the Github GraphQL to find a Github User.
 *
 * @param {string} inputFieldGitHubUser
 * @returns {array}
 */
export const searchForGithubProfile = async (inputFieldGitHubUser: string) => {
	const GET_USER = `
    {
        user(login: "${inputFieldGitHubUser}" ) {
			login
            avatarUrl
			bio
			repositories {
				totalCount
			}
			watching {
				totalCount
			}
        }
    }
    `;

	return await setupGitHubConnection()
		.post('', { query: GET_USER })
		.then((result) => {
			if (result.data.errors) throw new Error('Invalid Query Provided.');
			return result.data.data.user;
		})
		.catch((error) => {
			// Up Up and Away
			throw error;
		});
};

export const searchForGithubTopRepositories = async (inputFieldGitHubUser: string) => {
	const GET_TOP_REPOSITORIES = `
	{
		user(login: "${inputFieldGitHubUser}") {
			repositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 4) {
				edges {
					node {
						id
						name
						description
						url
						forkCount
						stargazers {
							totalCount
						}
					}
				}
			}
		}
	}
	`;

	return await setupGitHubConnection()
		.post('', { query: GET_TOP_REPOSITORIES })
		.then((result) => {
			if (result.data.errors) throw new Error('Invalid Query Provided.');
			return result.data.data.user.repositories.edges;
		})
		.catch((error) => {
			// Up Up and Away
			throw error;
		});
};
