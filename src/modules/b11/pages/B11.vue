
<template>
    <div class="b1">
        <header>
            <h1 class="heading">Inside Open Art</h1>
        </header>
        <div class="content">
            <base-card title="4pt grid system">
                <template #default>
                    <svg
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
                            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        /></svg
                ></template>
                <template #description>
                    Base on 4pt grid system. Our UI kit help you create perfect white
                    space
                </template>
            </base-card>
            <base-card title="Color style">
                <template #default>
                    <svg
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
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        /></svg
                ></template>
                <template #description>
                    All color in OpenArt are styled. You can change all design color with
                    one click
                </template>
            </base-card>
            <base-card title="Free font">
                <template #default>
                    <svg
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        /></svg
                ></template>
                <template #description>
                    <span>OpenArt use Epilogue font family</span>
                    <span>Available with open licence in gooogle font</span>
                </template>
            </base-card>
            <base-card title="Darkmode avaiable">
                <template #default>
                    <svg
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        /></svg
                ></template>
                <template #description>
                    <span>Our UI Kit support darkmode</span>
                    <span>Chage your design to dark mode with one click</span>
                </template>
            </base-card>
            <base-card title="Easy to customize">
                <template #default>
                    <svg
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
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        /></svg
                ></template>
                <template #description> Create any design with OpenArt UI kits</template>
            </base-card>
            <base-card title="Variant components">
                <template #default>
                    <svg
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
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        /></svg
                ></template>
                <template #description>
                    All component art variant, easy to design, easy to control
                </template>
            </base-card>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BaseCard from '../components/BaseCard.vue';
@Options({
    components: { BaseCard },
})
export default class B11 extends Vue {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600&display=swap');
* {
    padding: 0;
    margin: 0;
}
.b1 {
    font-family: 'Epilogue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.b1 {
    color: #2c3e50;
    background-image: linear-gradient(
        to right bottom,
        #e5e5e5,
        #e7e4e8,
        #ebe3ea,
        #f1e1e8,
        #f8dfe4,
        #fad9e0,
        #fcd2dc,
        #feccd8,
        #f5c1df,
        #e1b9eb,
        #bfb5f8,
        #8bb5ff
    );
}

header {
    text-align: center;
    padding-top: 116.56px;
}
.heading {
    font-weight: bolder;
    line-height: 64px;
}
.content {
    display: flex;
    padding: 20px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
span {
    display: block;
}
</style>