import db from '@/models';
const models = {Spell: db.Spell, Feat: db.Feat};
import Spells from '@/static/spells';
import Feats from '@/static/feats';
import sequelize_fixtures from 'sequelize-fixtures';
import prepFixture from '@/modules/fixture';
export default () => {
  sequelize_fixtures.loadFixtures(prepFixture(Spells, 'Spell', true), models);
  sequelize_fixtures.loadFixtures(prepFixture(Feats, 'Feat', true), models);
};
