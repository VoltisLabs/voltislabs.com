export function numberFormat(number: number | string) {
    const convertedNumber: number = Number(number)

    const stringNumber = String(number)
    return stringNumber.length > 0 ? new Intl.NumberFormat("en-US").format(convertedNumber) : stringNumber
}