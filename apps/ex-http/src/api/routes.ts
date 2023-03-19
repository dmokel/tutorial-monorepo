import { sleep } from '@data-farmer/utils';
import { FastifyInstance } from 'fastify';

export const routes = async (server: FastifyInstance) => {
  server.get('/', async () => {
    await sleep(5000);
    return `Http and Graphql Server ${new Date()}`;
  });
};
