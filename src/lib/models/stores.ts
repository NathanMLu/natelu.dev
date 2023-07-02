import {writable} from "svelte/store";
import type {User} from "$lib/models/user";
import type {Toast} from "$lib/models/toast";

export const user = writable<User>({
    name: '',
    points: 0,
    sessionId: ''
});

export const toast = writable<Toast>({
    heading: '',
    message: '',
    show: false
});

export const loading = writable<boolean>(false);
