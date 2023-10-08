import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Receive all countries with Prisma
export const getAllCountriesWithPrisma = async (
  req: Request,
  res: Response
) => {
  try {
    const countries = await prisma.country.findMany({
      select: {
        name: true,
        languages: {
          select: {
            name: true,
            native: true
          }
        }
      }
    });
    res.json({ data: { countries } });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error });
  }
};

// Receive country by code with Prisma
export const getCountryWithPrisma = async (req: Request, res: Response) => {
  try {
    const code = req.params.code.toUpperCase();

    const country = await prisma.country.findUnique({
      where: {
        code
      },
      select: {
        awsRegion: true,
        capital: true,
        code: true,
        currencies: true,
        currency: true,
        emoji: true,
        emojiU: true,
        languages: {
          select: {
            name: true,
            native: true
          }
        },
        name: true,
        phone: true,
        phones: true
      }
    });

    if (!country) {
      res.status(404).json({ message: 'Country not found!' });
    }

    res.status(200).json({ data: { country } });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error });
  }
};
