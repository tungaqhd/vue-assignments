<template>
    <div class="custom-select">
        <span class="label">{{ label }}</span>
        <select class="select-box" :name="name">
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';
import { ICustomSelect } from '../types';
@Options({
    props: {
        label: prop({ type: String, required: true }),
        name: prop({ type: String, required: true }),
        options: prop({ type: Object as PropType<ICustomSelect>, required: true }),
    },
})
export default class CustomSelect extends Vue {
    label!: string;
    name!: string;
    options!: ICustomSelect[];
}
</script>
<style scoped>
.custom-select {
    border: 2px solid #cacdd8;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 10px 16px;
    font-weight: 600;
}
.select-box {
    border: 0;
    outline: 0;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}
.label {
    color: #a2a6b0;
    font-size: 13px;
}
</style>