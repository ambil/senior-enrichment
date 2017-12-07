'use strict';

const db = require('./server/db/models').db
const app = require('./server')
const PORT = 1337;

db.sync()

.then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`Server gettin' managed on ${PORT}`))
});

