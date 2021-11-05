<template>
    <el-card :body-style="{ padding: 0 }" class="login-card">
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
        <div class="login-card-content">
            <div class="p-3">
                <form class="form-horizontal auth-form" action="/">
                    <div class="form-group mb-2">
                        <label class="form-label" for="username">Username</label>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                name="username"
                                id="username"
                                placeholder="Enter username"
                            />
                        </div>
                    </div>
                    <!--end form-group-->

                    <div class="form-group mb-2">
                        <label class="form-label" for="userpassword">Password</label>
                        <div class="input-group">
                            <input
                                type="password"
                                class="form-control"
                                name="password"
                                id="userpassword"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    <!--end form-group-->

                    <div class="form-group row my-3">
                        <div class="col-sm-6">
                            <div class="custom-control custom-switch switch-success">
                                <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customSwitchSuccess"
                                />
                                <label
                                    class="form-label text-muted"
                                    for="customSwitchSuccess"
                                    >Remember me</label
                                >
                            </div>
                        </div>
                        <!--end col-->
                        <div class="col-sm-6 text-end">
                            <a href="auth-recover-pw.html" class="text-muted font-13"
                                ><i class="dripicons-lock"></i> Forgot password?</a
                            >
                        </div>
                        <!--end col-->
                    </div>
                    <!--end form-group-->

                    <div class="form-group mb-0 row">
                        <div class="col-12">
                            <button
                                class="btn btn-primary w-100 waves-effect waves-light"
                                type="button"
                            >
                                Log In <i class="fas fa-sign-in-alt ms-1"></i>
                            </button>
                        </div>
                        <!--end col-->
                    </div>
                    <!--end form-group-->
                </form>
                <!--end form-->
            </div>
        </div>
    </el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class LoginPage extends Vue {
    msg!: string;
}
</script>

<style lang="scss" scoped>
.login-card {
    ::v-deep .el-card__header {
        background-color: #0c213a;
    }
}
.form-group {
    text-align: left;
}
</style>
