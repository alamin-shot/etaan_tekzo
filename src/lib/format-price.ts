const formatter = new Intl.NumberFormat("en-BD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export function formatPrice(amount: number): string {
    return `BDT ${formatter.format(amount)}`;
}