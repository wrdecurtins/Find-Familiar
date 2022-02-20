import db from '@/models';
const Spell = db.Spell;
const Op = db.sequelize.Op;

const create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }
};

const findAll = (req, res) => {
  Spell.findAll().then(data => {
    res.send(data);
  });
};

export default {
  create,
  findAll
};
