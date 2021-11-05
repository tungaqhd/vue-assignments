export interface ISelect {
    label: string,
    value: string | number
}
export interface IProduct {
    image: string,
    title: string,
    price: number,
    description: string,
    rate: number,
    discount?: number,
    coolDeal?: boolean
}
export interface ITab {
    title: string, isActive: boolean
}