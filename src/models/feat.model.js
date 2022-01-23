module.exports = (sequelize, Sequelize) => {
  const Feat = sequelize.define('Feat', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    source: {
      type: Sequelize.STRING
    },
    page: {
      type: Sequelize.INTEGER
    },
    otherSources: {
      type: Sequelize.JSON
    },
    prerequisite: {
      type: Sequelize.JSON
    },
    ability: {
      type: Sequelize.JSON
    },
    additionalSpells: {
      type: Sequelize.JSON
    },
    entries: {
      type: Sequelize.JSON
    }
  });
  return Feat;
};
