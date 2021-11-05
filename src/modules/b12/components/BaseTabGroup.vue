<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
export default class BaseTabGroup extends Vue {}
</script>
<style scoped>
.tabs {
    background-color: #ebf2ff;
    display: flex;
    border-radius: 4px;
}
</style>