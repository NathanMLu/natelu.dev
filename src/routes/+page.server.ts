import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const tastyCookie = cookies.get('tastyCookie');

    return {
        tastyCookie
    };
}) satisfies PageServerLoad;