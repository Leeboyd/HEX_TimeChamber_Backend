require('dotenv').config();
const server = require('./server')

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`API ${process.env.NODE_ENV} server started on ${port}`));
