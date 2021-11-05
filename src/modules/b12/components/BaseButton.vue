<template>
    <button class="btn">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="content">
            <slot name="default"></slot>
        </div>
    </button>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
export default class BaseButton extends Vue {}
</script>
<style scoped>
.btn {
    display: flex;
    font-family: 'Inter', sans-serif;
    align-items: center;
    gap: 8px;
    padding: 4px 12px;

    background: #ffffff;
    border: 1px solid #9dc2ff;
    box-sizing: border-box;
    border-radius: 4px;
}
.content {
    color: #2264d1;
    font-weight: 500;
}
</style>