<aside>
    <strong>
        <slot name="title" />
    </strong>
    <slot />
</aside>

<style>
    aside {
        @apply bg-blue-100 text-blue-700;
        @apply border-blue-700 border-2;
        @apply rounded px-4 py-2;
    }
    aside :global(p) {
        @apply m-0;
    }
    aside strong {
        @apply text-blue-700;
    }
    aside :global(code) {
        @apply text-blue-800;
    }
</style>
