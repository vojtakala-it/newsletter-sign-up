import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173",
        env: {
            CYPRESS_BASE_URL: "https://newsletter-sign-up-three-rosy.vercel.app/",
        },
        setupNodeEvents(on, config) {
        },
        testIsolation: false,
    },
});
