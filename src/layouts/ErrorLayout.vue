<template>
    <el-container class="login-page background-img">
        <el-card class="error-card">
            <template #header>
                <div class="text-center p-3">
                    <a href="/" class="logo logo-admin">
                        <img
                            :src="require('@/assets/images/logo.png')"
                            height="50"
                            alt="logo"
                            class="auth-logo"
                        />
                    </a>
                    <h4 class="mt-3 mb-1 fw-semibold text-white font-18">
                        Let's Get Started Dastone
                    </h4>
                    <p class="text-muted mb-0">Sign in to continue to Dastone.</p>
                </div>
            </template>
            <div class="ex-page-content text-center">
                <img
                    :src="require('@/assets/images/error.svg')"
                    alt="0"
                    class=""
                    height="170"
                />
                <h1 class="mt-5 mb-4">404!</h1>
                <h5 class="font-16 text-muted mb-5">Somthing went wrong</h5>
            </div>
            <a class="btn btn-primary w-100 waves-effect waves-light" href="index.html"
                >Back to Dashboard <i class="fas fa-redo ms-1"></i
            ></a>
        </el-card>
    </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ErrorLayout extends Vue {
    code = 404;
}
</script>

<style lang="scss" scoped>
.login-page {
    font-size: 0.9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &.background-img {
        background-image: url('../assets/images/auth-bg.png');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
    }
    .el-card {
        width: 480px;
        max-width: 90%;
    }
}
.error-card {
    ::v-deep .el-card__header {
        background-color: #0c213a;
    }
}
</style>
