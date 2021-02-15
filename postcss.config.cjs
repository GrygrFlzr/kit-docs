const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.cjs'),
        autoprefixer,

        !dev &&
            cssnano({
                preset: 'default',
            }),
    ],
};
