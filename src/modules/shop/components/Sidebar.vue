<template>
    <div class="sidebar">
        <h5 class="title">Filters</h5>
        <ui-base-button class="center-btn" type="secondary"
            ><template #main>Clear Filter</template></ui-base-button
        >
        <ui-sub-title>Category</ui-sub-title>
        <ui-select-list :data="categories" :update-filter="updateFilter"></ui-select-list>
        <ui-sub-title>Price</ui-sub-title>
        <ui-select-list :data="prices" :update-filter="updateFilter"></ui-select-list>
        <ui-sub-title>Color</ui-sub-title>
        <ui-sub-title>Filter Name</ui-sub-title>
        <ui-base-button class="center-btn" :outline="false"
            ><template #main>Apply Filter (2)</template>
        </ui-base-button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IDataSelect } from '../types';

@Options({})
export default class Sidebar extends Vue {
    categories: IDataSelect[] = [
        { name: 'Custom Pcs', amount: 15, type: 'category', catId: 1 },
        { name: 'MSI All-In-One Pcs', amount: 45, type: 'category', catId: 2 },
        { name: 'HP/Compag Pcs', amount: 1, type: 'category', catId: 3 },
    ];

    prices: IDataSelect[] = [
        { name: '$0.00 - $1,000.00', amount: 19, type: 'price', min: 0, max: 1000 },
        {
            name: '$1,000.00 - $2,000.00',
            amount: 21,
            type: 'price',
            min: 1000,
            max: 2000,
        },
        { name: '$2,000.00 - $3,000.00', amount: 9, type: 'price', min: 2000, max: 3000 },
        { name: '$3,000.00 - $4,000.00', amount: 6, type: 'price', min: 3000, max: 4000 },
        { name: '$4,000.00 - $5,000.00', amount: 3, type: 'price', min: 4000, max: 5000 },
        { name: '$5,000.00 - $6,000.00', amount: 1, type: 'price', min: 5000, max: 6000 },
        { name: '$6,000.00 - $7,000.00', amount: 1, type: 'price', min: 6000, max: 7000 },
        { name: '$7,000.00 And Above', amount: 1, type: 'price', min: 7000 },
    ];

    updateFilter() {
        console.log('tung');
    }
}
</script>

<style scoped>
.sidebar {
    width: 234px;
    background: #f5f7ff;
    padding: 16px;
}
.title {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
}
.center-btn {
    margin: 0 auto;
}
</style>
