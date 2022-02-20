import dbConfig from '@/config/db.config.js';
import Sequelize from 'sequelize';
import Test from './test.model.js';
import Spell from './spell.model.js';
import Feat from './feat.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

export default {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Test: Test(sequelize, Sequelize),
  Spell: Spell(sequelize, Sequelize),
  Feat: Feat(sequelize, Sequelize),
};
