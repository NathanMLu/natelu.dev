import {kv} from "@vercel/kv";
import {defaultUserName, defaultUserPoints} from "$lib/constants";

import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    let sessionId = cookies.get('session_id');

    if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        cookies.set('session_id', sessionId, {
            expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
        });

        const response = await kv.hexists(`user:${sessionId}`, "points");

        if (response === null) {
            try {
                await kv.hmset(`user:${sessionId}`, {
                    name: defaultUserName,
                    points: defaultUserPoints
                });
            } catch (error) {
                console.error(error);
                cookies.delete('session_id');
            }
        }
    }

    return {
        props: {
            sessionId
        }
    };
};
