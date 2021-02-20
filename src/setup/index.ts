// import fs from 'fs/promises';

export async function getSession(): Promise<Record<string, any>> {
    // const filenames = await fs.readdir('src/components/pages');
    // const pages = await Promise.all(
    //     filenames.map(async (filename) => {
    //         const { metadata } = await import(
    //             `/_components/pages/${filename}.js`
    //         );
    //         const { title, description } = metadata;
    //         return {
    //             title,
    //             description,
    //             filename,
    //         };
    //     })
    // );
    const pages = [
        {
            title: 'What is SvelteKit?',
            description: 'A look into the upcoming Svelte app framework',
            filename: '001-what-is-sveltekit.svx',
        },
        {
            title: 'Getting Started',
            description: 'Initializing a SvelteKit project',
            filename: '002-getting-started.svx',
        },
        {
            title: 'Navigating Your App',
            description: 'Moving around in a SvelteKit application',
            filename: '003-navigating-your-app.svx',
        },
        {
            title: 'Convenience Toolbox',
            description: "SvelteKit's application toolbox",
            filename: '004-convenience-toolbox.svx',
        },
        {
            title: 'Assets, Metadata, and CSS',
            description: 'Importing and styling in SvelteKit',
            filename: '005-assets-metadata-css.svx',
        },
        {
            title: 'Data Processing',
            description: 'Handling dynamic data in SvelteKit',
            filename: '006-data-processing.svx',
        },
        {
            title: 'Setting the Context',
            description: 'Context and session setup in SvelteKit',
            filename: '007-setting-the-context.svx',
        },
        {
            title: 'Deploying an App',
            description: "A dive into SvelteKit's build process and adapters",
            filename: '008-deploying-an-app.svx',
        },
        {
            title: 'SvelteKit API',
            description: 'A comprehensive API documentation for SvelteKit',
            filename: '999-everything.svx',
        },
    ];
    return {
        pages,
    };
}
