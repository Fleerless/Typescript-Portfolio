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