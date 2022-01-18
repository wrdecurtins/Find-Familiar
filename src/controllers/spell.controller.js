const db = require('@/models');
const Spell = db.Spell;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }
  console.log(req.body);
};

exports.findAll = (req, res) => {
  Spell.findAll().then(data => {
    res.send(data);
  });
};
