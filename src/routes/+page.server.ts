import {kv} from "@vercel/kv";

import type {PageServerLoad} from './$types';
import {DEFAULT_USER_NAME, DEFAULT_USER_POINTS} from "$lib/models/constants";

export const load: PageServerLoad = async (event) => {
    let sessionId = event.cookies.get('session_id');

    // Create a new session if one doesn't exist
    if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        event.cookies.set('session_id', sessionId, {
            expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
        });

        await createUser(sessionId).catch((error) => {
            console.log(error);
            event.cookies.delete('session_id');
        });
    }

    const user = await kv.hgetall(`user:${sessionId}`) as { name: string, points: string };
    if (user === null) {
        event.cookies.delete('session_id');
    }

    return {
        props: {
            user: {
                name: user.name,
                points: Number(user.points),
                sessionId: sessionId
            }
        }
    };
};

const createUser = async (sessionId: string) => {
    const response = await kv.hexists(`user:${sessionId}`, "points");

    if (response === null || response === 0) {
        try {
            await kv.hmset(`user:${sessionId}`, {
                name: DEFAULT_USER_NAME,
                points: DEFAULT_USER_POINTS
            });
        } catch (error) {
            throw new Error(String(error));
        }
    }
};