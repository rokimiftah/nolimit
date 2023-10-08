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

