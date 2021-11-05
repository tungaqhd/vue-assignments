<template>
    <div class="tab" :class="{ active: isActive }">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        isActive: prop({ type: Boolean, required: true }),
    },
})
export default class BaseTab extends Vue {
    isActive!: boolean;
}
</script>
<style scoped>
.tab {
    padding: 10px 16px;
    cursor: pointer;
}
.active {
    box-shadow: 0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24);
    background-color: #ffffff;
    border-radius: 4px;
}
</style>