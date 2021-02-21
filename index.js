const https = require('https');
const express = require('express');
const getCertificate = require('webpack-dev-server/lib/utils/getCertificate');

const app = express();
const port = 3000;
const fakeCert = getCertificate({ info: () => {} });

const options = {
  key: fakeCert,
  cert: fakeCert,
};

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start server
const server = https.createServer(options, app);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('server starting on port: 3000');
});
