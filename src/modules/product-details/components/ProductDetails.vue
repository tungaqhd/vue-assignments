<template>
    <ul class="details">
        <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
    </ul>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productDetailModule } from '../store';
import { IProduct } from '../../common/types';
@Options({
    components: {},
})
export default class ProductDetail extends Vue {
    selectedColor!: string;

    get product(): IProduct {
        return productDetailModule.productDetail;
    }
}
</script>
<style scoped>
ul {
    margin-left: 15px;
}
</style>
<style>
</style>