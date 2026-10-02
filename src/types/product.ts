export type ProductColour =
    | "beige" | "black" | "blue" | "brown" | "burgundy"
    | "camel" | "gold" | "green" | "grey" | "navy" | "olive"
    | "orange" | "pink" | "purple" | "red" | "teal" | "white" | "yellow";

export type ProductSize =
    | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl"
    | "4xl" | "5xl" | "6xl";

export type Product = {
    id: string;
    name: string;
    description: string;
    priceBdt: number;
    image: string;
    colour: ProductColour;
    sizes: ProductSize[];
    clothing: string;
    isNew?: boolean;
};