import type {PageServerLoad} from './$types';
import {kv} from "@vercel/kv";
import {defaultUserName, defaultUserPoints} from "$lib/constants";

export const load = (async ({cookies}) => {
    // get the session id from the cookies, and if it doesn't exist, create one using
    // Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // then, we need to call the api endpoint to create the user in the KV store
    const sessionId = cookies.get('session_id');

    if (!sessionId) {
        const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        cookies.set('session_id', sessionId);

        kv.hset(`user:${sessionId}`, {name: defaultUserName, points: defaultUserPoints}).then(() => {
            console.log("User created");
        }, (error) => {
            console.error(error);
        });
    }

    return {
        props: {
            sessionId
        }
    }
}) satisfies PageServerLoad;