<template>
    <button
        class="btn"
        :class="{
            primary: type === 'primary',
            secondary: type === 'secondary',
            outline: outline,
        }"
    >
        <slot name="icon"></slot>
        <slot name="main"></slot>
    </button>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';

@Options({
    props: {
        type: prop({ type: String, default: 'primary' }),
        outline: prop({ type: Boolean, default: true }),
    },
})
export default class BaseButton extends Vue {
    type!: string;
    outline!: boolean;
}
</script>
<style scoped>
.btn {
    display: flex;
    align-items: center;
    padding: 8px 26px;

    border: 2px solid #0156ff;
    border-radius: 50px;
    background: #ffffff;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #0156ff;
    font-family: 'Poppins', sans-serif;
}
.secondary {
    border: 2px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 50px;
    color: #a2a6b0;
}
.primary {
    background: #0156ff;
    color: #ffffff;
}
.outline {
    background: transparent;
    color: #0156ff;
}
</style>