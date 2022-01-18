const db = require('@/models');
const models = {Spell: db.Spell};
const Spells = require('@/static/spells');
const sequelize_fixtures = require('sequelize-fixtures');
const prepFixture = require('@/modules/fixture');
module.exports = () => {
  sequelize_fixtures.loadFixtures(prepFixture(Spells, 'Spell', true), models);
};
