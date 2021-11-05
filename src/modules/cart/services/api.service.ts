import service from '@/plugins/axios';
import { BaseService } from '@/utils/api';
import { IProduct } from '../../common/types';
import { ICartInfo } from '../types';
class CartService extends BaseService {
    async getProductCart(): Promise<IProduct[]> {
        const res = await service.get('/cart.json');
        return res.data;
    }

    async processCheckout(cartInfo: ICartInfo): Promise<IProduct[]> {
        const res = await service.post('/cart.json', cartInfo);
        return res.data;
    }
}
export const cartService = new CartService({ baseUrl: '/' }, service);
