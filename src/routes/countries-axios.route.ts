import { Router } from 'express';

import {
  getAllCountriesWithAxios,
  getCountryWithAxios
} from '../controllers/countries-axios.controller';

const router = Router();

router.get('/', getAllCountriesWithAxios);
router.get('/:code', getCountryWithAxios);

export default router;
