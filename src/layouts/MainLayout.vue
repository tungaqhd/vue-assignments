<template>
    <layouts-topmenu />
    <div class="container">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts">
import { appModule } from '@/store/app';
import { Options, Vue } from 'vue-class-component';
import { productModule } from '@/modules/shop/store';

@Options({})
export default class MainLayout extends Vue {
    created(): void {
        const className = ['main_body'];
        if (appModule.isMiniSidebar) {
            className.push('mini-sidebar');
            if (appModule.isExpandMenu) {
                className.push('expand-menu');
            }
        }
        className.forEach((name) => {
            document.body.classList.add(name);
        });

        const cartStorage = localStorage.getItem('cart');
        if (cartStorage && cartStorage !== 'null') {
            const cart = JSON.parse(cartStorage);
            const prodIds = Object.keys(cart);
            const cartCount = prodIds.reduce((prev: number, curr: string): number => {
                return prev + cart[curr];
            }, 0);
            productModule.setCartCount(cartCount);
        }
    }
}
</script>

<style scoped>
.container {
    padding: 0 5px;
}
</style>
