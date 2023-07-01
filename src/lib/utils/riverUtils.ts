import type {CartItem} from "$lib/models/river";
import type {User} from "$lib/models/user";

export const buyItem = async (item: CartItem, user: User) => {
    const response = await fetch('/api/river', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionId: user.sessionId,
            name: item.name,
            customMessage: item.customMessage
        })
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error;
        throw new Error(errorMessage);
    }

    return true;
};


export const getItems = async () => {
    const response = await fetch('/api/river', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}
