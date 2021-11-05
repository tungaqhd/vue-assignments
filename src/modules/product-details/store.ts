import { getModule, VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { IProduct } from '../shop/types';
import store from '@/store';
import { productService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'ProductDetail' })
class ProductDetail extends VuexModule {
    productDetail: IProduct = {
        id: 0,
        image: '',
        rate: 0,
        reviewCount: 0,
        model: '',
        title: '',
        price: 0,
        discountedPrice: 0,
        cpu: '',
        featured: '',
        ports: '',
        inStock: true,
        color: '',
        catId: 0,
        features: [],
        description: '',
    };

    selectedColor = '';

    @Mutation
    async setProduct(payload: IProduct) {
        this.productDetail = { ...payload };
    }

    @Action
    async getProduct(payload: number) {
        const result = await productService.getProduct(payload);
        this.context.commit('setProduct', result);
    }
}

export const productDetailModule = getModule(ProductDetail);
