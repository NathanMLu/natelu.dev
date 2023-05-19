import type {User} from "$lib/models/user";

export const completeLevel = async (level: number, user: User) => {
    try {
        const response = await fetch('/api/user/level', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({level: level, sessionId: user.sessionId})
        });
        return response.ok;
    } catch (e) {
        return false;
    }
}

export const getPoints = async (user: User) => {
    try {
        const response = await fetch(`/api/user/points?sessionId=${user.sessionId}`);
        const data = await response.json();
        return Number(data);
    } catch (e) {
        return false;
    }
}