import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

export default defineConfig({
    root: 'src',
    build: {
        assetsDir: 'assets',
        outDir: 'dist',
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
