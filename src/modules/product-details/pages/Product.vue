<template>
    <div>
        <div class="product-header-container">
            <el-row class="header">
                <el-col
                    class="tab-navigator"
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="12"
                    :xl="12"
                >
                    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
                        <el-radio-button label="product-about"
                            >About Product</el-radio-button
                        >
                        <el-radio-button label="product-details">Details</el-radio-button>
                        <el-radio-button label="product-specs">Specs</el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="cart">
                        <span
                            >On Sale from
                            <span class="price">{{
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(product.price)
                            }}</span></span
                        >
                        <el-input-number
                            v-model="amount"
                            :min="1"
                            :max="100"
                            controls-position="right"
                        />
                        <el-button
                            class="add-to-cart-button"
                            type="primary"
                            round
                            @click="addToCart"
                            >Add To Cart</el-button
                        >
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-col class="product-info" :xs="24" :sm="14" :md="14" :lg="14" :xl="14">
                <el-row>
                    <el-col :xs="0" :sm="0" :md="0" :lg="8" :xl="8"></el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
                        <ui-breadcrumb :items="breadcrumb" />
                        <h1 class="product-name">{{ product.title }}</h1>
                        <p class="review-text">Be the first to review this product</p>
                        <component :is="tabPosition"></component>
                        <p class="footer-text">
                            <span>
                                Have a Question?
                                <router-link to="/contact">Contact Us</router-link>
                            </span>
                            <span class="model">{{ product.model }}</span>
                        </p>
                    </el-col>
                    <el-col :xs="0" :sm="0" :md="0" :lg="6" :xl="6"></el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                        <div class="more-info">
                            <el-collapse v-model="activeCollapseName">
                                <el-collapse-item title="+ More information" name="1">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Aut earum a fugit, corporis
                                        voluptatibus dignissimos consequatur quis
                                        consectetur quibusdam enim laudantium hic labore
                                        veniam. Blanditiis assumenda maiores nostrum et
                                        tempore.
                                    </p>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="preview" :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
                <div class="product-footer-icons">
                    <div class="icons">
                        <button class="btn outline" circle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </button>
                        <button class="btn outline" circle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </button>
                        <button class="btn outline" circle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
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
                        </button>
                    </div>
                </div>
                <el-carousel indicator-position="outside" arrow="never">
                    <el-carousel-item v-for="item in 2" :key="item">
                        <img
                            class="product-image"
                            :src="require('@/assets/images/product_detail.png')"
                        />
                        <div class="warranty">
                            <img
                                class="warranty-logo"
                                :src="require('@/assets/images/zip_logo.png')"
                            />
                            <div class="warranty-text">
                                own it now, up to 6 months interest free
                                <a href="#">learn more</a>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductAbout from '../components/ProductAbout.vue';
import ProductDetails from '../components/ProductDetails.vue';
import ProductSpecs from '../components/ProductSpecs.vue';
import { productDetailModule } from '../store';
import { productModule } from '../../shop/store';
import { IProduct } from '../../common/types';
@Options({
    components: { ProductAbout, ProductDetails, ProductSpecs },
    props: ['productId'],
})
export default class ProductDetail extends Vue {
    productId!: number;
    tabPosition = 'product-about';
    amount = 1;
    activeCollapseName = '';
    breadcrumb: string[] = ['Home', 'Laptops', 'MSI Prestige Series'];

    get product(): IProduct {
        return productDetailModule.productDetail;
    }

    addToCart(): void {
        const cartStorage = localStorage.getItem('cart');
        if (cartStorage && cartStorage !== 'null') {
            const cart: Record<number, number> = JSON.parse(cartStorage);
            if (this.productId in cart) {
                cart[this.productId] += this.amount;
            } else {
                cart[this.productId] = this.amount;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.setItem(
                'cart',
                JSON.stringify({
                    [this.productId]: this.amount,
                }),
            );
        }
        productModule.increaseCartCount(this.amount);
    }

    async created(): Promise<void> {
        productDetailModule.getProduct(this.productId);
    }
}
</script>
<style scoped>
.product-header-container {
    border-bottom: 1px solid #cacdd8;
}
.header {
    padding: 15px;
    max-width: 1400px;
    margin: 0 auto !important;
}
.cart {
    font-weight: 400;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
}
.price {
    font-weight: 600;
}
.add-to-cart-button {
    background: #0156ff !important;
    border-radius: 50px !important;
    color: #ffffff !important;
}

.product-name {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
}
.review-text {
    color: #0156ff;
    font-size: 12px;
    line-height: 18px;
    margin: 24px 0;
}
.product-info {
    background: #f5f7ff;
    padding: 70px 10px;
}
.product-image {
    margin-left: 20px;
}
.preview {
    position: relative;
}
.icons {
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: absolute;
    top: 96px;
    left: 22px;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;

    background: inherit;
    color: #a2a6b0;
    padding: 5px !important;
}
.btn > span {
    display: flex;
}
.outline {
    border: 2px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 50%;
}
.footer-text {
    font-weight: 600;
    font-size: 12px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}
.model {
    font-weight: 300;
}
.more-info {
    margin-top: 80px;
}
.warranty {
    display: flex;
    margin-left: 20px;
}
.warranty-logo {
    margin-right: 12px;
}
.warranty-text {
    font-weight: 300;
    font-size: 12px;
    max-width: 160px;
    border-left: 2px solid #00aeb8;
    padding-left: 12px;
}
.warranty-text > a {
    color: inherit !important;
}
@media only screen and (max-width: 768px) {
    .product-info {
        order: 1;
    }
    .preview {
        order: 0;
    }
}
@media only screen and (max-width: 640px) {
    .header {
        text-align: center;
    }
    .cart {
        flex-wrap: wrap;
        justify-content: center;
    }

    .cart > span {
        flex: 0 0 100%;
    }
}
.tab-navigator {
    display: flex;
    align-items: center;
}
</style>
<style>
.el-radio-button__inner {
    border: none !important;
    border-radius: 0 !important;
    color: #666666 !important;
    padding: 0 !important;
}
.is-active > .el-radio-button__inner {
    background-color: #ffffff !important;
    font-weight: 600 !important;
    color: #000000 !important;
    border-bottom: 2px solid #0156ff !important;
    padding: 0 !important;
}
.el-radio-group {
    margin-bottom: 0 !important;
    display: flex !important;
    gap: 30px !important;
    align-items: center;
}
.el-input-number {
    width: 90px !important;
    background-color: #f5f7ff !important;
    border-radius: 6px;
}
.el-carousel {
    height: 100%;
}
.el-carousel__container {
    min-height: 90%;
}

.el-carousel__button {
    background: #cacdd8 !important;
    border-radius: 50% !important;
    width: 10px !important;
    height: 10px !important;
}
.is-active > .el-carousel__button {
    background: #0156ff !important;
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
    box-shadow: none !important;
}
.more-info .el-collapse-item__header {
    font-size: 14px !important;
    font-weight: 700 !important;
}
</style>
