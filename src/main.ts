import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import countryRoutesAxios from './routes/countries-axios.route';
import countryRoutesPrisma from './routes/countries-prisma.route';

const chalk = require('chalk');

const app: Express = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Roki Miftah Kamaludin - NoLimit' });
});

// Direct using Axios
app.use('/api/v1/countries', countryRoutesAxios);

// Persistence in database using Prisma ORM
app.use('/api/v2/countries', countryRoutesPrisma);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    'Endpoint Axios\t(v1): ',
    chalk.bgWhite(
      chalk.black('https://nolimit.projects.rokimiftah.id/api/v1/countries')
    )
  );
  console.log(
    'Endpoint Prisma\t(v2): ',
    chalk.bgWhite(
      chalk.black('https://nolimit.projects.rokimiftah.id/api/v2/countries\n')
    )
  );
});
