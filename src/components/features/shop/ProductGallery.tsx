import Image from "next/image";

export function ProductGallery({
    images,
    alt,
    count = 3,
}: {
    images: string[];
    alt: string;
    count?: number;
}) {
    const visible = images.slice(0, count);

    return (
        <div className="grid grid-cols-3 gap-3 md:gap-4">
            {visible.map((src, i) => (
                <div
                    key={src}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white/5"
                >
                    <Image
                        src={src}
                        alt={`${alt} — view ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 33vw, 30vw"
                        className="object-cover"
                        priority={i === 0}
                    />
                </div>
            ))}
        </div>
    );
}