export default function getPriceAfterSale(price: number, sale: number) {
    return price - ((price / 100) * sale)
}
