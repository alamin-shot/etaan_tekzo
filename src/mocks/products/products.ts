import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
    {
        id: "hw-1",
        slug: "haowaimithai",
        name: "হাওয়াইমিঠাঁই",
        description: "হালকা, আরামদায়ক, দেশীয় বুননের ছোঁয়া।",
        longDescription:
            "হাওয়াইমিঠাঁই — হালকা, আরামদায়ক এবং দেশীয় বুননের ছোঁয়ায় তৈরি একটি পোশাক। বাংলার ঐতিহ্যবাহী তাঁতের সূক্ষ্ম বুনন আর আধুনিক ডিজাইনের মেলবন্ধনে তৈরি এই পোশাকটি যেকোনো অনুষ্ঠানে আপনাকে দেবে অনন্য আভিজাত্য। প্রতিদিনের ব্যবহার থেকে বিশেষ অনুষ্ঠান — সবখানেই মানানসই।",
        priceBdt: 1650,
        image: "/image/product/p-main.jpeg",
        images: [
            "/image/product/p-main.jpeg",
            "/image/product/p-2.jpeg",
            "/image/product/p-3.jpeg",
            "/image/product/p-4.jpeg",
        ],
        colours: ["white", "pink"],
        sizes: ["s-36", "m-38", "l-40", "xl-42", "xxl-44"],
        clothing: "casual-shirts",
        isNew: true,
        rating: 4.5,
    },
];