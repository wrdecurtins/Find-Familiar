module.exports = app => {
  const feats = require('@/controllers/feat.controller');

  var router = require('express').Router();

  router.get('/', feats.findAll);

  app.use('/feat', router);
};
