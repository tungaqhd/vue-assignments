<template>
    <select>
        <option v-for="option in options" :key="option.value">
            {{ option.label }}
        </option>
    </select>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import { ISelect } from '../types';
@Options({
    props: {
        name: prop({ type: String, required: true }),
        options: prop({ type: Object as PropType<ISelect[]>, required: true }),
    },
})
export default class BaseSelect extends Vue {
    title!: string;
}
</script>
<style scoped>
select {
    padding: 7px 12px;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
}
</style>