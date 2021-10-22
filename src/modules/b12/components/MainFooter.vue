<template>
    <div class="footer">
        <footer-card
            title="Clear & Usable user flows"
            description="Let’s boost yout marketplace"
            color="success"
        >
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
        </footer-card>
        <footer-card
            title="Fine & Styled components"
            description="Speed up with Setproduct templates"
            color="primary"
        >
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
            </svg>
        </footer-card>
        <footer-card
            title="Customizable & Reusable"
            description="Take our UX patterns and rebuild"
            color="info"
        >
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
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
            </svg>
        </footer-card>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FooterCard from './FooterCard.vue';
@Options({
    components: { FooterCard },
})
export default class MainFooter extends Vue {
    title!: string;
}
</script>
<style scoped>
.footer {
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
}
@media only screen and (max-width: 1024px) {
    .footer {
        flex-direction: column;
    }
}
</style>