import TestRoutes from '@/routes/test.routes';
import SpellRoutes from '@/routes/spell.routes';
import FeatRoutes from '@/routes/feat.routes';
export default (app) => {
  TestRoutes(app);
  SpellRoutes(app);
  FeatRoutes(app);
};
