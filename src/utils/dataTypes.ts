export type Section = 'Home' | 'About' | 'Projects' | 'Resume' | 'Contact';

export type Home = {
    profilePicLocation: string;
    introParagraph: string;
    careerTitle: string;
    asideVerbiage: string;
    linkedInLink: string;
    gitHubLink: string;
};

export type About = {
    chapter: string;
    title: string;
    paragraph: string;
};

export type Projects = Project[];

export type Project = {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    deployedLink: string;
    screenShot1: string;
    screenShot2: string;
}