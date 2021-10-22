<template>
    <div class="card">
        <div
            class="icon"
            :class="{
                success: color === 'success',
                primary: color === 'primary',
                info: color === 'info',
            }"
        >
            <slot></slot>
        </div>
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
    </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        title: prop({ type: String, required: true }),
        description: prop({ type: String, required: true }),
        color: prop({ type: String, required: true }),
    },
})
export default class FooterCard extends Vue {
    title!: string;
    description!: string;
    color!: string;
}
</script>
<style scoped>
.icon {
    width: 44px;
    margin: 0 auto;
}
.card {
    background: #ededf0;
    border-radius: 8px;
    text-align: center;
    padding: 24px 16px;
    font-family: 'Quicksand', sans-serif;
    min-width: 30%;
}
.title {
    font-weight: 700;
    line-height: 30px;
}
.description {
    color: #5a5b6a;
    line-break: 20px;
}
.success {
    color: #65b168;
}
.primary {
    color: #7985cb;
}
.info {
    color: #ef6292;
}
@media only screen and (max-width: 1024px) {
    .card {
        margin: 5px 0;
    }
}
</style>