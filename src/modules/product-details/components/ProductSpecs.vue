<template>
    <table class="table-info">
        <tr>
            <td class="name">CPU</td>
            <td class="value">{{ product.cpu.length ? product.image : 'N/A' }}</td>
        </tr>
        <tr>
            <td class="name">Featured</td>
            <td class="value">
                {{ product.featured.length ? product.featured : 'N/A' }}
            </td>
        </tr>
        <tr>
            <td class="name">I/O Ports</td>
            <td class="value">{{ product.ports.length ? product.ports : 'N/A' }}</td>
        </tr>
    </table>
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
.table-info {
    border-collapse: collapse;
}
table {
    border: 1px solid #cacdd8;
}
table,
tr,
td {
    padding: 10px 100px 10px 15px;
}
tr {
    background: #ffffff;
}
.info {
    border: none;
    width: 235px;
    display: flex;
    flex-direction: column;
}
tr:nth-child(2) {
    background: #f5f7ff;
}
.name {
    font-weight: 400;
}
.value {
    color: #666666;
}
</style>