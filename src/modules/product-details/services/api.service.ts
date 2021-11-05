import service from '@/plugins/axios';
import { BaseService } from '@/utils/api';
import { IProduct } from '../../common/types';
class ProductService extends BaseService {
    async getProduct(id: number): Promise<IProduct> {
        const res = await service.get(`/product_${id}.json`);
        return res.data;
    }
}
export const productService = new ProductService({ baseUrl: '/' }, service);
