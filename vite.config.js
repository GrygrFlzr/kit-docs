import { resolve } from 'path';

// Consult https://vitejs.dev/config/ to learn about these options
/** @type {import("vite").UserConfig } */
const config = {
    resolve: {
        alias: {
            $components: resolve('src/components')
        }
    },
    build: {
        sourcemap: true
    },
};

export default config