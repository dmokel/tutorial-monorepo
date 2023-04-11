/* eslint-disable no-console */
import { build } from 'esbuild';
import { copy } from 'esbuild-plugin-copy';

build({
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  entryPoints: ['./src/app.ts'],
  format: 'cjs',
  target: 'node16.0',
  inject: ['./env/load-env.ts'],
  loader: {
    '.png': 'file',
  },
  outfile: './dist/app.js',
  plugins: [
    copy({
      resolveFrom: 'cwd',
      assets: [
        {
          from: ['./node_modules/jimp/fonts/**/*'],
          to: ['./dist/fonts'],
        },
      ],
    }),
  ],
})
  .then(() => console.log('⚡ Done'))
  .catch((e) => {
    console.log('Build not successful', e.message);
    process.exit(1);
  });
