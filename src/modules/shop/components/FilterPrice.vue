<template>
    <ul class="list">
        <li
            class="list-item"
            v-for="price in prices"
            :key="price.name"
            @click="updateFilter(price)"
        >
            <span
                :class="{
                    selected:
                        price.min === priceFilter.minPrice &&
                        price.max === priceFilter.maxPrice,
                }"
                >{{ price.name }}</span
            >
            <span>{{ price.amount }}</span>
        </li>
    </ul>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import { IPriceSelect, IPriceFilter } from '../types';
import { Emit } from 'vue-property-decorator';
@Options({
    emits: ['on-change'],
    props: {
        priceFilter: prop({ type: Object as PropType<IPriceFilter> }),
    },
})
export default class BaseButton extends Vue {
    type!: string;
    outline!: boolean;
    priceFilter!: IPriceFilter;

    prices: IPriceSelect[] = [
        { name: '$0.00 - $1,000.00', amount: 19, min: 0, max: 1000 },
        {
            name: '$1,000.00 - $2,000.00',
            amount: 21,
            min: 1000,
            max: 2000,
        },
        { name: '$2,000.00 - $3,000.00', amount: 9, min: 2000, max: 3000 },
        { name: '$3,000.00 - $4,000.00', amount: 6, min: 3000, max: 4000 },
        { name: '$4,000.00 - $5,000.00', amount: 3, min: 4000, max: 5000 },
        { name: '$5,000.00 - $6,000.00', amount: 1, min: 5000, max: 6000 },
        { name: '$6,000.00 - $7,000.00', amount: 1, min: 6000, max: 7000 },
        {
            name: '$7,000.00 And Above',
            amount: 1,
            min: 7000,
            max: 1000000,
        },
    ];

    @Emit('on-change')
    updateFilter(selected: IPriceSelect): IPriceSelect {
        return selected;
    }
}
</script>
<style scoped>
.list {
    list-style: none;
}
.list-item {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    cursor: pointer;
    line-height: 27.3px;
}
.selected {
    border-bottom: 2px solid #0156ff;
}
</style>
