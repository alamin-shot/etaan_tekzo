export const CLOTHING_OPTIONS = [
    { value: "all", label: "All" },
    { value: "blazers", label: "Blazers" },
    { value: "cashmere", label: "Cashmere" },
    { value: "casual-shirts", label: "Casual Shirts" },
    { value: "coats-and-jackets", label: "Coats and Jackets" },
    { value: "corduroy", label: "Corduroy" },
    { value: "denim", label: "Denim" },
    { value: "formal-shirts", label: "Formal Shirts" },
] as const;

export const COLOUR_OPTIONS = [
    { value: "all", label: "All", hex: null },
    { value: "beige", label: "Beige", hex: "#e8d8b8" },
    { value: "black", label: "Black", hex: "#0a0a0a" },
    { value: "blue", label: "Blue", hex: "#2b4a8b" },
    { value: "brown", label: "Brown", hex: "#5a3a1e" },
    { value: "burgundy", label: "Burgundy", hex: "#6e1226" },
    { value: "camel", label: "Camel", hex: "#c19a6b" },
    { value: "gold", label: "Gold", hex: "#c9a227" },
    { value: "green", label: "Green", hex: "#2f5d3a" },
] as const;

export const SIZE_OPTIONS = [
    { value: "all", label: "All" },
    { value: "s-36", label: "S-36" },
    { value: "m-38", label: "M-38" },
    { value: "l-40", label: "L-40" },
    { value: "xl-42", label: "XL-42" },
    { value: "xxl-44", label: "XXL-44" },
] as const;