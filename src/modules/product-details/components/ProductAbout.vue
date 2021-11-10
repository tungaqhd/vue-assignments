<template>
    <p class="description">
        {{ product.description }}
    </p>
    <div class="colors">
        <ui-color-radio name="color" value="#4B4D4F" v-model="selectedColor" />
        <ui-color-radio name="color" value="#F2E9DC" v-model="selectedColor" />
        <ui-color-radio name="color" value="#EAE8EB" v-model="selectedColor" />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productDetailModule } from '../store';
import { IProduct } from '../../common/types';
@Options({
    components: {},
})
export default class ProductDetail extends Vue {
    selectedColor = '';

    get product(): IProduct {
        return productDetailModule.productDetail;
    }
}
</script>
<style scoped>
.description {
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
}
.colors {
    display: flex;
    margin-top: 40px;
    gap: 15px;
}
</style>
