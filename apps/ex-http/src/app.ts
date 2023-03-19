import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), 'env', `${process.env.SERVER_ENV ?? ''}.env`) });

import { start } from './api';

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
