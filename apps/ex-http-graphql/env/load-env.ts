import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), 'env', `${process.env.SERVER_ENV ?? ''}.env`) });
