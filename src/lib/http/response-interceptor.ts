import type { AxiosInstance } from "axios";

// Placeholder for Batch 3+ when refresh bucket is wired. Kept separate
// so the bucket files can plug in without touching other files.
export function attachResponseInterceptor(instance: AxiosInstance) {
    instance.interceptors.response.use(
        (res) => res,
        (error) => Promise.reject(error),
    );
}