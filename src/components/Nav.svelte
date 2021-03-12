<script>
    // @ts-check
    import { page } from '$app/stores';
    import { fly, fade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    const slugRegex = /^(?:\d{3}-)([a-z-]+)(?:\.svx)$/;
    const inConfig = {
        x: 50,
        duration: 300,
        easing: cubicInOut,
    };
    const outConfig = {
        x: 200,
        duration: 300,
        easing: cubicInOut,
    };

    /** @type {{
     *  title: string;
     *  description: string;
     *  filename: string;
     * }[]} */
    export let pages = [];

    let expanded = false;

    /** @param { string } filename */
    function slug(filename) {
        return filename.match(slugRegex)[1];
    }

    function toggleExpand() {
        expanded = !expanded;
    }
</script>

{#if expanded}
    <div
        class="modal-blocker"
        on:click={() => {
            expanded = false;
        }}
        transition:fade={{
            duration: 300,
        }}
    />
{/if}

<button class:expanded on:click={toggleExpand}>
    MENU
    {#if expanded}
        <nav class:expanded in:fly={inConfig} out:fly={outConfig}>
            <ul>
                {#each pages as { title, filename } (filename)}
                    <li
                        class:active={$page.path === `/learn/${slug(filename)}`}
                    >
                        <a href="/learn/{slug(filename)}">
                            <span>
                                {title}
                            </span>
                        </a>
                    </li>
                {/each}
                <li>
                    <a href="https://discord.gg/j7NhbT2DSY">
                        <span>Unofficial Discord Server</span>
                    </a>
                </li>
            </ul>
        </nav>
    {/if}
</button>

<style>
    .modal-blocker {
        @apply fixed inset-0 bg-gray-900 opacity-20 z-40;
    }
    button {
        @apply relative;
        @apply pt-2 pb-1 px-4 bg-gray-700 text-gray-50;
        @apply hover:bg-gray-600;
        @apply rounded-none shadow;
        @apply hover:shadow-md transition-all;
        @apply outline-none;
        @apply z-50;
    }
    button.expanded {
        @apply bg-orange-600 text-orange-100;
    }
    nav {
        @apply absolute top-10 right-0 block;
        @apply text-right;
        @apply rounded-none z-50 shadow-md;
        @apply bg-gray-700;
    }
    nav li a {
        @apply block pt-2 pb-1 pl-8 pr-4;
        @apply bg-gradient-to-r from-gray-700 to-gray-700 text-gray-300;
        @apply hover:text-gray-200;
        @apply hover:to-gray-600;
        @apply transition-colors;
        @apply whitespace-nowrap;
    }
    nav li.active a {
        @apply text-gray-100;
        @apply bg-gradient-to-r from-gray-700 via-gray-600 to-gray-600;
    }
</style>
