<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
export default class BaseCard extends Vue {}
</script>
<style scoped>
.card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px 16px;
    text-align: left;
    max-width: 260px;
    margin: 5px 0;
    grid-column: span 1 / span 1;
}
.card:hover {
    box-shadow: 0px 2px 4px rgba(59, 69, 123, 0.2), 0px 4px 8px rgba(92, 107, 192, 0.2);
}
</style>