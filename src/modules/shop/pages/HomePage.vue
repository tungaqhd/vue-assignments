<template>
    <div class="shop">
        <div class="banner">
            <img :src="require('../../../assets/images/home_banner.png')" />
        </div>
        <ui-breadcrumb :items="breadcrumb" />
        <h1 class="title">MSI PS Series (20)</h1>
        <el-row :gutter="5">
            <el-col :xs="24" :sm="6" :md="6" :lg="4" :xl="4">
                <sidebar></sidebar>
            </el-col>
            <el-col :xs="24" :sm="18" :md="18" :lg="20" :xl="20">
                <div class="heading">
                    <span class="sort-description"
                        >Items {{ itemStartIndex }}-{{ itemEndIndex }} of
                        {{ totalProduct }}</span
                    >
                    <div class="pagination-select">
                        <custom-select
                            :options="sortByOptions"
                            label="Sort By"
                            name="sort_by"
                            v-model="sortBy"
                        ></custom-select>

                        <custom-select
                            :options="showLimit"
                            label="Show"
                            name="limit"
                            v-model.number="pageLimit"
                        ></custom-select>
                        <div class="layout-select">
                            <svg
                                @click="changeDisplayMode('grid')"
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="32"
                                    height="32"
                                    transform="translate(0 0.404541)"
                                    fill="white"
                                />
                                <rect
                                    x="6.40039"
                                    y="6.80469"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="6.40039"
                                    y="14.1189"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="6.40039"
                                    y="21.4331"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="13.7139"
                                    y="14.1189"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="13.7139"
                                    y="21.4331"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="13.7139"
                                    y="6.80469"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="21.0283"
                                    y="14.1189"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="21.0283"
                                    y="21.4331"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="21.0283"
                                    y="6.80469"
                                    width="4.57143"
                                    height="4.57143"
                                    fill="#A2A6B0"
                                />
                            </svg>

                            <svg
                                @click="changeDisplayMode('list')"
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="32" height="32" fill="white" />
                                <rect
                                    x="4.57129"
                                    y="21.0286"
                                    width="9.14286"
                                    height="2.74286"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="4.57129"
                                    y="8.22858"
                                    width="21.9429"
                                    height="2.74286"
                                    fill="#A2A6B0"
                                />
                                <rect
                                    x="4.57129"
                                    y="14.6286"
                                    width="16.4571"
                                    height="2.74286"
                                    fill="#A2A6B0"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="selected-tags">
                    <selected-tag
                        v-for="category in selectedCategoryList"
                        :key="category.id"
                        :label="category.name"
                        :amount="category.amount"
                        :id="category.id"
                    ></selected-tag>
                    <button
                        v-if="selectedCategoryList.length > 0"
                        class="clear-button"
                        @click="resetSelectCategoryList"
                    >
                        Clear All
                    </button>
                </div>
                <div class="product-list" v-if="displayMode === 'list'">
                    <product-card
                        v-for="product in productList"
                        :key="product.id"
                        :product="product"
                    ></product-card>
                </div>
                <el-row v-else>
                    <el-col
                        :xs="24"
                        :sm="8"
                        :md="6"
                        :lg="4"
                        class="product"
                        v-for="product in productList"
                        :key="product.id"
                    >
                        <product-card-grid :product="product"></product-card-grid
                    ></el-col>
                </el-row>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="totalProduct"
                    :small="true"
                    :page-size="pageLimit"
                    :current-page="currentPage"
                    @current-change="updateCurrentPage"
                >
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Watch } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';
import { ICategory, ICustomSelect, IProduct, SortBy } from '../types';
import Sidebar from '../components/Sidebar.vue';
import CustomSelect from '../components/CustomSelect.vue';
import SelectedTag from '../components/SelectedTag.vue';
import ProductCard from '../components/ProductCard.vue';
import ProductCardGrid from '../components/ProductCardGrid.vue';
import { productModule } from '../store';
@Options({
    components: {
        Sidebar,
        CustomSelect,
        SelectedTag,
        ProductCard,
        ProductCardGrid,
    },
})
export default class HomePage extends Vue {
    displayMode = 'grid';

    breadcrumb: string[] = [
        'Home',
        'Laptops',
        'Everyday Use Notebooks',
        'MSI Prestige Series',
    ];

    sortByOptions: ICustomSelect[] = [
        { name: 'Position', value: 'id' },
        { name: 'Price', value: 'price' },
    ];

    sortBy: SortBy = 'id';

    showLimit: ICustomSelect[] = [
        { name: '1 per page', value: 1 },
        { name: '2 per page', value: 2 },
        { name: '4 per page', value: 4 },
        { name: '8 per page', value: 8 },
    ];

    pageLimit = 8;

    currentPage = 1;

    get totalProduct(): number {
        return this.filteredProductList.length;
    }

    get productList(): IProduct[] {
        return [...this.filteredProductList].splice(
            (this.currentPage - 1) * this.pageLimit,
            this.pageLimit,
        );
    }

    get filteredProductList(): IProduct[] {
        let prdList: IProduct[] = productModule.products.filter((product) => {
            if (productModule.selectedColor.length > 0) {
                if (product.color !== productModule.selectedColor) {
                    return false;
                }
            }
            if (productModule.searchContent.length > 0) {
                if (
                    !product.title.includes(productModule.searchContent) &&
                    !product.description.includes(productModule.searchContent)
                ) {
                    return false;
                }
            }
            if (productModule.selectedCategories.length > 0) {
                if (!productModule.selectedCategories.includes(product.catId)) {
                    return false;
                }
            }
            if (
                productModule.priceFilter.minPrice !== 0 &&
                productModule.priceFilter.maxPrice !== 0
            ) {
                if (
                    product.price < productModule.priceFilter.minPrice ||
                    product.price > productModule.priceFilter.maxPrice
                ) {
                    return false;
                }
            }
            return true;
        });
        if (productModule.sortBy !== '') {
            prdList = prdList.sort((a: IProduct, b: IProduct): number => {
                if (this.sortBy === 'id') {
                    return b.id - a.id;
                } else {
                    return a.discountedPrice - b.discountedPrice;
                }
            });
        }
        return prdList;
    }

    @Watch('sortBy')
    updateSortBy(): void {
        productModule.setSortBy(this.sortBy);
    }

    @Watch('pageLimit')
    updatePageLimit(): void {
        productModule.setPageLimit(this.pageLimit);
    }

    get selectedCategoryList(): ICategory[] {
        return productModule.categoryList.filter(
            (category) => productModule.selectedCategories.indexOf(category.id) >= 0,
        );
    }

    get itemStartIndex(): number {
        return (this.currentPage - 1) * this.pageLimit + 1;
    }

    get itemEndIndex(): number {
        return Math.min(this.itemStartIndex + this.pageLimit - 1, this.totalProduct);
    }

    changeDisplayMode(mode: string): void {
        this.displayMode = mode;
    }

    resetSelectCategoryList(): void {
        productModule.resetSelectCategory();
    }

    updateCurrentPage(page: number): void {
        this.currentPage = page;
    }

    created(): void {
        productModule.getProducts();
    }
}
</script>
<style scoped>
.shop {
    max-width: 1400px;
    margin: 0 auto;
}
.banner {
    text-align: center;
    max-width: 100%;
}
.title {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
}
.sort-description {
    color: #a2a6b0;
    font-size: 13px;
}
.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pagination-select {
    display: flex;
    gap: 11px;
    align-items: center;
}

.icon {
    width: 32px;
    height: 32px;
}
.selected-tags {
    display: flex;
    gap: 6px;
}
.product-list {
    margin-top: 21px;
}
.product {
    min-width: 20% !important;
}
.clear-button {
    padding: 9px 15px;
    border: 1px solid #cacdd8;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 13px;

    display: flex;
    gap: 5px;
    align-items: center;
    background: inherit;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}
.layout-select > svg {
    cursor: pointer;
}
@media only screen and (max-width: 600px) {
    .heading {
        flex-direction: column;
    }
}
@media only screen and (max-width: 468px) {
    .pagination-select {
        flex-direction: column;
    }
}
</style>
<style>
.el-pagination {
    margin-bottom: 20px;
    text-align: center;
    max-width: 100%;
}
.number,
.el-pagination > button {
    border: 2px solid #a2a6b0 !important;
    box-sizing: border-box !important;
    border-radius: 50px !important;
    background-color: #ffffff !important;
    color: #a2a6b0 !important;

    /* display: flex !important;
    justify-content: center !important;
    align-items: center !important; */
}
.active {
    color: #000000 !important;
    border: none !important;
    background-color: #f5f7ff !important;
}
.more {
    background-color: #ffffff !important;
}
.banner > img {
    width: 100%;
    height: auto;
}
</style>
