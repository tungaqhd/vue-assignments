import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import {IProduct, ICategory,IPriceFilter} from './types'
import store from '@/store';
import { exampleService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'Products' })
class Product extends VuexModule {
    count = 0;

    @Mutation
    INCREMENT() {
        this.count++;
    }

    @Mutation
    DECREMENT() {
        this.count--;
    }

    @Action
    incrementAfterTime(payload: number) {
        const delay = payload;

        return new Promise<void>((resolve) => {
            window.setTimeout(() => {
                this.INCREMENT();
                resolve();
            }, delay);
        });
    }

    @Action
    getUser() {
        exampleService.getList({}).then((response) => {
            console.log('reponse', response);
        });
    }

    products: IProduct[] = [
        {
            id: 1,
            image: 'laptop_1.png',
            reviews: 4,
            reviewCount: 4,
            model: 'SKU D5515AI',
            title: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            price: 499.00,
            discountedPrice: 499.00,
            cpu: '',
            featured: '',
            ports: '',
            inStock: true,
            color: 'black'
        },
        {
            id: 2,
            image: 'laptop_2.png',
            reviews: 4,
            reviewCount: 4,
            model: 'SKU D5515AI',
            title: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            price: 499.00,
            discountedPrice: 499.00,
            cpu: '',
            featured: '',
            ports: '',
            inStock: true,
            color: 'red'
        },
        {
            id: 3,
            image: 'laptop_3.png',
            reviews: 4,
            reviewCount: 4,
            model: 'SKU D5515AI',
            title: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            price: 499.00,
            discountedPrice: 499.00,
            cpu: '',
            featured: '',
            ports: '',
            inStock: true,
            color: 'black'
        },
        {
            id: 4,
            image: 'laptop_4.png',
            reviews: 4,
            reviewCount: 4,
            model: 'SKU D5515AI',
            title: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            price: 499.00,
            discountedPrice: 499.00,
            cpu: '',
            featured: '',
            ports: '',
            inStock: true,
            color: 'red'
        }
    ]

    categoryList: ICategory[] = [
        {
            id: 1,
            name: 'Custom PCs',
            amount: 15
        },
        {
            id: 2,
            name: 'MSI All-In-One PCs',
            amount: 45
        },
        {
            id: 1,
            name: 'HP/Compag PCs',
            amount: 1
        },
    ]

    priceFilter: IPriceFilter = {
        min: 0,
        max: 0
    }
}

export const productModule = getModule(Product);
