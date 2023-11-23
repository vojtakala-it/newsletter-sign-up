import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

export default defineConfig({
    root: 'src',
    base: '/sign-up-form',
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    },
    postcss: {
        plugins: [
            autoprefixer(),
            pxtorem({
                rootValue: 16,
                propList: ["*"],
            }),
        ],
    }
});
