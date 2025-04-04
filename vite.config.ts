import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';


export default defineConfig({
    plugins: [
        dts(),
    ],
    build  : {
        outDir: 'dist',
        target: 'esnext',
        lib   : {
            entry  : 'src/index.ts',
            formats: [ 'es', 'cjs' ],
        },
    },
});