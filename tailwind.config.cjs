const colors = require('tailwindcss/colors');
const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

module.exports = {
    darkMode: 'class',
    purge: {
        content: ['./src/**/*.html', './src/**/*.svelte'],
        options: {
            defaultExtractor: (content) => [
                // This is an internal Tailwind function that we're not supposed to be allowed to use
                // So if this stops working, please open an issue at
                // https://github.com/svelte-add/tailwindcss/issues
                // rather than bothering Tailwind Labs about it
                ...tailwindExtractor(content),
                // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
                ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
                    ([_match, group, ..._rest]) => group
                ),
            ],
            keyframes: true,
        },
    },
    theme: {
        colors: {
            // svelte theme
            primary: '#ff3e00',
            secondary: '#676778',

            // adjusted defaults
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.warmGray, // better match svelte colors
            red: colors.red,
            orange: colors.orange,
            yellow: colors.amber,
            green: colors.emerald,
            lime: colors.lime,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
