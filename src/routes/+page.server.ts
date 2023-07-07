import {sql} from "@vercel/postgres";

import type {PageServerLoad} from './$types';
import {DEFAULT_USER_POINTS} from "$lib/models/constants";

export const load: PageServerLoad = async (event) => {
    let sessionId = event.cookies.get('session_id');

    let user = await sql`SELECT points
                         FROM users
                         WHERE session_id = ${sessionId}`
    if (user.rowCount === 0) {
        event.cookies.delete('session_id');
        sessionId = undefined;
    }

    // Create a new session if one doesn't exist
    if (!sessionId) {
        sessionId = generateSessionId();
        event.cookies.set('session_id', sessionId, {
            expires: new Date('Fri, 31 Dec 9999 23:59:59 GMT'),
        });

        await createUser(sessionId).catch((error) => {
            console.log(error);
            event.cookies.delete('session_id');
        });

        user = await sql`SELECT points
                         FROM users
                         WHERE session_id = ${sessionId}`
    }

    return {
        user: {
            sessionId: sessionId,
            points: user.rows[0]?.points
        }
    };
};

const createUser = async (sessionId: string) => {
    try {
        await sql`INSERT INTO users (session_id, points)
                  VALUES (${sessionId}, ${DEFAULT_USER_POINTS})`;
    } catch (error) {
        throw new Error(String(error));
    }

};

const generateSessionId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}