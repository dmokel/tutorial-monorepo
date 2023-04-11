import { schema } from ':api/schema';
import Fastify from 'fastify';
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  Request,
  sendResult,
  shouldRenderGraphiQL,
} from 'graphql-helix';
import { routes } from './routes';

export const start = async () => {
  const server = Fastify({
    logger: false,
  });

  // other register

  // http routes register
  server.register(routes);

  // graphql endpoint register
  server.route({
    method: ['POST', 'GET'],
    url: '/graphql',
    handler: async (req, reply) => {
      const request: Request = {
        headers: req.headers,
        method: req.method,
        query: req.query,
        body: req.body,
      };

      if (shouldRenderGraphiQL(request)) {
        reply.header('Content-Type', 'text/html');
        reply.send(
          renderGraphiQL({
            endpoint: '/graphql',
          })
        );
        return;
      }

      const { operationName, query, variables } = getGraphQLParameters(request);

      const result = await processRequest({
        request,
        schema,
        operationName,
        query,
        variables,
      });

      await sendResult(result, reply.raw);
    },
  });

  server.listen({ port: 7778, host: '0.0.0.0' }, (_, address) => {
    console.log(`Server is running at ${address}`);
  });
};
