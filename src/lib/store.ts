import { writable } from "svelte/store";

interface User {
    id: string;
}

export const currentUser = writable<User | undefined>();