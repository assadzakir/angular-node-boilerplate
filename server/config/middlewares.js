import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
// import swaggerUiExpress from 'swagger-ui-express';
// import swaggerDocument from '../../swagger.json';

export default app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../../dist')));
  // app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
};
