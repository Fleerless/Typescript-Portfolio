export const parseRoute = (section: string) => {
	return section.toLowerCase() === 'home' ? '/' : section.replace(/^/, '/');
};