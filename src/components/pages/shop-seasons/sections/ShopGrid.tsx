import { Suspense } from "react";
import { ProductGrid } from "@/components/features/shop/grid";
import { Loader } from "@/components/shared/loader";
import type { Product } from "@/types/product";

export function ShopGrid({ products }: { products: Product[] }) {
    return (
        <Suspense fallback={<Loader variant="section" />}>
            <ProductGrid products={products} />
        </Suspense>
    );
}