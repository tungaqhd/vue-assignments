<template>
    <div class="product">
        <div class="stock">
            <div class="icon-button">
                <button class="delete-tag">
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
        <div>
            <img :src="require(`../../../assets/images/products/${product.image}`)" />
            <rating :rate="4"></rating>
        </div>
        <div class="product-detail">
            <span class="model">{{ product.model }}</span>
            <div class="description">
                <div class="details">
                    <h5 class="title">
                        {{ product.title }}
                    </h5>
                    <div class="price">
                        <del class="old-price">${{ product.price.toFixed(2) }}</del>
                        <span class="discounted-price"
                            >${{ product.discountedPrice.toFixed(2) }}</span
                        >
                    </div>
                </div>
                <div>
                    <div class="info">
                        <div class="info-item">
                            <span class="name">CPU</span>
                            <span class="value">{{
                                product.cpu.length ? product.image : 'N/A'
                            }}</span>
                        </div>
                        <div class="info-item">
                            <span class="name">Featured</span>
                            <span class="value">{{
                                product.featured.length ? product.featured : 'N/A'
                            }}</span>
                        </div>
                        <div class="info-item">
                            <span class="name">I/O Ports</span>
                            <span class="value">{{
                                product.ports.length ? product.ports : 'N/A'
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-footer">
                <ui-base-button type="primary" :outline="true">
                    <template #icon>
                        <svg
                            width="18"
                            height="18"
                            color="#ffffff"
                            class="cart-icon"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.4579 17.3332C12.0104 17.3332 12.5403 17.1137 12.931 16.723C13.3217 16.3323 13.5412 15.8024 13.5412 15.2498C13.5412 14.6973 13.3217 14.1674 12.931 13.7767C12.5403 13.386 12.0104 13.1665 11.4579 13.1665C10.9054 13.1665 10.3754 13.386 9.98475 13.7767C9.59404 14.1674 9.37455 14.6973 9.37455 15.2498C9.37455 15.8024 9.59404 16.3323 9.98475 16.723C10.3754 17.1137 10.9054 17.3332 11.4579 17.3332ZM4.16622 17.3332C4.71875 17.3332 5.24866 17.1137 5.63936 16.723C6.03006 16.3323 6.24955 15.8024 6.24955 15.2498C6.24955 14.6973 6.03006 14.1674 5.63936 13.7767C5.24866 13.386 4.71875 13.1665 4.16622 13.1665C3.61368 13.1665 3.08378 13.386 2.69308 13.7767C2.30238 14.1674 2.08288 14.6973 2.08288 15.2498C2.08288 15.8024 2.30238 16.3323 2.69308 16.723C3.08378 17.1137 3.61368 17.3332 4.16622 17.3332ZM17.7475 2.66963C18.0075 2.66124 18.2541 2.55204 18.4351 2.36513C18.6161 2.17822 18.7172 1.92824 18.7172 1.66807C18.7172 1.40789 18.6161 1.15791 18.4351 0.971001C18.2541 0.784088 18.0075 0.674891 17.7475 0.666504H16.5485C15.6089 0.666504 14.7964 1.31859 14.5923 2.23525L13.2871 8.11234C13.0829 9.029 12.2704 9.68109 11.3308 9.68109H3.5058L2.00372 3.67067H11.7381C11.9957 3.65892 12.2388 3.54831 12.417 3.36187C12.5951 3.17543 12.6945 2.92749 12.6945 2.66963C12.6945 2.41177 12.5951 2.16383 12.417 1.97739C12.2388 1.79094 11.9957 1.68034 11.7381 1.66859H2.00372C1.6992 1.6685 1.39868 1.73784 1.12498 1.87133C0.85129 2.00483 0.611635 2.19896 0.424236 2.43899C0.236837 2.67901 0.106628 2.9586 0.0435085 3.2565C-0.0196133 3.5544 -0.0139828 3.86277 0.0599689 4.15817L1.56205 10.1665C1.67034 10.6 1.92048 10.9849 2.27269 11.2599C2.62489 11.5349 3.05894 11.6843 3.5058 11.6842H11.3308C12.2425 11.6843 13.1269 11.3735 13.8381 10.8031C14.5492 10.2326 15.0446 9.43669 15.2423 8.54671L16.5485 2.66963H17.7475Z"
                                fill="#0156FF"
                            />
                        </svg>
                    </template>
                    <template #main>Add To Cart</template>
                </ui-base-button>
                <div>
                    <div class="footer-icon-list">
                        <ui-icon-button
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                /></svg
                        ></ui-icon-button>
                        <ui-icon-button
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                /></svg
                        ></ui-icon-button>
                        <ui-icon-button
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                /></svg
                        ></ui-icon-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import Rating from './Rating.vue';
import { IProduct } from '../types';
@Options({
    props: {
        product: prop({ type: Object as PropType<IProduct>, required: true }),
    },
    components: { Rating },
})
export default class Product extends Vue {
    product!: IProduct;
}
</script>
<style scoped>
.stock {
    color: #78a962;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 10px;
    font-weight: 400;
    display: flex;
    gap: 2px;
}
.product {
    background: #ffffff;
    padding: 10px 53px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
    min-height: 100px;
}
.product:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
}
.details {
    /* margin-left: 53px; */
    max-width: 350px;
}
.model {
    font-size: 12px;
}
.title {
    margin: 18px 0 16px 0;
    font-size: 13px;
}
.price {
    display: flex;
    gap: 5px;
    font-size: 14px;
    line-height: 140%;
}
.old-price {
    color: #666666;
}
.discounted-price {
    font-weight: 700;
}
.info {
    margin-left: 46.2px;
    border: none;
    width: 235px;
    display: flex;
    flex-direction: column;
}
.info-item {
    padding: 6px 15px;
    display: flex;
    justify-content: space-between;
}
.info-item:nth-child(2) {
    background: #f5f7ff;
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
.cart-icon {
    height: 18px;
    width: 18px;
    color: #ffffff;
}
.delete-tag {
    border: 0;
    background: #78a962;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    cursor: pointer;
}
.footer-icon-list {
    display: flex;
    gap: 6px;
}
.product-detail {
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;
}
.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
}
.description {
    display: flex;
}
</style>