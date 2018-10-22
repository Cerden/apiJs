import * as Hapi from 'hapi';
import testObject from './models/testObject';

const server = new Hapi.Server({
  host: 'localhost',
  port: '8000',
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request: Hapi.Request, h: any): string => 'hello world',
});

server.route({
  method: 'GET',
  path: '/test/{name?}',
  handler: (request: Hapi.Request, h: any) => {
    const name = request.params.name ? encodeURIComponent(request.params.name) : 'testName';
    return testObject({ name });
  },
});
  
const start = async () => {
    await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

start();
