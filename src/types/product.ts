export type ProductColour =
    | "beige" | "black" | "blue" | "brown" | "burgundy"
    | "camel" | "gold" | "green" | "grey" | "navy" | "olive"
    | "orange" | "pink" | "purple" | "red" | "teal" | "white" | "yellow";

export type ProductSize =
    | "s-36" | "m-38" | "l-40" | "xl-42" | "xxl-44";

export type Product = {
    id: string;
    slug: string;
    name: string;
    description: string;
    longDescription: string;
    priceBdt: number;
    image: string;
    images: string[];
    colours: ProductColour[];
    sizes: ProductSize[];
    clothing: string;
    isNew?: boolean;
    rating: number;
};