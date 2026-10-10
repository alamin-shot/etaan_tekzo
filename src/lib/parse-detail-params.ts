import type { ProductColour, ProductSize } from "@/types/product";

export type DetailParams = {
    size: ProductSize | null;
    colour: ProductColour | null;
};

const SIZES: ProductSize[] = ["s-36", "m-38", "l-40", "xl-42", "xxl-44"];
const COLOURS: ProductColour[] = [
    "beige", "black", "blue", "brown", "burgundy", "camel",
    "gold", "green", "olive", "pink", "white",
];

export function parseDetailParams(sp: URLSearchParams): DetailParams {
    const size = sp.get("size") as ProductSize | null;
    const colour = sp.get("colour") as ProductColour | null;
    return {
        size: size && SIZES.includes(size) ? size : null,
        colour: colour && COLOURS.includes(colour) ? colour : null,
    };
}