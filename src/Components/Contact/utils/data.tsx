import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { colors } from 'Utils/styles';

export const contactItemsArray = [
	{
		icon: faLinkedin,
		link: 'https://www.linkedin.com/in/jeffrey-fleer/',
		alt: 'LinkedIn',
		description: 'Keep up with my recent activity on LinkedIn!',
		color: `${colors.iconColors.linkedIn}`,
	},
	{
		icon: faGithub,
		link: 'https://github.com/Fleerless',
		alt: 'GitHub',
		description: 'View code for my current projects on GitHub!',
		color: `${colors.iconColors.gitHub}`,
	},
	{
		icon: faEnvelopeOpen,
		link: 'mailto:jeffreyfleer@gmail.com',
		alt: 'Email',
		description: 'Connect with me via email!',
		color: `${colors.iconColors.email}`,
	},
];