<template>
    <div class="product">
        <div class="product-header">
            <div class="stock">
                <div class="icon-button">
                    <button class="instock">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </button>
                </div>
                <span>in stock</span>
            </div>
        </div>
        <el-row class="product-body">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <img
                    class="product-image"
                    :src="require(`../../../assets/images/products/${product.image}`)"
                />
                <el-rate
                    :model-value="product.rate"
                    disabled
                    show-score
                    text-color="#a2a6b0"
                    :allow-half="true"
                    :score-template="`Reviews (${product.reviewCount})`"
                >
                </el-rate>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <router-link class="product-link" :to="'/product/' + product.id"
                    ><h5 class="title">
                        {{ product.title }} {{ product.description }}
                    </h5></router-link
                >
                <del class="old-price">${{ product.price.toFixed(2) }}</del>
                <span class="discounted-price"
                    >${{ product.discountedPrice.toFixed(2) }}</span
                >
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import { IProduct } from '../types';
import { productModule } from '../store';
@Options({
    props: {
        product: prop({ type: Object as PropType<IProduct>, required: true }),
    },
    components: {},
})
export default class ProductCardGrid extends Vue {
    product!: IProduct;

    addToCard(): void {
        const cartStorage = localStorage.getItem('cart');
        if (cartStorage && cartStorage !== 'null') {
            const cart: Record<number, number> = JSON.parse(cartStorage);
            if (this.product.id in cart) {
                cart[this.product.id]++;
            } else {
                cart[this.product.id] = 1;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.setItem(
                'cart',
                JSON.stringify({
                    [this.product.id]: 1,
                }),
            );
        }
        productModule.increaseCartCount();
    }
}
</script>
<style scoped>
.product {
    background: #ffffff;
    padding: 10px 25px;
    align-items: center;
    margin-bottom: 15px;
    min-height: 100px;
}
@media only screen and (max-width: 768px) {
    .center {
        margin: 0 auto;
    }
}
.product:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
}
.title {
    margin: 18px 0 16px 0;
    font-size: 13px;
    font-weight: 400;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.price {
    display: flex;
    gap: 5px;
    font-size: 14px;
    line-height: 140%;
}
.old-price {
    color: #666666;
    display: block;
}
.discounted-price {
    font-weight: 700;
    display: block;
}

.name {
    font-weight: 400;
}
.value {
    color: #666666;
}
.icon {
    height: 10px;
    width: 10px;
    color: #ffffff;
}
.instock {
    border: 0;
    background: #78a962;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    cursor: pointer;
}
.outline {
    border: 2px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 50%;
}
.product-body {
    align-items: center;
}
.stock {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 400;
}
.product-image {
    width: 100%;
    height: auto;
}
.product-link {
    text-decoration: none !important;
    color: inherit !important;
}
</style>
<style>
.el-rate__icon {
    color: #e9a426 !important;
    border-radius: 0.1px;
    margin-right: 2px !important;
}
.el-rate__text {
    margin-left: 5px;
    color: #a2a6b0;
    font-size: 12px !important;
    font-weight: 400;
}
</style>
