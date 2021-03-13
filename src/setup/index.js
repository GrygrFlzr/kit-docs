export async function getSession() {
    const pages = await Promise.all(
        Object.entries(import.meta.glob('/src/pages/*.svx')).map(
            async ([path, page]) => {
                const { metadata } = await page();
                const filename = path.split('/').pop();
                return { ...metadata, filename };
            }
        )
    );

    return {
        pages,
    };
}
