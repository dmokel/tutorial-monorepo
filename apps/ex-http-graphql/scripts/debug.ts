/* eslint-disable no-console */
import { build } from 'esbuild';

build({
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: 'node',
  entryPoints: ['./src/app.ts'],
  format: 'cjs',
  target: 'node16.0',
  inject: ['./env/load-env.ts'],
  outfile: './dist/app.js',
})
  .then(() => console.log('⚡ Done'))
  .catch((e) => {
    console.log('Build not successful', e.message);
    process.exit(1);
  });
