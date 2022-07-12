const Dotenv = require('dotenv-webpack');

const path = require('path');
const glob = require('glob');
// const Deploy = require('./tasks/deploy');

const generateEntry = (filesPaths) => filesPaths.reduce(
	(prevEntry, currentPath) => {
		const entry = prevEntry;
		entry[currentPath] = currentPath;
		return entry;
	},
	{},
);


module.exports = {
	mode: process.env.NODE_ENV,
	watch: true,
	optimization: {
		minimize: process.env.NODE_ENV === 'production',
	},
	entry: generateEntry(glob.sync('./src/scripts/**/*.js')),
	output: {
		filename: '[name]',
		path: path.resolve(__dirname, `build/${process.env.NODE_ENV}`),
	},
	plugins: [
		new Dotenv()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
