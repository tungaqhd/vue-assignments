<template>
    <el-breadcrumb separator-class="el-icon-arrow-right breadcrumb-icon">
        <el-breadcrumb-item v-for="item in items" :key="item">
            {{ item }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue, prop } from 'vue-class-component';

@Options({
    props: {
        items: prop({ type: Object as PropType<string[]> }),
    },
})
export default class Breadcrumb extends Vue {
    items!: string[];
}
</script>
<style>
.el-breadcrumb {
    font-size: 12px;
    align-items: center;
    font-weight: 400;
    line-height: 18px;
    margin-top: 12px;
}
.breadcrumb-icon {
    width: 10px;
    height: 10px;
    color: #0156ff !important;
    margin: 0 3px !important;
    font-weight: bold !important;
    font-size: 8px;
}
.current-page {
    color: #a2a6b0;
}
.el-breadcrumb__item:last-child > span {
    color: #cacdd8 !important;
}
</style>
