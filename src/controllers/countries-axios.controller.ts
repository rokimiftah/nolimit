import axios from 'axios';
import { Request, Response } from 'express';

// Receive all countries with Axios
export const getAllCountriesWithAxios = async (req: Request, res: Response) => {
  try {
    const query = `
    query GetCountry {
      countries {
        name
        languages {
          name
        }
      }
    }
  `;

    const response = await axios.post(
      'https://countries.trevorblades.com/graphql',
      { query }
    );

    const { data } = response.data;

    res.json({ data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error });
  }
};

