import Image from "next/image";

export function ShopHero() {
    return (
        <section className="relative mb-8 overflow-hidden rounded-2xl bg-ink">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,460px)_1fr]">
                <div className="flex flex-col justify-center gap-4 bg-ink p-6 md:p-8">
                    <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                        <Image src="/image/logo.png" alt="" width={100} height={100} />
                    </h1>
                    <p className="text-xs text-white/60">
                        ইতাণ, যেখানে বাংলার চিরায়ত পরিধানযোগ্যতা মিশেছে প্রাত্যহিক জীবনের পরম আরামে। 'ইতাণ' নিছক কোনো পোশাকের ব্র্যান্ড নয়; এটি আমাদের শেকড় এবং বাঙালি সংস্কৃতির এক পরিধানযোগ্য গল্প, যা আধুনিক ও রুচিশীল মানুষদের কথা মাথায় রেখে তৈরি করা হয়েছে। আমরা নিয়ে এসেছি সম্পূর্ণ লিঙ্গ-নিরপেক্ষ (Unisex) এক বিশেষ "কমফোর্ট কালেকশন জোন", যা প্রথাগত সীমানা পেরিয়ে আপনার স্বাধীন চলাফেরাকে করে আরও সাবলীল এবং উদযাপন করে আমাদের ঐতিহ্যের উষ্ণতাকে।
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