import { resolve } from 'path';

// Consult https://vitejs.dev/config/ to learn about these options
/** @type {import("vite").UserConfig } */
const config = {
    resolve: {
        alias: {
            $components: resolve('src/components'),
            $app: resolve('.svelte/assets/runtime/app')
        }
    },
    build: {
        sourcemap: true
    },
    css: {postcss: "./"}
};

export default config