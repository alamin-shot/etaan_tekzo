import type { AxiosInstance } from "axios";

export function attachRequestInterceptor(instance: AxiosInstance) {
    instance.interceptors.request.use((config) => {
        config.headers.set("X-Requested-With", "etan-web");
        return config;
    });
}