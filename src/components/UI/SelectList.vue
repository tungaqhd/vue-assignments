<template>
    <ul class="list">
        <li
            class="list-item"
            v-for="item in data"
            :key="item.name"
            @click="updateFilter(item)"
        >
            <span>{{ item.name }}</span>
            <span>{{ item.amount }}</span>
        </li>
    </ul>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import { IDataSelect } from '../../modules/shop/types';
import { Emit } from 'vue-property-decorator';
@Options({
    props: {
        data: prop({ type: Object as PropType<IDataSelect[]> }),
    },
})
export default class BaseButton extends Vue {
    type!: string;
    outline!: boolean;

    @Emit()
    updateFilter() {
        console.log('ok');
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
</style>