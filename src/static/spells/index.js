const phb = require('./spells-phb.json');
const ai = require('./spells-ai.json');
const egw = require('./spells-ftd.json');
const ftd = require('./spells-ftd.json');
const ggr = require('./spells-ggr.json');
const idrotf = require('./spells-idrotf.json');
const scc = require('./spells-scc.json');
const tce = require('./spells-tce.json');
const xge = require('./spells-xge.json');

module.exports = [
  ...phb.spell,
  ...xge.spell,
  ...ai.spell,
  ...egw.spell,
  ...ggr.spell,
  ...idrotf.spell,
  ...scc.spell,
  ...tce.spell,
  //error when including fizbans treasury of dragons
  ...ftd.spell,
];
