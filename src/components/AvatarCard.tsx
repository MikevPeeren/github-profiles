// React
import React from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import './AvatarCard.scss';

// Constants
import { WATCHING, REPOSITORIES } from '../constants/avatarcard';

// Icons
import { FaGithub, FaUsers } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';

interface AvatarCardProps {
	login: string;
	avatarUrl?: string;
	bio?: string;
	repositoriesCount?: number;
	watchingCount?: number;
}

const AvatarCard: React.FC<AvatarCardProps> = (props) => {
	const { login, avatarUrl, bio, repositoriesCount, watchingCount } = props;

	return (
		<div className="AvatarCard">
			<Card>
				<Card.Img variant="top" src={avatarUrl} />
				<Card.Body className="AvatarCard__Card--body">
					<Card.Title>{login}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{bio}</Card.Subtitle>
				</Card.Body>
			</Card>

			<div className="AvatarCard__Username">
				<FaGithub />
				<span>{login}</span>
			</div>
			<div className="AvatarCard__Watching">
				<FaUsers />
				<span>
					{watchingCount} {WATCHING}
				</span>
			</div>
			<div className="AvatarCard__Repositories">
				<GoRepoForked />
				<span>
					{repositoriesCount} {REPOSITORIES}
				</span>
			</div>
		</div>
	);
};

export default AvatarCard;
