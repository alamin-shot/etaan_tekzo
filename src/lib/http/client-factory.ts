import axios, { type AxiosInstance } from "axios";

export function createClient(baseURL: string, withCredentials = true): AxiosInstance {
    return axios.create({
        baseURL,
        withCredentials,
        timeout: 15000,
        headers: { "Content-Type": "application/json" },
    });
}