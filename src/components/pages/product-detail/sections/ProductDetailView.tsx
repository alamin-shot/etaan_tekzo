import { Suspense } from "react";
import Image from "next/image";
import { Breadcrumb } from "@/components/features/shop/Breadcrumb";
import { ProductGallery } from "@/components/features/shop/ProductGallery";
import { SizeSelector } from "@/components/features/shop/SizeSelector";
import { ColourSelector } from "@/components/features/shop/ColourSelector";
import { DetailActions } from "@/components/features/shop/DetailActions";
import { Loader } from "@/components/shared/loader";
import { formatPrice } from "@/lib/format-price";
import { parseDetailParams } from "@/lib/parse-detail-params";
import type { Product } from "@/types/product";
import { WishlistButton } from "@/components/features/shop/card";

export function ProductDetailView({
    product,
    searchParams,
}: {
    product: Product;
    searchParams: URLSearchParams;
}) {
    const { size, colour } = parseDetailParams(searchParams);
    const bottomImage = product.images[3] ?? product.images[0];

    return (
        <div className="flex flex-col gap-12">
            <Breadcrumb productName={product.name} />

            {/* Section 1 — 3 images in a row */}
            <ProductGallery images={product.images} alt={product.name} count={3} />

            {/* Section 2 — info left, long description right */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,420px)_1fr]">
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                            {product.name}
                        </h1>
                        <p className="mt-2 text-sm text-white/70">{product.description}</p>
                    </div>

                    <Suspense fallback={<Loader variant="inline" />}>
                        <SizeSelector sizes={product.sizes} selected={size} />
                    </Suspense>

                    <Suspense fallback={<Loader variant="inline" />}>
                        <ColourSelector colours={product.colours} selected={colour} />
                    </Suspense>
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                    {product.longDescription}
                </p>
            </div>

            {/* Section 3 — one image left, price/review/actions right */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,420px)_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/5">
                    <Image
                        src={bottomImage}
                        alt={`${product.name} — detail`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col justify-end gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-widest text-white/60">
                            Price:
                        </p>
                        <p className="mt-1 text-3xl font-semibold">
                            {formatPrice(product.priceBdt)}
                        </p>
                    </div>

                    <div>
                        <p className="text-[11px] uppercase tracking-widest text-white/60">
                            Review:
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-lg">
                            <span className="text-brand">★</span>
                            {product.rating.toFixed(1)}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex-1">
                            <DetailActions productName={product.name} />
                        </div>
                        <WishlistButton id={product.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}