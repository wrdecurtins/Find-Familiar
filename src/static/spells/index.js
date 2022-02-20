import phb from './spells-phb.json';
import ai from './spells-ai.json';
import egw from './spells-ftd.json';
import ftd from './spells-ftd.json';
import ggr from './spells-ggr.json';
import idrotf from './spells-idrotf.json';
import scc from './spells-scc.json';
import tce from './spells-tce.json';
import xge from './spells-xge.json';

export default [
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
