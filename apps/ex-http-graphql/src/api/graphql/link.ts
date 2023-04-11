import { extendType } from 'nexus';

export const LinkQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.string('info', {
      resolve() {
        return 'this is info.';
      },
    });
  },
});
