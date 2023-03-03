'use strict';

import { createServer } from './src/createServer';

const server = createServer();
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
