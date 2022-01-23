const db = require('@/models');
const models = {Spell: db.Spell, Feat: db.Feat};
const Spells = require('@/static/spells');
const Feats = require('@/static/feats');
const sequelize_fixtures = require('sequelize-fixtures');
const prepFixture = require('@/modules/fixture');
module.exports = () => {
  sequelize_fixtures.loadFixtures(prepFixture(Spells, 'Spell', true), models);
  sequelize_fixtures.loadFixtures(prepFixture(Feats, 'Feat', true), models);
};
