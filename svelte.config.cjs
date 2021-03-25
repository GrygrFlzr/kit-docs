const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs');
const vercel = require('@sveltejs/adapter-vercel');
const sveltePreprocess = require('svelte-preprocess');
const pkg = require('./package.json');
const { resolve } = require('path');

module.exports = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        mdsvex(mdsvexConfig),
        sveltePreprocess({
            defaults: {
                style: 'postcss',
            },
            postcss: true,
        }),
    ],
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: vercel(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        prerender: {
            force: true,
        },

        vite: {
            resolve: {
                alias: {
                    $components: resolve('src/components'),
                    $routes: resolve('src/routes'),
                }
            },
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {})
            }
        },
    },
};
