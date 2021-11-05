export interface IDataSelect {
    name: string;
    amount: number;
    type: 'category' | 'price';
    min?: number;
    max?: number;
    id?: number;
}

export interface IPriceSelect {
    name: string;
    amount: number;
    min: number;
    max: number;
}

export interface ICustomSelect {
    name: string;
    value: string | number;
}

export interface IProduct {
    id: number;
    image: string;
    rate: number;
    reviewCount: number;
    model: string;
    title: string;
    price: number;
    discountedPrice: number;
    cpu: string;
    featured: string;
    ports: string;
    inStock: boolean;
    color: string;
    catId: number;
    features: string[];
    description: string;
}

export interface ICategory {
    id: number;
    name: string;
    amount: number;
}

export interface IPriceFilter {
    minPrice: number;
    maxPrice: number;
}

export interface IColorRadio {
    name: string;
    code: string;
}

export type SortBy = 'id' | 'price' | '';

export interface IGetProduct {
    products: IProduct[];
    categories: ICategory[];
    totalProduct: number;
}

export type ISelectValue = number | string;
