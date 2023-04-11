import { RouteShorthandOptionsWithHandler } from 'fastify';

export const postOrderV3Options: RouteShorthandOptionsWithHandler = {
  schema: {
    querystring: {
      signature: { type: 'string' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'number' },
        },
      },
    },
  },
  handler: async () => {
    console.log('postOrderV3Options');
    return { succ: 333 };
  },
};
