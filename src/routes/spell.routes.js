import spells from '@/controllers/spell.controller.js';
import express from 'express';
export default (app) => {
  var router = express.Router();

  router.get('/', spells.findAll);

  app.use('/spell', router);
};
