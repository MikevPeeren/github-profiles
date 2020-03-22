// React
import React from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import './ProjectCard.scss';

// Icons
import { GoGitBranch, GoStar } from 'react-icons/go';

interface ProjectCardProps {
	repository: {
		id: string;
		name?: string;
		description?: string;
		url?: string;
		forkCount?: number;
		stargazers?: {
			totalCount: number;
		};
	};
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
	const { repository } = props;

	console.log(repository);

	return (
		<Card className="ProjectCard">
			<Card.Body>
				<Card.Title>{repository.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					<GoGitBranch /> {repository.forkCount}
					<GoStar /> {repository.stargazers?.totalCount}
				</Card.Subtitle>
				<Card.Text>{repository.description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
