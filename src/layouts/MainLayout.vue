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
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
}
</style>
