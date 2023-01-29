export function calculatePercentage(value: number, total: number) {
    return Number(((value / total) * 100).toFixed(2));
}
