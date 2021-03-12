<script context="module">
    // @ts-check
    /**
     * @type { RouteLoad }
     */
    export async function load() {
        return {
            status: 307,
            redirect: '/learn/what-is-sveltekit',
        };
    }
</script>

<script>
    import { goto } from '$app/navigation';
    goto('/learn/what-is-sveltekit');
</script>
