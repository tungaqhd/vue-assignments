<template>
    <div class="menu">
        <div>
            <ul class="menu-bar">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Laptops</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Desktop PCs</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Networking Devices</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Printers & Scanners</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">PC Parts</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">All Other Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Repairs</router-link>
                </li>
                <li class="nav-item">
                    <!-- <ui-base-button>Our Deals</ui-base-button> -->
                </li>
            </ul>
        </div>
        <div class="menu-after">
            <ul class="menu-bar">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Repairs</router-link>
                </li>
                <li class="nav-item">
                    <img
                        :src="require('@/assets/images/search.png')"
                        class="icon nav-link"
                    />
                </li>
                <li class="nav-item">
                    <ui-icon-badge>
                        <img
                            :src="require('@/assets/images/cart.png')"
                            class="icon nav-link"
                        />
                    </ui-icon-badge>
                </li>
                <li class="nav-item">
                    <div class="avatar-container">
                        <img
                            :src="require('@/assets/images/avatar.png')"
                            class="avatar"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class Topmenu extends Vue {
    activeIndex = '1';
    handleSelect(): void {
        console.log(1);
    }
}
</script>
<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cacdd8;
    align-content: center;

    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}
.menu-bar {
    display: flex;
    list-style: none;
    padding: 6px 0;
    margin: 0;
    gap: 25px;
}
.nav-link {
    margin: 8px 25px;
    border-bottom: 0;
    padding: 30px 0;
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    display: flex;
    align-items: center;
}
.nav-item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
}
.icon {
    width: 15px;
    height: 15px;
    font-weight: 600 !important;
}
.menu-after {
    display: flex;
    align-content: center;
}
.avatar-container {
    display: flex;
    display: flex;
    align-items: center;
}
.avatar {
    max-width: 25px;
    height: 25px;
}
</style>