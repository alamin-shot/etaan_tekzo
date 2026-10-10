import { FilterPanel } from "@/components/features/shop/filters";
import { SortDropdown } from "@/components/features/shop/SortDropdown";

export function ShopSidebar() {
    return (
        <aside className="hidden lg:block w-[260px] shrink-0 space-y-4">
            <SortDropdown />
            <FilterPanel />
        </aside>
    );
}