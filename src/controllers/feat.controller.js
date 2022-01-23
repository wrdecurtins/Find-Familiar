const db = require('@/models');
const Feat = db.Feat;
const Op = db.sequelize.Op;

exports.findAll = (req, res) => {
  Feat.findAll().then(data => {
    res.send(data);
  });
};
