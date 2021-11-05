import { getModule, VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { ICartProduct } from './types';
import { IProduct } from '../common/types';
import store from '@/store';
import { cartService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'Cart' })
class CartDetail extends VuexModule {
    productList: ICartProduct[] = [];

    @Mutation
    async setProduct(payload: ICartProduct[]) {
        this.productList = payload;
    }

    @Action
    async getProductCart() {
        const cartStorage = localStorage.getItem('cart');
        if (cartStorage && cartStorage !== 'null') {
            const cart: Record<number, number> = JSON.parse(cartStorage);
            const result = await cartService.getProductCart();
            // filter fake product
            const realProducs = result.filter((product) => {
                return product.id in cart;
            });
            const cartProducts: ICartProduct[] = realProducs.map((product: IProduct) => {
                return {
                    ...product,
                    qty: cart[product.id],
                };
            });
            this.context.commit('setProduct', cartProducts);
        }
    }
}

export const cartModule = getModule(CartDetail);
