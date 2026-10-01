let inflight: Promise<unknown> | null = null;

export function runSingleFlight<T>(fn: () => Promise<T>): Promise<T> {
    if (inflight) return inflight as Promise<T>;
    inflight = fn().finally(() => {
        inflight = null;
    });
    return inflight as Promise<T>;
}

export function isRefreshing() {
    return inflight !== null;
}