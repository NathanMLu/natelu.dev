import {writable} from "svelte/store";
import type {User} from "$lib/models/user";

export const user = writable<User>({
    name: '',
    points: 0,
    sessionId: ''
});