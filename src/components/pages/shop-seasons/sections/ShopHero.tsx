import Image from "next/image";

export function ShopHero() {
    return (
        <section className="relative mb-8 overflow-hidden rounded-2xl bg-ink">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,460px)_1fr]">
                <div className="flex flex-col justify-center items-center gap-4 bg-ink p-6 md:p-8 text-center">
                    <h1>
                        <Image src="/image/logo.png" alt="" width={100} height={100} />
                    </h1>
                    <p className="text-xs text-white/60 ">
                        বাংলার আভিজাত্য আর দিনভর আরামের এক নিখুঁত মেলবন্ধন — 'ইতাণ'। নারী-পুরুষের প্রথাগত সীমানা পেরিয়ে আমরা তৈরি করেছি এমন এক "কমফোর্ট জোন", যেখানে শ্বাস নেয় নিখাদ বাঙালিয়ানা।
                        দেশীয় কারিগরদের নিপুণ বুননে তৈরি নজরকাড়া প্রতিটি পোশাকই যেন বাংলার এক অদেখা রূপ।
                        <br />
                        <br />
                        - ইতাণ গায়ে জড়ান শেকড়ের গল্প!
                    </p>
                </div>
                <div className="relative h-56 md:h-72">
                    <Image
                        src="/image/product/p.png"
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