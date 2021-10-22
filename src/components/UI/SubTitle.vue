<template>
    <div class="container">
        <h5><slot></slot></h5>
        <img :src="require('../../assets/images/up.png')" class="icon" />
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 10px 0 0;
}
.subtitle {
    font-weight: normal;
    font-size: 18px;
}
.icon {
    width: 6px;
    height: 6px;
}
</style>