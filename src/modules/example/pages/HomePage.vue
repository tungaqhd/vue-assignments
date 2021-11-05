<template>
    <div class="home">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-title-box">
                    <div class="row">
                        <div class="col">
                            <h4 class="page-title">Starer</h4>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:void(0);">Dastone</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="javascript:void(0);">Pages</a>
                                </li>
                                <li class="breadcrumb-item active">Starer</li>
                            </ol>
                        </div>
                        <!--end col-->
                        <div class="col-auto align-self-center">
                            <a
                                href="#"
                                class="btn btn-sm btn-outline-primary"
                                id="Dash_Date"
                            >
                                <span class="day-name" id="Day_Name">Today:</span>&nbsp;
                                <span class="" id="Select_date">Oct 5</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="
                                        feather feather-calendar
                                        align-self-center
                                        icon-xs
                                        ms-1
                                    "
                                >
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="18"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </a>
                            <a href="#" class="btn btn-sm btn-outline-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="
                                        feather feather-download
                                        align-self-center
                                        icon-xs
                                    "
                                >
                                    <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->
                </div>
                <!--end page-title-box-->
            </div>
            <!--end col-->
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
    components: {
        HelloWorld,
    },
})
export default class HomePage extends Vue {}
</script>
