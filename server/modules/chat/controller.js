import log from 'log';
import prodConfig from '../../config/config';

const logger = new log('info');

export const chatRoute = async (req, res) => {
  logger.info(req);
  logger.info(prodConfig);
  res.json({'message': 'some route'});
};



