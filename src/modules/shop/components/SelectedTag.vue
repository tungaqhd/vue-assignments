<template>
    <div class="selected-tag">
        <span class="label">{{ label }}</span>
        <span class="amount">({{ amount }})</span>
        <button class="delete-tag" @click="unselect(id)">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
import { productModule } from '../store';
@Options({
    props: {
        label: prop({ type: String, required: true }),
        id: prop({ type: Number, required: true }),
        amount: prop({ type: Number, required: true }),
    },
})
export default class SelectedTag extends Vue {
    label!: string;
    amount!: number;
    id!: number;

    unselect(id: number) {
        productModule.unSelectCategory(id);
    }
}
</script>
<style scoped>
.selected-tag {
    padding: 9px 15px;
    border: 1px solid #cacdd8;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 13px;

    display: flex;
    gap: 5px;
    align-items: center;
}
.label {
    font-weight: 600;
}
.amount {
    color: #cacdd8;
}
.icon {
    height: 20px;
    width: 20px;
    color: #ffffff;
}
.delete-tag {
    border: 0;
    background: #c94d3f;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    cursor: pointer;
}
</style>