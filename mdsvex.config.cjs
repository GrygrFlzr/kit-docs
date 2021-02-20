module.exports = {
    extensions: ['.svx', '.md'],
    smartypants: {
        dashes: 'oldschool',
    },
    remarkPlugins: [
        // [require("remark-github"), {
        // 	repository: "https://github.com/svelte-add/mdsvex.git", // (use your own repository)
        // }],
        // require("remark-abbr"),
    ],
    rehypePlugins: [
        require('rehype-slug'),
        [
            require('rehype-autolink-headings'),
            {
                behavior: 'prepend',
                content: {
                    type: 'element',
                    tagName: 'svg',
                    properties: {
                        className: [],
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        stroke: 'currentColor',
                    },
                    children: [
                        {
                            type: 'element',
                            tagName: 'path',
                            properties: {
                                'stroke-linecap': 'round',
                                'stroke-linejoin': 'round',
                                'stroke-width': '2',
                                d:
                                    'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
                            },
                            children: [],
                        },
                    ],
                },
            },
        ],
    ],
    highlight: {
        alias: {
            svelte: 'html',
            jsonc: 'json',
        },
    },
};
