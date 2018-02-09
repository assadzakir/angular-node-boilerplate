/* eslint-disable no-console */
import express from 'express';
import middlewaresConfig from './server/config/middlewares';
import {chatAppRoutes} from './server/modules';

const app = express();

// middlewares
middlewaresConfig(app);

// app.get('/', (req, res) => {
//   res.send('tone analyzer chat-bot is running');
// });

app.use('/tn', [chatAppRoutes]);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});

exports.app = app;

exports.stop = function(){
  server.close();
};
