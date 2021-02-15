// https://github.com/svelte-add/tailwindcss/issues/7
const path = require('path');
const pkg = require(path.join(process.cwd(), 'package.json'));

// Consult https://www.snowpack.dev to learn about these options
module.exports = {
    packageOptions: {
        // always include Svelte in your project
        knownEntrypoints: ['svelte'],
        // ignore `import fs from 'fs'` etc
        external: [
            ...require('module').builtinModules.filter(
                (module) => module !== 'process'
            ),
            ...Object.keys(pkg.dependencies || {}),
        ],
    },
    plugins: [
        [
            '@snowpack/plugin-svelte',
            {
                compilerOptions: {
                    hydratable: true,
                },
                configFilePath: 'svelte.config.cjs',
            },
        ],
        [
            '@snowpack/plugin-build-script',
            {
                cmd: 'postcss',
                input: ['.css', '.pcss'],
                output: ['.css'],
            },
        ],

        '@snowpack/plugin-typescript',
    ],
    devOptions: {
        open: 'none',
        output: 'stream',
    },
    buildOptions: {
        sourcemap: true,
    },
    mount: {
        '.svelte/assets': `/${process.env.SVELTE_KIT_APP_DIR}/assets`,
        'src/components': '/_components',
    },
    alias: {
        $app: './.svelte/assets/runtime/app',
        $components: './src/components',
    },
};
