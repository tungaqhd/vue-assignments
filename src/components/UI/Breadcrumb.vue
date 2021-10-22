<template>
    <div class="breadcrumb">
        <span>Home</span>
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
                d="M9 5l7 7-7 7"
            />
        </svg>
        <span>Laptop</span>
    </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';

@Options({
    props: {
        labels: prop({ type: Object as PropType<string[]> }),
    },
})
export default class Breadcrumb extends Vue {
    labels!: string[];
}
</script>
<style scoped>
.breadcrumb {
    font-size: 12px;
    display: flex;
    gap: 5px;
    align-items: center;
    font-weight: 400;
}
.icon {
    width: 10px;
    height: 10px;
    color: #0156ff;
}
</style>