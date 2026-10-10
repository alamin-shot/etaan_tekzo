import { formatPrice } from "@/lib/format-price";
import type { Product } from "@/types/product";

export function DetailInfo({ product }: { product: Product }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                {product.name}
            </h1>
            <p className="text-sm text-white/70">{product.longDescription}</p>
            <p className="text-2xl font-semibold">{formatPrice(product.priceBdt)}</p>
            <div className="flex items-center gap-2 text-sm">
                <span className="text-brand">★</span>
                <span>{product.rating.toFixed(1)}</span>
            </div>
        </div>
    );
}