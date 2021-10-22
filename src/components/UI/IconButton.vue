<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class HomePage extends Vue {}
</script>
<style scoped>
.btn {
    border: 2px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 50%;

    display: flex;
    padding: 2px;

    background: inherit;
    color: #a2a6b0;
}
</style>