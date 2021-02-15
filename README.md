# Unofficial Documentation for @sveltejs/kit

what is kit

-   app framework on around svelte
-   unbundled development w/ snowpack
-   serverless as a priority (adapters)
-   file-based routing
-   typescript as an (optional) priority
-   differences with sapper
    -   dev experience
    -   snowpack + esbuild
    -   compile times
    -   modules
    -   adapters

setup

-   caveats (STOP)
-   not-svelte-kit
-   run dev server
-   edit page to show off HMR
-   svelte config
-   snowpack config

navigation / routing / paths

-   file name
-   linking works without special components
-   $layout
-   $error
-   $components
-   $app
-   scroll position!
-   goto
-   prefetch?

static assets / metadata / css (and others)

-   importing assets
-   svelte:head
-   importing css
-   components!
-   tips: exporting `class`

pre-rendering / data-fetching

-   SSG vs SSR (adapters)
-   prerender specific page
-   data-dependent rendering
-   context module (server fetch!)
-   mdsvex?
-   blog example

dynamic routes

-   static generation of dynamic
-   metadata
-   index page
-   regex subsets

server side routes

-   get / post / put / patch / delete / options
-   del
-   serverless considerations
-   src/setup/index.js

deployment

-   build
-   the .svelte folder
-   adapters
-   deployment: begin ?
-   deployment: vercel
-   deployment: netlify
-   deployment: static
-   deployment: node (serverful)

typescript / postcss

-   types
-   $app paths
-   lang=ts
-   adding tailwindcss
