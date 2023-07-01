import type {CartItem} from "$lib/models/river";
import type {User} from "$lib/models/user";

export const buyItem = async (item: CartItem, user: User) => {
    // POST /api/river
    try {
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
        return response.ok;
    } catch (e) {
        return false;
    }

}