module.exports = app => {
  require('@/routes/test.routes')(app);
  require('@/routes/spell.routes')(app);
};
