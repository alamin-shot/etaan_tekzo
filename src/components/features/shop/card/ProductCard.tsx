import Image from "next/image";
import { formatPrice } from "@/lib/format-price";
import { WishlistButton } from "./WishlistButton";
import { ProductActions } from "./ProductActions";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
    return (
        <article className="flex flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-sm">
            <div className="relative aspect-[4/5] bg-ink/5">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                />
                <div className="absolute right-3 top-3">
                    <WishlistButton id={product.id} />
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-widest">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-ink/60">{product.description}</p>
                </div>
                <p className="text-sm font-semibold">{formatPrice(product.priceBdt)}</p>
                <div className="mt-auto">
                    <ProductActions name={product.name} />
                </div>
            </div>
        </article>
    );
}