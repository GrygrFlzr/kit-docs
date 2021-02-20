<script context="module">
    // @ts-check
    const slugRegex = /^(?:\d{3}-)([a-z-]+)(?:\.svx)$/;

    const markdownPages = {
        'what-is-sveltekit': import(
            '$components/pages/001-what-is-sveltekit.svx'
        ),
        'getting-started': import('$components/pages/002-getting-started.svx'),
        'navigating-your-app': import(
            '$components/pages/003-navigating-your-app.svx'
        ),
        'convenience-toolbox': import(
            '$components/pages/004-convenience-toolbox.svx'
        ),
        'assets-metadata-css': import(
            '$components/pages/005-assets-metadata-css.svx'
        ),
        'data-processing': import('$components/pages/006-data-processing.svx'),
        'setting-the-context': import(
            '$components/pages/007-setting-the-context.svx'
        ),
        'deploying-an-app': import(
            '$components/pages/008-deploying-an-app.svx'
        ),
        everything: import('$components/pages/999-everything.svx'),
    };

    /**
     * @type { RouteLoad }
     */
    export async function load({ page, session }) {
        const { slug } = page.params;

        // workaround for static adapter
        if (slug === 'index') {
            return {
                redirect: {
                    to: '/learn/what-is-sveltekit',
                    status: 302,
                },
            };
        }

        /**
         * @type { { title: string, description: string, filename: string }[] }
         */
        const pages = session.pages;
        const slugs = Object.fromEntries(
            pages.map((page) => [page.filename.match(slugRegex)[1], page])
        );

        if (slug in slugs) {
            // file found, render mdsvex
            // const { default: Rendered } = await import(
            //     `/_components/_pages/${slugs[slug].filename}`
            // );
            const { default: Rendered } = await markdownPages[slug];
            return {
                props: {
                    title: slugs[slug].title,
                    description: slugs[slug].description,
                    Rendered,
                },
            };
        } else {
            // not found
            return {
                status: 404,
                error: new Error('Not found'),
            };
        }
    }
</script>

<script>
    import { fly, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    export let Rendered;
    export let title;
    export let description;
</script>

<svelte:head>
    <title>{title} | SK Incognito</title>
    <meta name="title" content="{title} | SK Incognito" />
    <meta name="description" content={description} />
    <meta property="og:title" content="{title} | SK Incognito" />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="twitter:title" content="{title} | SK Incognito" />
    <meta property="twitter:description" content={description} />
</svelte:head>

<div class="container mx-auto overflow-y-hidden px-3 md:pl-7">
    {#key Rendered}
        <article
            class="prose prose-lg py-8"
            out:fade={{
                easing: cubicOut,
                duration: 250,
            }}
            in:fly={{
                y: 100,
                easing: cubicOut,
                duration: 250,
                delay: 250,
            }}
        >
            <Rendered />
        </article>
    {/key}
</div>
