import service from '@/plugins/axios';
import { BaseService } from '@/utils/api';
import { IGetProduct } from '../types';

class ExampleService extends BaseService {
    async getProducts(): Promise<IGetProduct> {
        const res = await service.get('/products.json');
        return res.data;
    }
}
export const exampleService = new ExampleService({ baseUrl: '/' }, service);
