<template>
    <button class="btn" :class="{ outline }">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        outline: prop({ type: Boolean, default: true }),
    },
})
export default class IconButton extends Vue {
    outline!: boolean;
}
</script>
<style scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;

    background: inherit;
    color: #a2a6b0;
    border: none;
    cursor: pointer;
    min-width: 24px;
    min-height: 24px;
    font-family: 'Poppins', sans-serif;
}
.outline {
    border: 2px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 50%;
}
</style>