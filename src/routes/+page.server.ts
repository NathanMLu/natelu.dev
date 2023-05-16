import type {PageServerLoad} from './$types';
import type {User} from "$lib/models/User";
import {kv} from "@vercel/kv";

export const load = (async ({cookies}) => {
    const sessionId = cookies.get('session_id');

    // if there is no sessionId, then generate one
    if (!sessionId) {
        const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        cookies.set('session_id', sessionId);
    }

    return {
        props: {
            sessionId
        }
    }
}) satisfies PageServerLoad;