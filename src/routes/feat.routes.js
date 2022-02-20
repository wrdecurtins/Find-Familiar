import feats from '@/controllers/feat.controller';
import express from 'express';
export default (app) => {
  var router = express.Router();

  router.get('/', feats.findAll);

  app.use('/feat', router);
};
