/* eslint-disable no-console */
import express from 'express';
import http from 'http';
import middlewaresConfig from './server/config/middlewares';
import chatConfig from './server/modules/chat/chat-config'
import {chatAppRoutes, fbAppRoutes} from './server/modules';

const app = express();
const server = http.createServer(app);

// middlewares
middlewaresConfig(app);

// socket.io config
chatConfig(server);
// app.get('/', (req, res) => {
//   res.send('tone analyzer chat-bot is running');
// });

app.use('/tn', [chatAppRoutes, fbAppRoutes]);

const PORT = process.env.PORT || 3000;


server.listen(PORT, err => {
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
