<template>
    <span class="badge-title">{{ title }}</span>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        title: prop({ type: String, required: true }),
    },
})
export default class BaseBadge extends Vue {
    title!: string;
}
</script>
<style scoped>
.badge-title {
    background: #ededf0;
    border-radius: 99px;
    padding: 6px 12px;
    cursor: pointer;
    color: #4a4b57;
}
</style>