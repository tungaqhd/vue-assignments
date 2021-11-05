<template>
    <div class="summary">
        <h2 class="summary-title">Summary</h2>
        <el-form @submit.prevent="form.onSubmit">
            <el-collapse v-model="tabPosition">
                <el-collapse-item name="1" title="Estimate Shipping and Tax">
                    <el-form-item label="Country" prop="region">
                        <el-select
                            v-model="form.country"
                            placeholder="Select your country"
                        >
                            <el-option label="Vietnam" value="vietnam"></el-option>
                            <el-option label="Australia" value="australia"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="State/Province" prop="name">
                        <el-input v-model="form.state"></el-input>
                    </el-form-item>
                    <el-form-item label="Zip/Postal Code" prop="name">
                        <el-input v-model="form.zipCode"></el-input>
                    </el-form-item>
                    <el-form-item prop="resource">
                        <p class="shipping-type">Standard Rate</p>
                        <el-radio :label="21" v-model.number="form.shippingMethod"
                            >Price may vary depending on the item/destination. Shop Staff
                            will contact you. $21.00</el-radio
                        >
                        <p class="shipping-type">Pickup from store</p>
                        <el-radio :label="0" v-model.number="form.shippingMethod"
                            >1234 Street Adress City Address, 1234 $0.00</el-radio
                        >
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item name="2" title="Apply Discount Code">
                    <el-form-item label="Enter discount code" prop="name">
                        <el-input v-model="form.couponCode"></el-input>
                    </el-form-item>
                    <el-button class="discount-button" type="primary" round
                        >Apply Discount</el-button
                    >
                </el-collapse-item>
            </el-collapse>
            <el-divider></el-divider>
            <div class="billing-info">
                <div class="billing-item">
                    <span>Subtotal</span>
                    <span>{{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(subTotal)
                    }}</span>
                </div>
                <div class="billing-item">
                    <span>Shipping</span>
                    <span>{{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(form.shippingMethod || 0)
                    }}</span>
                </div>
                <div class="billing-item">
                    <span>Tax</span>
                    <span>{{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(1.91)
                    }}</span>
                </div>
                <div class="billing-item">
                    <span>GST (10%)</span>
                    <span>{{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(1.91)
                    }}</span>
                </div>
                <div class="billing-item">
                    <span>Order Total</span>
                    <span>{{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(orderTotal)
                    }}</span>
                </div>
            </div>
            <el-button class="process-button" type="primary" round @click="checkout"
                >Proceed to Checkout</el-button
            >
        </el-form>
    </div>
</template>
<script lang="ts">
import { Emit } from 'vue-property-decorator';
import { Options, Vue, setup } from 'vue-class-component';
import { cartModule } from '../store';
import { initCartForm } from '../form';
import { ElNotification } from 'element-plus';
@Options({})
export default class ProductDetail extends Vue {
    tabPosition = ['1', '2'];
    num = 1;
    breadcrumb: string[] = ['Home', 'Login'];

    form = setup(() => initCartForm());

    get subTotal(): number {
        return cartModule.productList.reduce((prev, curr) => {
            return prev + curr.qty * curr.price;
        }, 0);
    }

    get orderTotal(): number {
        return this.subTotal + 1.91 + 1.91 + (this.form.shippingMethod || 0);
    }

    @Emit('clear-shopping-cart')
    clearShoppingCart(): void {
        this.$router.push('/shop');
    }

    async checkout(): Promise<void> {
        await this.form.onSubmit();
        ElNotification({
            title: 'Success',
            message: 'Your order is being processed',
            position: 'bottom-right',
            type: 'success',
        });
        this.clearShoppingCart();
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

.shipping-type {
    font-weight: 600;
    font-size: 13px;
}
.discount-button {
    width: 100%;
    background-color: inherit;
    color: #0156ff;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid #0156ff;
    box-sizing: border-box;
    border-radius: 50px;
    margin-top: 20px;
}
</style>
<style>
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

.el-form-item {
    display: flex !important;
    flex-direction: column !important;
    margin-bottom: 5px !important;
}
.el-form-item__label {
    font-weight: 600;
    font-size: 13px;
    width: auto !important;
    text-align: left !important;
    line-height: 210% !important;
}
.el-form-item__content {
    margin-left: 0 !important;
}
.el-select {
    width: 100% !important;
}

.el-radio__label {
    font-weight: 400;
    white-space: pre-wrap !important;
    word-break: break-all !important;
}
.el-radio {
    display: flex !important;
}
</style>
