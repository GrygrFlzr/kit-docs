<script context="module">
    // @ts-check
    /**
     * @type { RouteLoad }
     */
    export async function load() {
        return {
            redirect: {
                to: '/learn/what-is-sveltekit',
                status: 302,
            },
        };
    }
</script>

<script>
    import { goto } from '$app/navigation';
    goto('/learn/what-is-sveltekit');
</script>
