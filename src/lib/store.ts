import { writable } from "svelte/store";

export interface User {
    id: string,
    password: string,
    is_admin: boolean,
    permissions: number,
    theme: string,
    group: string
}

export const currentUser = writable<User | undefined>();
export const open = writable(false);

export const comboboxValue = writable('skeleton');
export const users = writable<User[]>([]);