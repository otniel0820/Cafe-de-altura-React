export const fixed = (num) => {
    return Number.parseFloat(num)
    .toFixed(2)
    .replace(".", ",")
}



