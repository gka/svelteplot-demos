import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dsv from '@rollup/plugin-dsv';
import { autoType } from 'd3-dsv';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    dsv({
      processRow: (row) => autoType(row),
    }),
  ],
});
