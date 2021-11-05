<template>
    <input
        type="radio"
        :name="name"
        :value="value"
        :checked="value === modelValue"
        :style="'--color-radio-var: ' + value"
        @change="$emit('update:modelValue', value)"
    />
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        name: prop({ type: String, required: true }),
        value: prop({ type: String, required: true }),
        modelValue: prop({ type: String, required: true }),
    },
    emits: ['updateColor', 'update:modelValue'],
})
export default class ColorRadio extends Vue {
    name!: string;
    value!: string;
    modelValue!: string;
}
</script>
<style scoped>
input[type='radio'] {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    outline: none;
}

input[type='radio']:before {
    content: '';
    display: block;
    width: 80%;
    height: 80%;
    margin: 10% auto;
    border-radius: 50%;

    background-color: var(--color-radio-var);
}

input[type='radio']:checked {
    border: 2px solid #0156ff;
}
</style>
