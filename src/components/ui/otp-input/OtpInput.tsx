"use client";

import { useRef } from "react";
import clsx from "clsx";

export type OtpInputProps = {
    value: string;
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
    invalid?: boolean;
    length?: number;
    autoFocus?: boolean;
};

export function OtpInput({
    value,
    onChange,
    onComplete,
    invalid,
    length = 4,
    autoFocus,
}: OtpInputProps) {
    const refs = useRef<(HTMLInputElement | null)[]>([]);
    const digits = Array.from({ length }, (_, i) => value[i] ?? "");

    const setDigit = (index: number, digit: string) => {
        const next = digits.slice();
        next[index] = digit;
        const joined = next.join("").slice(0, length);
        onChange(joined);
        if (joined.length === length) onComplete?.(joined);
    };

    const handleChange = (index: number, raw: string) => {
        const digit = raw.replace(/\D/g, "").slice(-1);
        if (!digit) return;
        setDigit(index, digit);
        if (index < length - 1) refs.current[index + 1]?.focus();
    };

    const handleKey = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            if (digits[index]) setDigit(index, "");
            else if (index > 0) refs.current[index - 1]?.focus();
        }
        if (e.key === "ArrowLeft" && index > 0) refs.current[index - 1]?.focus();
        if (e.key === "ArrowRight" && index < length - 1) refs.current[index + 1]?.focus();
    };

    const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
        if (!pasted) return;
        const merged = (digits.slice(0, index).join("") + pasted).slice(0, length);
        onChange(merged);
        const focusIndex = Math.min(merged.length, length - 1);
        refs.current[focusIndex]?.focus();
        if (merged.length === length) onComplete?.(merged);
    };

    return (
        <div className="flex gap-3" role="group" aria-label="4 digit code">
            {digits.map((digit, i) => (
                <input
                    key={i}
                    ref={(el) => { refs.current[i] = el; }}
                    value={digit}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKey(i, e)}
                    onPaste={(e) => handlePaste(i, e)}
                    autoFocus={autoFocus && i === 0}
                    inputMode="numeric"
                    maxLength={1}
                    aria-label={`Digit ${i + 1}`}
                    className={clsx(
                        "w-14 h-14 rounded-xl bg-transparent text-center text-lg text-white border outline-none transition",
                        invalid ? "border-red-400" : "border-white/30 focus:border-white",
                    )}
                />
            ))}
        </div>
    );
}