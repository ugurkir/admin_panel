import type { User } from "./store"
const apiUrl = "https://localdev.mugsoft.io/api";

const getUrl = (p: string) => `${apiUrl}${p}`

const put = async (path: string, params?: Record<string, any>) =>
    fetch(getUrl(path), { method: "PUT", credentials: "include", ...params }).then(d => d.json())

const dlt = async (path: string, params?: Record<string, any>) =>
    fetch(getUrl(path), { method: "DELETE", credentials: "include", ...params }).then(d => d.json())

const get = async (path: string, params?: Record<string, any>) =>
    fetch(getUrl(path), { method: "GET", credentials: "include", ...params }).then(d => d.json())

const post = async (path: string, params?: Record<string, any>) =>
    fetch(getUrl(path), { method: "POST", credentials: "include", ...params }).then(d => d.json())


export interface ApiError {
    error?: string
}

export const addUsers = (User: User): ApiResponse<User[]> =>
    post(`/users`, {
        headers: {
            accept: 'application/json; charset=utf-8',
            ContentType: 'application/x-www-form-urlencoded'
        },
        body: `id=${User.id}&group=${User.group}&password=${User.password}&is_admin=${User.is_admin}&theme=${User.theme}&permissions=${User.permissions}`
    })

export type ApiResponse<T> = Promise<T & ApiError>

export const login = (username: string, password: string): ApiResponse<User> =>
    post(`/users/login`, {
        headers: {
            accept: "application/json; charset=utf-8",
            Authorization: `Basic ${btoa(`${username}:${password}`)}`
        },
    })


export const listUsers = (): ApiResponse<User[]> =>
    get(`/users`)


export const delUser = (id: string): ApiResponse<any> =>
    dlt(`/users/${id}`)