import { getModule, VuexModule, Mutation, Module, Action } from 'vuex-module-decorators';
import { IProduct, ICategory, IPriceFilter, IGetProduct } from './types';
import store from '@/store';
import { exampleService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'Products' })
class Product extends VuexModule {
    @Mutation
    setPriceRange(priceRange: IPriceFilter) {
        this.priceFilter = {
            minPrice: priceRange.minPrice,
            maxPrice: priceRange.maxPrice,
        };
    }

    @Mutation
    setSelectedCategory(categories: number[]) {
        this.selectedCategories = categories;
    }

    @Mutation
    addSelectedCategory(categoryId: number) {
        this.selectedCategories.push(categoryId);
    }

    @Mutation
    unSelectCategory(categoryId: number) {
        this.selectedCategories = this.selectedCategories.filter(
            (id) => id !== categoryId,
        );
    }

    @Mutation
    resetSelectCategory() {
        this.selectedCategories = [];
    }

    @Mutation
    setSearchContent(content: string) {
        this.searchContent = content;
    }

    @Mutation
    setSelectedColor(color: string) {
        this.selectedColor = color;
    }

    @Mutation
    clearFilter() {
        this.searchContent = '';
        this.selectedColor = '';
        this.selectedCategories = [];
        this.priceFilter = { minPrice: 0, maxPrice: 0 };
    }

    @Mutation
    increaseCartCount(amount = 1) {
        this.cartCount += amount;
    }

    @Mutation
    setCartCount(payload: number) {
        this.cartCount = payload;
    }

    @Mutation
    setSortBy(payload: string) {
        this.sortBy = payload;
    }

    @Mutation
    setPageLimit(payload: number) {
        this.pageLimit = payload;
    }

    @Mutation
    setProduct(payload: IProduct[]) {
        this.products = payload;
    }

    @Mutation
    setCategory(payload: ICategory[]) {
        this.categoryList = payload;
    }

    @Mutation
    setTotalProduct(payload: number) {
        this.totalProduct = payload;
    }

    @Action
    async getProducts() {
        const result: IGetProduct = await exampleService.getProducts();
        this.context.commit('setProduct', result.products);
        this.context.commit('setCategory', result.categories);
        this.context.commit('setTotalProduct', result.totalProduct);
    }

    sortBy = 'position';

    pageLimit = 35;

    searchContent = '';

    selectedCategories: number[] = [];

    cartCount = 0;

    products: IProduct[] = [];

    categoryList: ICategory[] = [];

    priceFilter: IPriceFilter = {
        minPrice: 0,
        maxPrice: 0,
    };

    totalProduct = 0;

    selectedColor = '';
}

export const productModule = getModule(Product);
