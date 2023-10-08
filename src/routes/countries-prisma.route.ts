import { Router } from 'express';

import {
  getAllCountriesWithPrisma,
  getCountryWithPrisma
} from '../controllers/countries-prisma.controller';

const router = Router();

router.get('/', getAllCountriesWithPrisma);
router.get('/:code', getCountryWithPrisma);

export default router;
