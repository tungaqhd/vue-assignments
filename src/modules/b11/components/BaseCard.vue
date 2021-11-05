<template>
    <div class="card">
        <div class="icon">
            <slot></slot>
        </div>
        <div>
            <span class="title">{{ title }}</span>
        </div>
        <div>
            <span class="description">
                <slot name="description"></slot>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        title: prop({ type: String, required: true }),
    },
})
export default class BaseCard extends Vue {
    title!: string;
}
</script>
<style scoped>
@media only screen and (max-width: 768px) {
    .card {
        width: 100% !important;
        min-width: 0 !important;
    }
}
.card {
    background-color: #ffffff;
    min-width: 500px;
    border-radius: 16px;
    padding: 35px 40px;
    text-align: left;
}
.icon {
    max-width: 24px;
    margin-bottom: 5px;
}
.title {
    font-weight: 400;
    line-height: 24.6px;
}
.description {
    font-size: small;
    line-height: 24.6px;
}
</style>