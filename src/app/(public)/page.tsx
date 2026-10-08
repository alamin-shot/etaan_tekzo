export const revalidate = 30;

import { ShopHero, ShopSidebar, ShopToolbar, ShopGrid } from "@/components/pages/shop-seasons/sections";
import { listProducts } from "@/services/products/list";


export default async function ShopSeasonsPage() {
    const result = await listProducts();
    const products = result.ok ? result.data : [];

    return (
        <>
            <ShopHero />
            <div className="flex gap-6">
                <ShopSidebar />
                <div className="min-w-0 flex-1">
                    <ShopToolbar />
                    <ShopGrid products={products} />
                </div>
            </div>
        </>
    );
}