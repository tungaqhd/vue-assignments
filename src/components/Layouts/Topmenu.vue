<template>
    <div class="top-container">
        <div class="top-menu">
            <div class="info">
                <span class="text-gray">Mon-Thu:</span>
                <span>9:00 AM - 5:30 PM</span>
            </div>
            <div class="info">
                <span class="text-gray"
                    >Visit our showroom in 1234 Street Address City Address, 1234</span
                ><span class="text-underline">Contact Us</span>
            </div>
            <div class="info">
                <span>Call Us: (00) 1234 5678</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.1054 0.276611H0.894536C0.55278 0.276611 0.276672 0.552719 0.276672 0.894475V15.1053C0.276672 15.4471 0.55278 15.7232 0.894536 15.7232H15.1054C15.4471 15.7232 15.7233 15.4471 15.7233 15.1053V0.894475C15.7233 0.552719 15.4471 0.276611 15.1054 0.276611ZM13.3213 4.78508H12.0875C11.1202 4.78508 10.9329 5.24462 10.9329 5.92041V7.40907H13.2421L12.9409 9.73957H10.9329V15.7232H8.52515V9.74151H6.5113V7.40907H8.52515V5.69064C8.52515 3.6961 9.7435 2.60905 11.5237 2.60905C12.3771 2.60905 13.1089 2.67276 13.3232 2.70173V4.78508H13.3213Z"
                        fill="white"
                    /></svg
                ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.99997 5.39658C6.56638 5.39658 5.39646 6.5665 5.39646 8.00009C5.39646 9.43368 6.56638 10.6036 7.99997 10.6036C9.43357 10.6036 10.6035 9.43368 10.6035 8.00009C10.6035 6.5665 9.43357 5.39658 7.99997 5.39658ZM15.8086 8.00009C15.8086 6.92197 15.8183 5.85361 15.7578 4.77744C15.6972 3.52744 15.4121 2.41806 14.498 1.504C13.582 0.587983 12.4746 0.30478 11.2246 0.244233C10.1465 0.183686 9.0781 0.193452 8.00192 0.193452C6.9238 0.193452 5.85544 0.183686 4.77927 0.244233C3.52927 0.30478 2.41989 0.589936 1.50583 1.504C0.589814 2.42001 0.306611 3.52744 0.246064 4.77744C0.185517 5.85556 0.195283 6.92392 0.195283 8.00009C0.195283 9.07626 0.185517 10.1466 0.246064 11.2227C0.306611 12.4727 0.591768 13.5821 1.50583 14.4962C2.42185 15.4122 3.52927 15.6954 4.77927 15.7559C5.85739 15.8165 6.92575 15.8067 8.00192 15.8067C9.08005 15.8067 10.1484 15.8165 11.2246 15.7559C12.4746 15.6954 13.584 15.4102 14.498 14.4962C15.414 13.5802 15.6972 12.4727 15.7578 11.2227C15.8203 10.1466 15.8086 9.07822 15.8086 8.00009ZM7.99997 12.0059C5.78317 12.0059 3.99411 10.2169 3.99411 8.00009C3.99411 5.78329 5.78317 3.99423 7.99997 3.99423C10.2168 3.99423 12.0058 5.78329 12.0058 8.00009C12.0058 10.2169 10.2168 12.0059 7.99997 12.0059ZM12.1699 4.76572C11.6523 4.76572 11.2343 4.34775 11.2343 3.83017C11.2343 3.31259 11.6523 2.89462 12.1699 2.89462C12.6875 2.89462 13.1054 3.31259 13.1054 3.83017C13.1056 3.95307 13.0815 4.0748 13.0345 4.18837C12.9876 4.30195 12.9187 4.40514 12.8318 4.49205C12.7449 4.57895 12.6417 4.64786 12.5281 4.69482C12.4145 4.74178 12.2928 4.76587 12.1699 4.76572Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    </div>
    <div class="menu-container">
        <div class="menu">
            <div class="menu-left">
                <div id="toggleNav" @click="drawerStatus = true">
                    <svg
                        width="19"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
                <div class="logo">
                    <router-link to="/" class="nav-link">
                        <svg
                            width="34"
                            height="41"
                            viewBox="0 0 34 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.0332 0.945312L0.296997 10.8636V23.0707L17.0332 32.989L30.4589 25.3596V28.9836L17.0332 36.9945L0.296997 26.8855V31.2724L17.0332 41L33.7694 31.2724V19.0653L20.3436 26.8855V23.0707L33.7694 15.0598V10.8636L17.0332 0.945312Z"
                                fill="#0156FF"
                            />
                        </svg>
                    </router-link>
                </div>
                <ul class="menu-bar" id="nav-left">
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link">Laptops</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link">Desktop PCs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link"
                            >Networking Devices</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link"
                            >Printers & Scanners</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link">PC Parts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link"
                            >All Other Products</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link">Repairs</router-link>
                    </li>
                    <li class="nav-item">
                        <div class="deal-container">
                            <el-button round type="primary" class="outline"
                                >Our Deals</el-button
                            >
                        </div>
                    </li>
                </ul>
            </div>
            <div class="menu-right">
                <ul class="menu-bar">
                    <li class="nav-item">
                        <div class="search-box">
                            <el-input
                                type="text"
                                v-if="showSearchBox"
                                v-model="searchContent"
                            />
                            <ui-icon-button @click="toggleSearchBox" :outline="false"
                                ><img
                                    :src="require('@/assets/images/search.png')"
                                    class="icon nav-link"
                            /></ui-icon-button>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="cart-button">
                            <router-link to="/cart">
                                <el-badge :value="cartCount" class="item">
                                    <svg
                                        width="19"
                                        height="17"
                                        viewBox="0 0 19 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.5834 16.8334C12.1359 16.8334 12.6658 16.6139 13.0565 16.2232C13.4472 15.8325 13.6667 15.3026 13.6667 14.7501C13.6667 14.1975 13.4472 13.6676 13.0565 13.2769C12.6658 12.8862 12.1359 12.6667 11.5834 12.6667C11.0308 12.6667 10.5009 12.8862 10.1102 13.2769C9.71951 13.6676 9.50002 14.1975 9.50002 14.7501C9.50002 15.3026 9.71951 15.8325 10.1102 16.2232C10.5009 16.6139 11.0308 16.8334 11.5834 16.8334ZM4.29168 16.8334C4.84422 16.8334 5.37412 16.6139 5.76482 16.2232C6.15552 15.8325 6.37502 15.3026 6.37502 14.7501C6.37502 14.1975 6.15552 13.6676 5.76482 13.2769C5.37412 12.8862 4.84422 12.6667 4.29168 12.6667C3.73915 12.6667 3.20925 12.8862 2.81854 13.2769C2.42784 13.6676 2.20835 14.1975 2.20835 14.7501C2.20835 15.3026 2.42784 15.8325 2.81854 16.2232C3.20925 16.6139 3.73915 16.8334 4.29168 16.8334ZM17.8729 2.16987C18.133 2.16149 18.3796 2.05229 18.5605 1.86538C18.7415 1.67846 18.8427 1.42849 18.8427 1.16831C18.8427 0.908135 18.7415 0.658159 18.5605 0.471245C18.3796 0.284332 18.133 0.175135 17.8729 0.166748H16.674C15.7344 0.166748 14.9219 0.818831 14.7177 1.7355L13.4125 7.61258C13.2083 8.52925 12.3959 9.18133 11.4563 9.18133H3.63127L2.12918 3.17091H11.8636C12.1212 3.15916 12.3643 3.04856 12.5424 2.86211C12.7206 2.67567 12.82 2.42773 12.82 2.16987C12.82 1.91201 12.7206 1.66408 12.5424 1.47763C12.3643 1.29119 12.1212 1.18059 11.8636 1.16883H2.12918C1.82467 1.16874 1.52414 1.23808 1.25045 1.37157C0.976755 1.50507 0.737101 1.69921 0.549702 1.93923C0.362303 2.17925 0.232094 2.45884 0.168974 2.75674C0.105852 3.05464 0.111483 3.36302 0.185434 3.65841L1.68752 9.66675C1.7958 10.1003 2.04594 10.4852 2.39815 10.7602C2.75036 11.0352 3.18441 11.1845 3.63127 11.1845H11.4563C12.3679 11.1846 13.2524 10.8738 13.9635 10.3033C14.6747 9.73287 15.17 8.93693 15.3677 8.04695L16.674 2.16987H17.8729Z"
                                            fill="black"
                                        />
                                    </svg>
                                </el-badge>
                            </router-link>
                        </div>
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
    </div>

    <el-drawer v-model="drawerStatus" title="Menu" direction="ltr">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="true">
            <el-menu-item index="1">
                <span>Laptops</span>
            </el-menu-item>
            <el-menu-item index="2">
                <span>Desktop PCs</span>
            </el-menu-item>
            <el-menu-item index="3">
                <span>Networking Devices</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span>Printers & Scanners</span>
            </el-menu-item>
            <el-menu-item index="5">
                <span>PC Parts</span>
            </el-menu-item>
            <el-menu-item index="6">
                <span>All Other Products</span>
            </el-menu-item>
            <el-menu-item index="7">
                <span>Repairs</span>
            </el-menu-item>
        </el-menu>
    </el-drawer>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { productModule } from '../../modules/shop/store';
import _ from 'lodash';
@Options({})
export default class Topmenu extends Vue {
    showSearchBox = false;
    searchContent = '';
    drawerStatus = false;

    @Watch('searchContent')
    updateSearchContent(val: string): void {
        _.debounce(() => {
            productModule.setSearchContent(val);
        }, 500)();
    }

    toggleSearchBox(): void {
        this.showSearchBox = !this.showSearchBox;
    }

    get cartCount(): number {
        return productModule.cartCount;
    }
}
</script>
<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
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
.deal-container {
    display: flex;
    align-items: center;
}
.outline {
    background-color: inherit;
    color: #0156ff;
    border: 2px solid #0156ff;
    box-sizing: border-box;
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
}
.icon {
    width: 15px;
    height: 15px;
    font-weight: 600 !important;
}
.menu-right {
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
.search-box {
    display: flex;
    align-items: center;
}
.top-container {
    background: #020202;
    color: #ffffff;
    padding: 8px 0 9px 0;
    font-size: 12px;
    font-weight: 600;
}
.top-menu {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
}

.text-gray {
    color: #acacac !important;
}
.text-underline {
    border-bottom: 2px solid #ffffff;
}
.info {
    display: flex;
    gap: 5px;
}
.cart-button {
    display: flex;
    align-items: center;
}
@media only screen and (max-width: 1024px) {
    #nav-left {
        display: none !important;
    }
    #toggleNav {
        display: flex !important;
        align-items: center;
    }
}
@media only screen and (max-width: 768px) {
    .top-container {
        display: none;
    }
}
.menu-left {
    display: flex;
    gap: 25px;
}
.logo {
    margin-left: 10px;
}
#toggleNav {
    display: none;
}
.menu-container {
    border-bottom: 1px solid #cacdd8;
}
</style>
<style>
.el-badge__content--primary {
    background: #0156ff !important;
}
</style>
