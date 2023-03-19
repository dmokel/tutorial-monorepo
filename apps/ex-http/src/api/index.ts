import Fastify from 'fastify';
import { routes } from './routes';

export const start = async () => {
  const server = Fastify({
    logger: false,
  });

  // other register

  // http routes register
  server.register(routes);

  server.listen({ port: 8777, host: '0.0.0.0' }, (_, address) => {
    // eslint-disable-next-line no-console
    console.log(`Server is running at ${address}`);
  });
};
