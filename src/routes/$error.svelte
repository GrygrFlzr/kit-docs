<script>
    // @ts-check
    /** @type { number } */
    export let status;
    /** @type { Error } */
    export let error;
</script>

<svelte:head>
    <title>{status} {error.message} | SK Incognito</title>
</svelte:head>

<main class="prose mx-auto py-8">
    <h1>{status}</h1>
    <pre>{error.stack}</pre>
    <p>
        If you expected something here, consider
        <a href="https://github.com/GrygrFlzr/kit-docs/issues"
            >filing an issue on GitHub</a
        >!
    </p>
</main>
