<template>
    <div class="icon-group">
        <slot></slot>
        <span class="title">1</span>
    </div>
</template>
<style scoped>
.icon-group {
    border: 0;
    background-color: #ffffff;
    width: 32px;
    height: 32px;
    position: relative;
}
.title {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;
    min-width: 20px;
    padding: 0px 6px;
    height: 20px;
    border-radius: 50%;
    background-color: #0156ff;
    color: #ffffff;
    top: 0px;
    right: 0px;

    font-weight: bold;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
}
</style>