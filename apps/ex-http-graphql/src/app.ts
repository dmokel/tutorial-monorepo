import { start } from './api';

const showEnv = () => ({});
console.log('env:', showEnv());

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(`unhandledRejection, err: ${err}`);

  // For now, just skip any unhandled errors
  // process.exit(1);
});

const setup = async () => {
  /**empty */
};

setup().then(() => start());
