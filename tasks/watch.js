import 'dotenv/config';

import { watch } from 'node:fs';
import deploy from './deploy.js';

console.log('----------------------------------------');
console.log('watcher init', `build/${process.env.NODE_ENV}`);
console.log('----------------------------------------');

watch(`build/${process.env.NODE_ENV}`, { recursive: true }, (eventType, filename) => {
	if (eventType !== 'delete') {
		deploy({
			// files: [filename],
		});
	}
});
