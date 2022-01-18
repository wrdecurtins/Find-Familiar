module.exports = app => {
  const spells = require('@/controllers/spell.controller.js');

  app.get('/spell', spells.findAll);
};
