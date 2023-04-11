import * as types from ':api/graphql';
import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), './src/api/schema.graphql'),
    typegen: join(process.cwd(), './src/api/nexus-typegen.ts'),
  },
});
