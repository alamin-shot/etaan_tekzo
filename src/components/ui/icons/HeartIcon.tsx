export function HeartIcon({ filled, className }: { filled?: boolean; className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill={filled ? "#ef4444" : "none"}
            stroke={filled ? "#ef4444" : "currentColor"}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden
        >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
    );
}