module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("Test", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Test;
};
