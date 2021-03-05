import { resolve } from 'path';

// Consult https://vitejs.dev/config/ to learn about these options
/** @type {import("vite").ResolvedConfig } */
export default {
	resolve: {
		alias: {
			$components: resolve('src/components'),
			$app: resolve('.svelte/assets/runtime/app')
		}
	},
	build: {
		sourcemap: true
	}
};
