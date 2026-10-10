import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/pages/product-detail/sections/ProductDetailView";
import { PRODUCTS } from "@/mocks/products";
import { getProductBySlug } from "@/services/products/get-by-slug";

export const revalidate = 60;

export function generateStaticParams() {
    return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const result = await getProductBySlug(slug);
    if (!result.ok || !result.data) return { title: "Product not found — Etan" };
    return {
        title: `${result.data.name} — Etan`,
        description: result.data.description,
        openGraph: {
            title: result.data.name,
            description: result.data.description,
            images: [result.data.image],
        },
    };
}

export default async function ProductDetailPage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
    const { slug } = await params;
    const sp = await searchParams;

    const result = await getProductBySlug(slug);
    if (!result.ok || !result.data) notFound();

    const urlParams = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) {
        if (typeof v === "string") urlParams.set(k, v);
    }

    return <ProductDetailView product={result.data} searchParams={urlParams} />;
}