<template>
    <div>
        <div class="banner">
            <img :src="require('../../../assets/images/home_banner.png')" />
        </div>
        <ui-breadcrumb></ui-breadcrumb>
        <h1 class="title">MSI PS Series (20)</h1>
        <div class="home">
            <sidebar></sidebar>
            <div class="main">
                <div class="heading">
                    <span class="sort-description">Items 1-35 of 61</span>
                    <div class="pagination-select">
                        <custom-select
                            :options="sortBy"
                            label="Sort By"
                            name="sort_by"
                        ></custom-select>
                        <custom-select
                            :options="showLimit"
                            label="Show"
                            name="limit"
                        ></custom-select>
                        <img
                            class="icon"
                            :src="require('../../../assets/images/layout_1_icon.png')"
                        />
                        <img
                            class="icon"
                            :src="require('../../../assets/images/layout_2_icon.png')"
                        />
                    </div>
                </div>
                <div class="selected-tags">
                    <selected-tag label="Custom PCs" amount="24"></selected-tag>
                    <selected-tag label="Custom PCs" amount="24"></selected-tag>
                </div>
                <div class="product-list">
                    <product
                        v-for="product in productList"
                        :key="product.id"
                        :product="product"
                    ></product>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { ICustomSelect } from '../types';
import Sidebar from '../components/Sidebar.vue';
import CustomSelect from '../components/CustomSelect.vue';
import SelectedTag from '../components/SelectedTag.vue';
import Product from '../components/Product.vue';
import { productModule } from '../store';
@Options({
    components: {
        Sidebar,
        CustomSelect,
        SelectedTag,
        Product,
    },
})
export default class HomePage extends Vue {
    sortBy: ICustomSelect[] = [
        { name: 'Position', value: 'position' },
        { name: 'Price', value: 'price' },
    ];

    showLimit: ICustomSelect[] = [
        { name: '35 per page', value: 35 },
        { name: '50 per page', value: 50 },
    ];

    productList = computed(() => productModule.products);
}
</script>
<style scoped>
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
.home {
    display: flex;
    gap: 6px;
}
.sort-description {
    color: #a2a6b0;
    font-size: 13px;
}
.main {
    flex: 1 1 auto;
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
</style>