import { FilterDrawer } from "@/components/features/shop/filters";
import { SortDropdown } from "@/components/features/shop/SortDropdown";

export function ShopToolbar() {
    return (
        <div className="mb-4 flex items-center gap-3 lg:hidden">
            <div className="flex-1">
                <FilterDrawer />
            </div>
            <div className="flex-1">
                <SortDropdown />
            </div>
        </div>
    );
}