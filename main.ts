'use strict';

import { createServer } from './src/createServer';

const server = createServer();
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
