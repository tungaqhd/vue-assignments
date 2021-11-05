import { IProduct } from '../common/types';
export interface ICartProduct extends IProduct {
    qty: number;
}

export interface IProductQty {
    id: number;
    qty: number;
}
export interface ICartInfo {
    country: string;
    state: string;
    zipCode: string;
    shippingMethod: number;
    couponCode: string;
    products: IProductQty[];
}
