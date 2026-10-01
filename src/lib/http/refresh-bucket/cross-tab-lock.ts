export async function withRefreshLock<T>(fn: () => Promise<T>): Promise<T> {
    if (typeof navigator === "undefined" || !("locks" in navigator)) {
        return fn();
    }
    return navigator.locks.request("etan-refresh", fn);
}