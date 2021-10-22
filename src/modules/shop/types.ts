export interface IDataSelect {
    name: string
    amount: number
    type: 'category' | 'price'
    min?:number
    max?:number
    catId?:number
}

export interface ICustomSelect {
    name: string,
    value: string | number
}

export interface IProduct {
    id: number,
    image: string,
    reviews: number,
    reviewCount: number,
    model: string,
    title: string,
    price: number,
    discountedPrice: number,
    cpu: string,
    featured: string,
    ports: string,
    inStock: boolean,
    color: string
}

export interface ICategory {
    id: number,
    name: string,
    amount: number
}

export interface IPriceFilter {
    min: number,
    max: number
}