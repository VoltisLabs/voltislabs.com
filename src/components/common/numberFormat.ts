export function numberFormat(number: number | string) {
    let convertedNumber: number = Number(number)
    convertedNumber: number = convertedNumber.toFixed(2)
    const stringNumber = String(number)
    return stringNumber.length > 0 ? new Intl.NumberFormat("en-US").format(convertedNumber) : stringNumber
}