const isDev = () => window.location.origin.includes('webflow.io');

const hostname = process.env.FTP_HOSTNAME;

const insertScripts = () => {
	const { body } = document;
	const scriptsToInsertPaths = [];


	document.querySelectorAll('[data-scripts]').forEach((element) => {
		scriptsToInsertPaths.push(...element.dataset.scripts.split(' '));
	});
	const modeSubdirectory = isDev ? 'development' : 'production';

	scriptsToInsertPaths.forEach((scriptsToInsertPath) => {
		const script = document.createElement('script');
		script.src = `https://${hostname}/${process.env.FTP_PATHNAME}/${process.env.PROJECT_NAME}/${modeSubdirectory}/scripts/${scriptsToInsertPath}`;
		body.append(script);
	});
};
insertScripts();
