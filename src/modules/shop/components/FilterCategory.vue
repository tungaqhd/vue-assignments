<template>
    <ul class="list">
        <li
            class="list-item"
            v-for="category in categories"
            :key="category.name"
            @click="updateFilter(category)"
        >
            <span :class="{ selected: selectedCategories.includes(category.id) }">{{
                category.name
            }}</span>
            <span>{{ category.amount }}</span>
        </li>
    </ul>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import { ICategory } from '../types';
import { productModule } from '../store';
import { Emit } from 'vue-property-decorator';
@Options({
    emits: ['update-filter'],
    props: {
        selectedCategories: prop({ type: Object as PropType<number[]> }),
    },
})
export default class BaseButton extends Vue {
    type!: string;
    outline!: boolean;
    selectedCategories!: number[];

    get categories(): ICategory[] {
        return productModule.categoryList.map((category) => ({
            ...category,
        }));
    }

    @Emit('on-change')
    updateFilter(selected: ICategory): ICategory {
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
