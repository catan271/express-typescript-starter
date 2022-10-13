import { createServer } from 'http';
import { app } from './app';

const server = createServer(app);

server.listen(process.env.PORT, () => {
    console.log('Server listening on http://localhost:' + process.env.PORT);
});
