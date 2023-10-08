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

// Receive country by code with Axios
export const getCountryWithAxios = async (req: Request, res: Response) => {
  try {
    const code = req.params.code.toUpperCase();

    const query = `
    query getOneCountry($code: ID!){
      country (code: $code) {
        awsRegion
        capital
        code
        currencies
        currency
        emoji
        emojiU
        name
        native
        phone
        phones
      }
    }
  `;

    const response = await axios.post(
      'https://countries.trevorblades.com/graphql',
      {
        query,
        variables: { code }
      }
    );

    const { data } = response.data;

    res.json({ data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};
