module.exports = app => {
  const spells = require('@/controllers/spell.controller.js');

  var router = require('express').Router();

  router.get('/', spells.findAll);

  app.use('/spell', router);
};
