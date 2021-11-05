<template>
    <base-card>
        <img
            :src="require(`../../../assets/images/products/${image}`)"
            class="product-image"
            :alt="title"
        />
        <div class="title-container">
            <h2 class="title">{{ title }}</h2>
        </div>
        <div class="info">
            <span class="price">${{ price }}</span>
            <span v-if="discount" class="discount">{{ discount }}%</span>
            <span v-if="cooldeal" class="cooldeal">Cool deal!</span>
        </div>
        <p class="description">{{ description }}</p>
        <div class="product-footer">
            <rating :rate="rate"></rating>
            <base-button>
                <template #icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </template>
                <template #default> Watch </template>
            </base-button>
        </div>
    </base-card>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
import BaseCard from './BaseCard.vue';
import BaseButton from './BaseButton.vue';
import Rating from './Rating.vue';
@Options({
    props: {
        image: prop({ type: String, required: true }),
        title: prop({ type: String, required: true }),
        description: prop({ type: String, required: true }),
        price: prop({ type: Number, required: true }),
        rate: prop({ type: Number, required: true }),
        discount: prop({ type: Number, required: true }),
        cooldeal: prop({ type: Boolean, required: true }),
    },
    components: { BaseCard, BaseButton, Rating },
})
export default class ProductCard extends Vue {
    image!: string;
    title!: string;
    description!: string;
    price!: number;
    rate!: number;
    discount!: boolean;
    cooldeal!: boolean;
}
</script>
<style scoped>
.produt-image {
    width: 100%;
    margin: 0 auto;
}
.title-container {
    min-height: 72px;
}
.title {
    font-weight: 400;
    font-size: 16px !important;
    line-height: 24px;
    color: #19191d;
}
.price {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
}
.description {
    font-size: 14px;
    color: #787885;
}
.product-footer {
    display: flex;
    justify-content: space-between;
}
svg {
    width: 24px;
    color: #2979ff;
}
.info {
    display: flex;
    justify-content: space-between;
}
.discount {
    background: #ecf7ed;
    border-radius: 4px;
    padding: 4px 10px;
    color: #37833b;
    display: flex;
    align-items: center;
}
.cooldeal {
    background: #fdedf2;
    border-radius: 4px;
    padding: 4px 10px;
    color: #c23564;
    display: flex;
    align-items: center;
}
</style>