import db from '@/models';
const Feat = db.Feat;
const Op = db.sequelize.Op;

const findAll = (req, res) => {
  Feat.findAll().then(data => {
    res.send(data);
  });
};

export default {
  findAll
};
