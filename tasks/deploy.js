import FtpDeploy from 'ftp-deploy';

const deploy = () => {
	const ftpDeploy = new FtpDeploy();

	const deployConfig = {
		user: process.env.FTP_USERNAME,
		password: process.env.FTP_PASSWORD,
		host: process.env.FTP_HOST,
		port: +process.env.FTP_PORT,
		remoteRoot: `/${process.env.FTP_HOSTNAME}/public_html/${process.env.FTP_PATHNAME}/${process.env.PROJECT_NAME}/${process.env.NODE_ENV}/`,

		localRoot: `${process.cwd()}/build/${process.env.NODE_ENV}/src/`,
		include: ['*', '**/*'],
		exclude: [
			'node_modules/**',
			'node_modules/**/.*',
			'.git/**',
		],
		deleteRemote: false,
		forcePasv: true,
		sftp: false,
	};

	ftpDeploy
		.deploy(deployConfig)
		.catch((err) => {
			console.error(err);
		});
};


export default deploy;


