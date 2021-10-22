<template>
    <main class="main">
        <div class="header">
            <div class="criteria">
                <base-select name="sortby" :options="sortByOptions"></base-select>
                <base-select name="condition" :options="conditionOptions"></base-select>
                <base-select name="delivery" :options="deliveryOptions"></base-select>
            </div>
            <div class="select-tab">
                <base-tab-group>
                    <base-tab
                        v-for="tab in tabs"
                        :isActive="tab.isActive"
                        :key="tab.title"
                        >{{ tab.title }}</base-tab
                    >
                </base-tab-group>
                <base-tab-group>
                    <base-tab :isActive="false"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style="width: 14px"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            /></svg
                    ></base-tab>
                    <base-tab :isActive="true"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style="width: 14px"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                            /></svg
                    ></base-tab>
                </base-tab-group>
            </div>
        </div>
        <div class="tags">
            <span class="tag-title">Related</span>
            <base-badge v-for="tag in tags" :key="tag" :title="tag"></base-badge>
        </div>
        <div class="products">
            <product-card
                v-for="product in products"
                :key="product.title"
                :image="product.image"
                :title="product.title"
                :description="product.description"
                :price="product.price"
                :rate="product.rate"
                :discount="product.discount"
                :cooldeal="product.coolDeal"
            ></product-card>
        </div>
    </main>
    <main-footer></main-footer>
</template>
<script lang="ts">
import MainFooter from '../components/MainFooter.vue';
import ProductCard from '../components/ProductCard.vue';
import BaseBadge from '../components/BaseBadge.vue';
import BaseSelect from '../components/BaseSelect.vue';
import BaseTab from '../components/BaseTab.vue';
import BaseTabGroup from '../components/BaseTabGroup.vue';

import { Options, Vue } from 'vue-class-component';
import { IProduct, ISelect, ITab } from '../types';
@Options({
    components: { MainFooter, ProductCard, BaseBadge, BaseSelect, BaseTab, BaseTabGroup },
})
export default class B12 extends Vue {
    sortByOptions: ISelect[] = [
        { label: 'Useless first', value: 'useless_first' },
        { label: 'Useless last', value: 'useless_last' },
    ];

    conditionOptions: ISelect[] = [{ label: 'Condition', value: 'condition' }];

    deliveryOptions: ISelect[] = [{ label: 'Delivery Option', value: 'delivery' }];

    tags: string[] = [
        'worldwide shipping',
        'under $50',
        'kitten',
        'plstic plugs',
        'pucker shoes',
        'vintage typewriter',
    ];

    tabs: ITab[] = [
        { title: 'Show all', isActive: false },
        { title: 'Auction', isActive: true },
        { title: 'Buy now', isActive: false },
    ];

    products: IProduct[] = [
        {
            image: 'p1.png',
            title: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
            price: 12.48,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 4.5,
        },
        {
            image: 'p1.png',
            title: 'Prototyping items to create a lot if useless things...',
            price: 128.99,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 3.5,
        },
        {
            image: 'p1.png',
            title: 'John Von Ebalkin SPRING ',
            price: 13.95,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 2.5,
            discount: 50,
        },
        {
            image: 'p1.png',
            title: 'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
            price: 9.5,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 3.6,
        },
        {
            image: 'p1.png',
            title: 'Professional teadrinking set for every designer and developer',
            price: 128.99,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 1.5,
        },
        {
            image: 'p1.png',
            title: 'Prototyping items to create a lot if useless things...',
            price: 128.99,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 3.5,
        },
        {
            image: 'p1.png',
            title: 'One string Bonsai description',
            price: 11.68,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 2.8,
            coolDeal: true,
        },
        {
            image: 'p1.png',
            title: 'KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!',
            price: 23.25,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 1.5,
        },
        {
            image: 'p1.png',
            title: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
            price: 12.48,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 4.9,
        },
        {
            image: 'p1.png',
            title: 'One string Bonsai description',
            price: 11.68,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 2.8,
            coolDeal: true,
        },
    ];
}
</script>
<style scoped>
.main {
    padding: 10px 16px;
    box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
    border-radius: 8px;
}
.header {
    display: flex;
    margin-top: 24px;
    justify-content: space-between;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    .header {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .select-tab {
        margin-top: 5px;
    }
}
.select-tab {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}
.criteria {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
.tags {
    margin-top: 36px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-items: center;
}
.tag-title {
    font-weight: bold;
}
.products {
    margin-top: 10px;
    display: grid;
    flex-wrap: wrap;
    justify-items: center;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media only screen and (min-width: 600px) {
    .products {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (min-width: 768px) {
    .products {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (min-width: 1024px) {
    .products {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
@media only screen and (min-width: 1280px) {
    .products {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>