export function StepCounter({ current, total }: { current: number; total: number }) {
    return (
        <p className="mt-6 text-[11px] uppercase tracking-widest text-white/60">
            Steps {current}/{total} completed
        </p>
    );
}