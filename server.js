// 

const express = require('express');
const path = require('path')
const request = require('request');
const app = express();
const cors = require("cors");

const corsOptions = {
	origin: "https://gemlux.com/collections/rigging-kits/products.json'"
};

app.use(cors(corsOptions));

// app.get('/data', (req, res, next) => {
//   request('https://gemlux.com/collections/rigging-kits/products.json',
//     function (error, response, body) {
//       res.send(body)
//     });
// });
// const port = process.env.port || 3000;
// app.listen(port, () => {
//   console.log(`From port ${port}`);
// });

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))