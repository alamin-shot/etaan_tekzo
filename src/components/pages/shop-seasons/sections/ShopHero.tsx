import Image from "next/image";

export function ShopHero() {
    return (
        <section className="relative mb-8 overflow-hidden rounded-2xl bg-ink">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr]">
                <div className="flex flex-col justify-center gap-4 bg-ink p-6 md:p-8">
                    <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                        Lorem Ipsum
                    </h1>
                    <p className="text-xs text-white/60">
                        In This Style Profile We Ask For Your Preferences On Brands, Item Types And Colours
                        To Help Us Learn More About You And Your Individual Style.
                    </p>
                </div>
                <div className="relative h-56 md:h-72">
                    <Image
                        src="/image/product/p1.png"
                        alt="Shop seasons hero"
                        fill
                        sizes="(max-width: 768px) 100vw, 70vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}