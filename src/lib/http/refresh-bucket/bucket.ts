export type BucketItem = {
    retry: () => Promise<unknown>;
    resolve: (value: unknown) => void;
    reject: (reason: unknown) => void;
    enqueuedAt: number;
};

const MAX_WAIT_MS = 20000;

export class RefreshBucket {
    private items: BucketItem[] = [];

    push(item: Omit<BucketItem, "enqueuedAt">) {
        this.items.push({ ...item, enqueuedAt: Date.now() });
    }

    flush() {
        const items = [...this.items];
        this.items = [];
        items
            .filter((i) => Date.now() - i.enqueuedAt < MAX_WAIT_MS)
            .forEach((i) => i.retry().then(i.resolve, i.reject));
        items
            .filter((i) => Date.now() - i.enqueuedAt >= MAX_WAIT_MS)
            .forEach((i) => i.reject(new Error("refresh_bucket_timeout")));
    }

    rejectAll(reason: unknown) {
        this.items.forEach((i) => i.reject(reason));
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}