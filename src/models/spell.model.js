module.exports = (sequelize, Sequelize) => {
  const Spell = sequelize.define('Spell', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    level: {
      type: Sequelize.INTEGER
    },
    school: {
      type: Sequelize.TEXT('tiny')
    },
    time: {
      type: Sequelize.JSON
    },
    range: {
      type: Sequelize.JSON
    },
    components: {
      type: Sequelize.JSON
    },
    duration: {
      type: Sequelize.JSON
    },
    classes: {
      type: Sequelize.JSON
    },
    source: {
      type: Sequelize.STRING
    },
    entries: {
      type: Sequelize.JSON
    },
    entriesHigherLevel: {
      type: Sequelize.JSON
    }
  });
  return Spell;
};
