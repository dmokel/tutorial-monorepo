import * as ordersEndpoints from ':api/endpoints/orders';
import { sleep } from '@data-farmer/utils';
import { FastifyInstance } from 'fastify';

export const routes = async (server: FastifyInstance) => {
  server.get('/', async () => {
    await sleep(5000);
    return `Http and Graphql Server ${new Date()}`;
  });

  server.post('/order/v3', ordersEndpoints.postOrderV3Options);
};
