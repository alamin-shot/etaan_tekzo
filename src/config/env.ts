import "server-only";

const raw = {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_USE_MOCK: process.env.NEXT_PUBLIC_USE_MOCK,
    BACKEND_API_URL: process.env.BACKEND_API_URL,
};

function required(value: string | undefined, name: string): string {
    if (!value) throw new Error(`Missing env: ${name}`);
    return value;
}

const useMock = raw.NEXT_PUBLIC_USE_MOCK === "true";

// if (useMock && process.env.NODE_ENV === "production") {
//     throw new Error("NEXT_PUBLIC_USE_MOCK must be false in production.");
// }

export const env = {
    siteUrl: raw.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    useMock,
    backendApiUrl: useMock ? "" : required(raw.BACKEND_API_URL, "BACKEND_API_URL"),
} as const;
