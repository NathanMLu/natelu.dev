import {kv} from "@vercel/kv";
import {defaultUserName, defaultUserPoints} from "$lib/constants";

import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({cookies}) => {
    let sessionId = cookies.get('session_id');

    // Create a new session if one doesn't exist
    if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        cookies.set('session_id', sessionId, {
            expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
        });

        await createUser(sessionId).catch((error) => {
            console.log(error);
            cookies.delete('session_id');
        });
    }

    // Get all other user info
    const user = await kv.hgetall(`user:${sessionId}`) as { name: string, points: string };

    return {
        props: {
            user: {
                name: user.name,
                points: user.points,
            }
        }
    };
};

const createUser = async (sessionId: string) => {
    const response = await kv.hexists(`user:${sessionId}`, "points");

    if (response === null || response === 0) {
        try {
            await kv.hmset(`user:${sessionId}`, {
                name: defaultUserName,
                points: defaultUserPoints
            });
        } catch (error) {
            throw new Error(String(error));
        }
    }
}

const testMe = async () => {
    console.log("Test")
}