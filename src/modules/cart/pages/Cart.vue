<template>
    <div class="xl">
        <ui-breadcrumb :items="breadcrumb" />
        <h1 class="title">Shopping Cart</h1>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
                <el-table
                    :data="productList"
                    style="width: 100%"
                    empty-text="No product selected"
                >
                    <el-table-column label="Item" min-width="450px">
                        <template #default="scope">
                            <div class="product-detail">
                                <img
                                    class="product-image"
                                    :src="
                                        require('@/assets/images/products/' +
                                            scope.row.image)
                                    "
                                />
                                <router-link
                                    class="product-link"
                                    :to="'/product/' + scope.row.id"
                                >
                                    <span class="product-name"
                                        >{{ scope.row.title }}
                                        {{ scope.row.description }}</span
                                    >
                                </router-link>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Qty" min-width="150px">
                        <template #default="scope">
                            <el-input-number
                                v-model="scope.row.qty"
                                :min="1"
                                :max="100"
                                controls-position="right"
                            />
                        </template>
                    </el-table-column>
                    <el-table-column label="Price" min-width="150px">
                        <template #default="scope">
                            <span class="text-bold">{{
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(scope.row.price)
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Subtotal" min-width="150px">
                        <template #default="scope">
                            <div class="action-col">
                                <span class="text-bold">{{
                                    new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(scope.row.price * scope.row.qty)
                                }}</span>
                                <div class="action-buttons">
                                    <button
                                        class="btn-outline"
                                        circle
                                        @click="deleteProduct(scope.row.id)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            width="17"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                    <button class="btn-outline" circle>
                                        <svg
                                            width="17"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.16274 13.9039H1.23745L4.69917 13.5884C5.07838 13.5506 5.43305 13.3836 5.70365 13.1152L13.175 5.64388C13.465 5.33753 13.6217 4.92872 13.6108 4.50702C13.5999 4.08533 13.4223 3.68515 13.1169 3.39418L10.8423 1.11957C10.5454 0.840724 10.1564 0.680723 9.74924 0.670009C9.34208 0.659294 8.9452 0.798613 8.63407 1.06146L1.16274 8.5328C0.894406 8.8034 0.72733 9.15807 0.689554 9.53728L0.332591 12.999C0.321408 13.1206 0.337185 13.2431 0.378798 13.3579C0.42041 13.4727 0.486834 13.5769 0.573334 13.6631C0.650903 13.7401 0.742897 13.8009 0.84404 13.8422C0.945183 13.8836 1.05349 13.9045 1.16274 13.9039ZM9.68836 2.28178L11.9547 4.54809L10.2944 6.16688L8.06957 3.94208L9.68836 2.28178ZM2.30004 9.6784L6.97378 5.03788L9.21518 7.27928L4.56635 11.9281L2.0759 12.1605L2.30004 9.6784Z"
                                                fill="#A2A6B0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="actions">
                    <div>
                        <el-button class="btn-gray" @click="continueShopping" round
                            >Continue Shopping</el-button
                        >
                        <el-button class="btn-black" @click="clearShoppingCart" round
                            >Clear Shopping Cart</el-button
                        >
                    </div>
                    <el-button class="btn-black" @click="updateShoppingCart" round
                        >Update Shopping Cart</el-button
                    >
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <summary-bar @clearShoppingCart="clearShoppingCart" />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SummaryBar from '../components/SummaryBar.vue';
import { cartModule } from '../store';
import { productModule } from '../../shop/store';
import { ICartProduct } from '../types';
@Options({
    components: { SummaryBar },
})
export default class ProductDetail extends Vue {
    tabPosition = ['1', '2'];
    num = 1;
    breadcrumb: string[] = ['Home', 'Login'];

    get productList(): ICartProduct[] {
        return cartModule.productList.map((prod) => ({
            ...prod,
        }));
    }

    get subTotal(): number {
        return cartModule.productList.reduce((prev, curr) => {
            return prev + curr.qty * curr.price;
        }, 0);
    }

    get orderTotal(): number {
        return this.subTotal + 1.91 + 1.91;
    }

    continueShopping(): void {
        this.$router.push('/shop');
    }

    clearShoppingCart(): void {
        localStorage.removeItem('cart');
        productModule.setCartCount(0);
        cartModule.setProduct([]);
    }

    updateShoppingCart(): void {
        let totalProd = 0;
        const cartObj = this.productList.reduce((prev, curr) => {
            totalProd += curr.qty;
            return {
                ...prev,
                [curr.id]: curr.qty,
            };
        }, {});
        productModule.setCartCount(totalProd);
        cartModule.setProduct(this.productList);
        localStorage.setItem('cart', JSON.stringify(cartObj));
    }

    deleteProduct(prodId: number): void {
        const deletedList = cartModule.productList.filter(
            (product) => product.id !== prodId,
        );
        cartModule.setProduct(deletedList);
        this.updateShoppingCart();
    }

    created(): void {
        cartModule.getProductCart();
    }
}
</script>
<style scoped>
.xl {
    max-width: 1400px;
    margin: 0 auto !important;
}
.title {
    font-weight: 600;
    font-size: 32px;
    margin: 30px 0;
}
.product-detail {
    display: flex;
    gap: 30px;
    align-items: center;
}
.product-name {
    font-weight: 400;
    font-size: 14px;
}
.product-image {
    max-width: 120px;
}
.text-bold {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
}
.summary {
    background: #f5f7ff;
    padding: 17px 32px;
}
.summary-title {
    font-weight: 600;
    font-size: 24px;
}
.text-muted {
    font-size: 14px;
    color: #666666;
}
.billing-item {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 13px;
    line-height: 210%;
}
.process-button {
    width: 100%;
    background: #0156ff !important;
    border-radius: 50px !important;
    margin-top: 20px;
}
.btn-gray {
    color: #a2a6b0;
    border: 2px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 50px;

    font-weight: 600;
    font-size: 14px;
    margin: 5px;
}
.btn-black {
    background: #000000;
    border-radius: 50px;

    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    margin: 5px;
}
.actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .actions {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 25px;
        text-align: center;
    }
}
.action-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.btn-outline {
    border: 2px solid #cacdd8;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    padding: 8px;
    color: #a2a6b0;
}
.product-link {
    text-decoration: none !important;
    color: inherit !important;
}
</style>
<style>
.el-table__row > td {
    padding: 25px 0 !important;
}
.el-table__row,
thead {
    background-color: #ffffff !important;
}
.el-collapse-item__header {
    font-weight: 400 !important;
    font-size: 18px !important;
    border-bottom: none !important;
    text-align: center;
    background-color: #f5f7ff !important;
}
.el-input__inner {
    border: 1px solid #a2a6b0 !important;
    box-sizing: border-box !important;
    border-radius: 4px !important;
}
</style>
