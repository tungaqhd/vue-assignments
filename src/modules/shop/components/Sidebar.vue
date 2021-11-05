<template>
    <div class="sidebar">
        <h5 class="title">Filters</h5>
        <div class="center-btn">
            <el-button
                class="btn"
                :class="{
                    'btn-reset': filterCount === 0,
                    'btn-primary': filterCount > 0,
                }"
                @click="clearFilter"
                round
                >Clear Filter</el-button
            >
        </div>

        <el-collapse v-model="openTabs">
            <el-collapse-item title="Category" name="1">
                <filter-category
                    @onChange="updateSelectedCategory"
                    :selectedCategories="selectedCategories"
                />
            </el-collapse-item>
            <el-collapse-item title="Price" name="2">
                <filter-price
                    @onChange="updateSelectedPrice"
                    :priceFilter="priceFilter"
                />
            </el-collapse-item>
            <el-collapse-item title="Color" name="3">
                <div class="colors">
                    <ui-color-radio
                        name="color"
                        value="#000000"
                        v-model="selectedColor"
                    />
                    <ui-color-radio
                        name="color"
                        value="#DB0000"
                        v-model="selectedColor"
                    />
                </div>
            </el-collapse-item>
            <el-collapse-item title="Filter Name" name="4">
                <ul class="filter-name">
                    <li v-if="selectedCategories.length > 0">Category</li>
                    <li v-if="priceFilter.minPrice !== 0 || priceFilter.maxPrice !== 0">
                        Price
                    </li>
                    <li v-if="selectedColor !== ''">Color</li>
                </ul>
            </el-collapse-item>
        </el-collapse>
        <el-button class="btn btn-primary center-btn" @click="applyFilter"
            >Apply Filter ({{ filterCount }})</el-button
        >
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ICategory, IPriceFilter, IPriceSelect } from '../types';
import { productModule } from '../store';
import { Watch } from 'vue-property-decorator';

import FilterPrice from './FilterPrice.vue';
import FilterCategory from './FilterCategory.vue';

@Options({
    components: { FilterPrice, FilterCategory },
})
export default class Sidebar extends Vue {
    openTabs = ['1', '2', '3', '4'];
    selectedColor = '';
    priceFilter: IPriceFilter = { minPrice: 0, maxPrice: 0 };
    selectedCategories: number[] = [];

    filterCount = 0;

    @Watch('selectedColor')
    checkColor(): void {
        this.checkCounter();
    }

    @Watch('selectedCategories', { immediate: true, deep: true })
    checkCategory(): void {
        this.checkCounter();
    }

    @Watch('priceFilter', { immediate: true, deep: true })
    checkPrice(): void {
        this.checkCounter();
    }

    checkCounter(): void {
        this.filterCount = 0;
        if (this.selectedCategories.length > 0) {
            this.filterCount++;
        }
        if (this.selectedColor.length > 0) {
            this.filterCount++;
        }
        if (this.priceFilter.maxPrice > 0 || this.priceFilter.minPrice > 0) {
            this.filterCount++;
        }
    }

    updateSelectedCategory(selected: ICategory): void {
        this.selectedCategories.push(selected.id);
    }

    updateSelectedPrice(selected: IPriceSelect): void {
        const minPrice = selected.min;
        const maxPrice = selected.max;
        this.priceFilter = { minPrice, maxPrice };
    }

    clearFilter(): void {
        productModule.clearFilter();

        this.selectedCategories = [];
        this.priceFilter = { minPrice: 0, maxPrice: 0 };
        this.selectedColor = '';
    }

    applyFilter(): void {
        productModule.setSelectedCategory([...this.selectedCategories]);
        productModule.setPriceRange(this.priceFilter);
        productModule.setSelectedColor(this.selectedColor);
    }
}
</script>

<style scoped>
.sidebar {
    background: #f5f7ff;
    padding: 16px;
}
.title {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
}
.center-btn {
    margin: 0 auto;
}
.colors {
    display: flex;
    gap: 5px;
}
.filter-name {
    list-style: none;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    line-height: 27.3px;
}

.center-btn {
    display: flex;
    justify-content: center;
}
.btn-primary {
    background: #0156ff !important;
    color: #ffffff !important;
}
.btn-reset {
    border: 2px solid #a2a6b0 !important;
    color: #a2a6b0 !important;
    font-weight: 600 !important;
}
.btn {
    display: flex;
    align-items: center;
    padding: 8px 26px;
    gap: 10px;
    padding: 8px 15px !important;

    border: 2px solid #0156ff;
    border-radius: 50px;
    background: #ffffff;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #0156ff;
    font-family: 'Poppins', sans-serif;
}
</style>
<style>
.sidebar .el-collapse-item__header {
    border-bottom: none !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    text-align: center;
    background-color: #f5f7ff !important;
}
.el-collapse {
    border-top: none !important;
    background-color: #f5f7ff !important;
}
.el-collapse-item__wrap {
    background-color: #f5f7ff !important;
    border-bottom: none !important;
}
</style>
