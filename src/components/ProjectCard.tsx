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
		forks_count?: number;
		stargazers_count?: number;
	};
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
	const { repository } = props;

	return (
		<Card className="ProjectCard">
			<Card.Body>
				<Card.Title>{repository.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					<span>
						<GoGitBranch /> {repository.forks_count}
					</span>
					<span className="ProjectCard__CardSubtitle--span">
						<GoStar /> {repository.stargazers_count}
					</span>
				</Card.Subtitle>
				<Card.Text>{repository.description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
