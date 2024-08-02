import { purgeCss } from "vite-plugin-tailwind-purgecss";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), purgeCss()],
  // Github Pagesで公開する場合は、base にリポジトリ名を指定
  base: "/my-static-site/",
});
