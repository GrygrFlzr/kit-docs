<script>
    import '@fontsource/overpass/300.css';
    import '@fontsource/overpass/300-italic.css';
    import '@fontsource/overpass/600.css';
    import '@fontsource/overpass/700.css';
    import '@fontsource/overpass/800.css';
    import 'prismjs-tomorrow-theme/prism-tomorrow.css';
    import './_global.css';
    import { session } from '$app/stores';
    import Nav from '$components/Nav.svelte';
</script>

<div class="min-h-screen flex flex-col">
    <header class="flex-grow-0 bg-gray-100 border-primary border-t-4">
        <div
            class="container mx-auto py-6 px-3 md:pl-7 grid grid-cols-2 items-center"
        >
            <h1
                class="uppercase text-2xl sm:text-3xl font-medium tracking-wider"
            >
                <a href="/" class="inline-flex items-center">
                    <img class="h-12 sm:h-16" alt="Logo" src="/logo.png" />
                    <span class="ml-1 pt-2 text-gray-700 whitespace-nowrap"
                        >SK Incognito</span
                    >
                </a>
            </h1>
            <div class="justify-self-end">
                <Nav pages={$session.pages} />
            </div>
        </div>
    </header>

    <div class="flex-grow shadow">
        <slot />
    </div>

    <footer class="flex-grow-0 bg-gray-300 px-3">
        <div class="container mx-auto py-8 prose">
            <div>&copy; SK Incognito 2021</div>
            <div>
                Want to contribute? Pick up an issue on
                <a href="https://github.com/GrygrFlzr/kit-docs">GitHub</a>!
            </div>
        </div>
    </footer>
</div>
