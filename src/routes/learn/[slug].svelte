<script context="module">
    const slugRegex = /^(?:\d{3}-)([a-z-]+)(?:\.svx)$/;

    /**
     * @type { RouteLoad }
     */
    export async function load({ page, session }) {
        const { slug } = page.params;

        /**
         * @type { { title: string, description: string, filename: string }[] }
         */
        const pages = session.pages;
        const slugs = Object.fromEntries(
            pages.map((page) => [page.filename.match(slugRegex)[1], page])
        );

        if (slug in slugs) {
            const pages = Object.fromEntries(
                await Promise.all(
                    Object.entries(
                        import.meta.glob('/src/components/pages/*.svx')
                    ).map(async ([path, page]) => {
                        const { default: Rendered } = await page();
                        const filename = path.split('/').pop();
                        const slug = filename.match(slugRegex)[1];
                        return [slug, Rendered];
                    })
                )
            );

            const Rendered = pages[slug];

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
