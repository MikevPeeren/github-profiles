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

	return (
		<Card className="ProjectCard">
			<Card.Body>
				<Card.Title>{repository.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					<span>
						<GoGitBranch /> {repository.forkCount}
					</span>
					<span className="ProjectCard__CardSubtitle--span">
						<GoStar /> {repository.stargazers?.totalCount}
					</span>
				</Card.Subtitle>
				<Card.Text>{repository.description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
