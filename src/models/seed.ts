import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const run = async () => {
  await prisma.country.upsert({
    where: {
      code: 'AD'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Andorra la Vella',
      code: 'AD',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇦🇩',
      emojiU: 'U+1F1E6 U+1F1E9',
      languages: {
        create: {
          name: 'Catalan',
          native: 'Català'
        }
      },
      name: 'Andorra',
      phone: '376',
      phones: ['376']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AE'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Abu Dhabi',
      code: 'AE',
      currencies: ['AED'],
      currency: 'AED',
      emoji: '🇦🇪',
      emojiU: 'U+1F1E6 U+1F1EA',
      languages: {
        create: {
          name: 'Arabic',
          native: 'العربية'
        }
      },
      name: 'United Arab Emirates',
      phone: '971',
      phones: ['971']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AF'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Kabul',
      code: 'AF',
      currencies: ['AFN'],
      currency: 'AFN',
      emoji: '🇦🇫',
      emojiU: 'U+1F1E6 U+1F1EB',
      languages: {
        create: [
          {
            name: 'Pashto',
            native: 'پښتو'
          },
          {
            name: 'Uzbek',
            native: 'Ўзбек'
          },
          {
            name: 'Turkmen',
            native: 'Туркмен / تركمن'
          }
        ]
      },
      name: 'Afghanistan',
      phone: '93',
      phones: ['93']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AG'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: "Saint John's",
      code: 'AG',
      currencies: ['XCD'],
      currency: 'XCD',
      emoji: '🇦🇬',
      emojiU: 'U+1F1E6 U+1F1EC',
      languages: {
        create: {
          name: 'English',
          native: 'English'
        }
      },
      name: 'Anguilla',
      phone: '1264',
      phones: ['1264']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AL'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Tirana',
      code: 'AL',
      currencies: ['ALL'],
      currency: 'ALL',
      emoji: '🇦🇱',
      emojiU: 'U+1F1E6 U+1F1F1',
      languages: {
        create: {
          name: 'Albanian',
          native: 'Shqip'
        }
      },
      name: 'Albania',
      phone: '355',
      phones: ['355']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AG'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Yerevan',
      code: 'AM',
      currencies: ['AMD'],
      currency: 'AMD',
      emoji: '🇦🇲',
      emojiU: 'U+1F1E6 U+1F1F2',
      languages: {
        create: [
          {
            name: 'Armenian',
            native: 'Հայերեն'
          },
          {
            name: 'Russian',
            native: 'Русский'
          }
        ]
      },
      name: 'Armenia',
      phone: '374',
      phones: ['374']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AO'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Luanda',
      code: 'AO',
      currencies: ['AOA'],
      currency: 'AOA',
      emoji: '🇦🇴',
      emojiU: 'U+1F1E6 U+1F1F4',
      languages: {
        create: [
          {
            name: 'Portuguese',
            native: 'Português'
          }
        ]
      },
      name: 'Angola',
      phone: '244',
      phones: ['244']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AQ'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: null,
      code: 'AQ',
      currencies: [''],
      currency: null,
      emoji: '🇦🇶',
      emojiU: 'U+1F1E6 U+1F1F6',
      name: 'Antarctica',
      phone: '672',
      phones: ['672']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AR'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Buenos Aires',
      code: 'AR',
      currencies: ['ARS'],
      currency: 'ARS',
      emoji: '🇦🇷',
      emojiU: 'U+1F1E6 U+1F1F7',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          },
          {
            name: 'Guarani',
            native: "Avañe'ẽ"
          }
        ]
      },
      name: 'Argentina',
      phone: '54',
      phones: ['54']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AS'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-2',
      capital: 'Pago Pago',
      code: 'AS',
      currencies: ['USD'],
      currency: 'USD',
      emoji: '🇦🇸',
      emojiU: 'U+1F1E6 U+1F1F8',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'Samoan',
            native: 'Gagana Samoa'
          }
        ]
      },
      name: 'American Samoa',
      phone: '1684',
      phones: ['1684']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AT'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Vienna',
      code: 'AT',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇦🇹',
      emojiU: 'U+1F1E6 U+1F1F9',
      languages: {
        create: [
          {
            name: 'German',
            native: 'Deutsch'
          }
        ]
      },
      name: 'Austria',
      phone: '43',
      phones: ['43']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AU'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-2',
      capital: 'Canberra',
      code: 'AU',
      currencies: ['AUD'],
      currency: 'AUD',
      emoji: '🇦🇺',
      emojiU: 'U+1F1E6 U+1F1FA',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Australia',
      phone: '61',
      phones: ['61']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AW'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Oranjestad',
      code: 'AW',
      currencies: ['AWG'],
      currency: 'AWG',
      emoji: '🇦🇼',
      emojiU: 'U+1F1E6 U+1F1FC',
      languages: {
        create: [
          {
            name: 'Dutch',
            native: 'Nederlands'
          },
          {
            name: 'Panjabi / Punjabi',
            native: 'ਪੰਜਾਬੀ / पंजाबी / پنجابي'
          }
        ]
      },
      name: 'Aruba',
      phone: '297',
      phones: ['297']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AX'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-1',
      capital: 'Mariehamn',
      code: 'AX',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇦🇽',
      emojiU: 'U+1F1E6 U+1F1FD',
      languages: {
        create: [
          {
            name: 'Swedish',
            native: 'Svenska'
          }
        ]
      },
      name: 'Åland',
      phone: '358',
      phones: ['358']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'AZ'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Baku',
      code: 'AZ',
      currencies: ['AZN'],
      currency: 'AZN',
      emoji: '🇦🇿',
      emojiU: 'U+1F1E6 U+1F1FF',
      languages: {
        create: [
          {
            name: 'Azerbaijani',
            native: 'Azərbaycanca / آذربايجان'
          }
        ]
      },
      name: 'Azerbaijan',
      phone: '994',
      phones: ['994']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BA'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Sarajevo',
      code: 'BA',
      currencies: ['BAM'],
      currency: 'BAM',
      emoji: '🇧🇦',
      emojiU: 'U+1F1E7 U+1F1E6',
      languages: {
        create: [
          {
            name: 'Bosnian',
            native: 'Bosanski'
          },
          {
            name: 'Croatian',
            native: 'Hrvatski'
          },
          {
            name: 'Serbian',
            native: 'Српски'
          }
        ]
      },
      name: 'Bosnia and Herzegovina',
      phone: '387',
      phones: ['387']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BB'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Bridgetown',
      code: 'BB',
      currencies: ['BBD'],
      currency: 'BBD',
      emoji: '🇧🇧',
      emojiU: 'U+1F1E7 U+1F1E7',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Barbados',
      phone: '1246',
      phones: ['1246']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BD'
    },
    update: {},
    create: {
      awsRegion: 'ap-south-1',
      capital: 'Dhaka',
      code: 'BD',
      currencies: ['BDT'],
      currency: 'BDT',
      emoji: '🇧🇩',
      emojiU: 'U+1F1E7 U+1F1E9',
      languages: {
        create: [
          {
            name: 'Bengali',
            native: 'বাংলা'
          }
        ]
      },
      name: 'Bangladesh',
      phone: '880',
      phones: ['880']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BE'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-3',
      capital: 'Brussels',
      code: 'BE',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇧🇪',
      emojiU: 'U+1F1E7 U+1F1EA',
      languages: {
        create: [
          {
            name: 'Dutch',
            native: 'Nederlands'
          },
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'German',
            native: 'Deutsch'
          }
        ]
      },
      name: 'Belgium',
      phone: '32',
      phones: ['32']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BF'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Ouagadougou',
      code: 'BF',
      currencies: ['XOF'],
      currency: 'XOF',
      emoji: '🇧🇫',
      emojiU: 'U+1F1E7 U+1F1EB',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Peul',
            native: 'Fulfulde'
          }
        ]
      },
      name: 'Burkina Faso',
      phone: '226',
      phones: ['226']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BG'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Sofia',
      code: 'BG',
      currencies: ['BGN'],
      currency: 'BGN',
      emoji: '🇧🇬',
      emojiU: 'U+1F1E7 U+1F1EC',
      languages: {
        create: [
          {
            name: 'Bulgarian',
            native: 'Български'
          }
        ]
      },
      name: 'Bulgaria',
      phone: '359',
      phones: ['359']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BH'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Manama',
      code: 'BH',
      currencies: ['BHD'],
      currency: 'BHD',
      emoji: '🇧🇭',
      emojiU: 'U+1F1E7 U+1F1ED',
      languages: {
        create: [
          {
            name: 'Arabic',
            native: 'العربية'
          }
        ]
      },
      name: 'Bahrain',
      phone: '973',
      phones: ['973']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BI'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Bujumbura',
      code: 'BI',
      currencies: ['BIF'],
      currency: 'BIF',
      emoji: '🇧🇮',
      emojiU: 'U+1F1E7 U+1F1EE',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Kirundi',
            native: 'Kirundi'
          }
        ]
      },
      name: 'Burundi',
      phone: '257',
      phones: ['257']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BJ'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Porto-Novo',
      code: 'BJ',
      currencies: ['XOF'],
      currency: 'XOF',
      emoji: '🇧🇯',
      emojiU: 'U+1F1E7 U+1F1EF',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Benin',
      phone: '229',
      phones: ['229']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BL'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Gustavia',
      code: 'BL',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇧🇱',
      emojiU: 'U+1F1E7 U+1F1F1',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Saint Barthélemy',
      phone: '590',
      phones: ['590']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BM'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Hamilton',
      code: 'BM',
      currencies: ['BMD'],
      currency: 'BMD',
      emoji: '🇧🇲',
      emojiU: 'U+1F1E7 U+1F1F2',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Bermuda',
      phone: '1441',
      phones: ['1441']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BN'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-1',
      capital: 'Bandar Seri Begawan',
      code: 'BN',
      currencies: ['BND'],
      currency: 'BND',
      emoji: '🇧🇳',
      emojiU: 'U+1F1E7 U+1F1F3',
      languages: {
        create: [
          {
            name: 'Malay',
            native: 'Bahasa Melayu'
          }
        ]
      },
      name: 'Brunei',
      phone: '673',
      phones: ['673']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BO'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Sucre',
      code: 'BO',
      currencies: ['BOB', 'BOV'],
      currency: 'BOB,BOV',
      emoji: '🇧🇴',
      emojiU: 'U+1F1E7 U+1F1F4',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          },
          {
            name: 'Aymara',
            native: 'Aymar'
          },
          {
            name: 'Quechua',
            native: 'Runa Simi'
          }
        ]
      },
      name: 'Bolivia',
      phone: '591',
      phones: ['591']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BQ'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Kralendijk',
      code: 'BQ',
      currencies: ['USD'],
      currency: 'USD',
      emoji: '🇧🇶',
      emojiU: 'U+1F1E7 U+1F1F6',
      languages: {
        create: [
          {
            name: 'Dutch',
            native: 'Nederlands'
          }
        ]
      },
      name: 'Bonaire',
      phone: '5997',
      phones: ['5997']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BR'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Brasília',
      code: 'BR',
      currencies: ['BRL'],
      currency: 'BRL',
      emoji: '🇧🇷',
      emojiU: 'U+1F1E7 U+1F1F7',
      languages: {
        create: [
          {
            name: 'Portuguese',
            native: 'Português'
          }
        ]
      },
      name: 'Brazil',
      phone: '55',
      phones: ['55']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BS'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Nassau',
      code: 'BS',
      currencies: ['BSD'],
      currency: 'BSD',
      emoji: '🇧🇸',
      emojiU: 'U+1F1E7 U+1F1F8',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Bahamas',
      phone: '1242',
      phones: ['1242']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BT'
    },
    update: {},
    create: {
      awsRegion: 'ap-south-1',
      capital: 'Thimphu',
      code: 'BT',
      currencies: ['BTN', 'INR'],
      currency: 'BTN,INR',
      emoji: '🇧🇹',
      emojiU: 'U+1F1E7 U+1F1F9',
      languages: {
        create: [
          {
            name: 'Dzongkha',
            native: 'ཇོང་ཁ'
          }
        ]
      },
      name: 'Bhutan',
      phone: '975',
      phones: ['975']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BV'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: null,
      code: 'BV',
      currencies: ['NOK'],
      currency: 'NOK',
      emoji: '🇧🇻',
      emojiU: 'U+1F1E7 U+1F1FB',
      languages: {
        create: [
          {
            name: 'Norwegian',
            native: 'Norsk'
          },
          {
            name: 'Norwegian Bokmål',
            native: 'Norsk bokmål'
          },
          {
            name: 'Norwegian Nynorsk',
            native: 'Norsk nynorsk'
          }
        ]
      },
      name: 'Bouvet Island',
      phone: '47',
      phones: ['47']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BW'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Gaborone',
      code: 'BW',
      currencies: ['BWP'],
      currency: 'BWP',
      emoji: '🇧🇼',
      emojiU: 'U+1F1E7 U+1F1FC',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'Tswana',
            native: 'Setswana'
          }
        ]
      },
      name: 'Botswana',
      phone: '267',
      phones: ['267']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BY'
    },
    update: {},
    create: {
      awsRegion: 'eu-north-1',
      capital: 'Minsk',
      code: 'BY',
      currencies: ['BYN'],
      currency: 'BYN',
      emoji: '🇧🇾',
      emojiU: 'U+1F1E7 U+1F1FE',
      languages: {
        create: [
          {
            name: 'Belarusian',
            native: 'Беларуская'
          },
          {
            name: 'Russian',
            native: 'Русский'
          }
        ]
      },
      name: 'Belarus',
      phone: '375',
      phones: ['375']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'BZ'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Belmopan',
      code: 'BZ',
      currencies: ['BZD'],
      currency: 'BZD',
      emoji: '🇧🇿',
      emojiU: 'U+1F1E7 U+1F1FF',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Belize',
      phone: '501',
      phones: ['501']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CA'
    },
    update: {},
    create: {
      awsRegion: 'us-west-2',
      capital: 'Ottawa',
      code: 'CA',
      currencies: ['CAD'],
      currency: 'CAD',
      emoji: '🇨🇦',
      emojiU: 'U+1F1E8 U+1F1E6',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Canada',
      phone: '1',
      phones: ['1']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CC'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-1',
      capital: 'West Island',
      code: 'CC',
      currencies: ['AUD'],
      currency: 'AUD',
      emoji: '🇨🇨',
      emojiU: 'U+1F1E8 U+1F1E8',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Cocos [Keeling] Islands',
      phone: '61',
      phones: ['61']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CD'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Kinshasa',
      code: 'CD',
      currencies: ['CDF'],
      currency: 'CDF',
      emoji: '🇨🇩',
      emojiU: 'U+1F1E8 U+1F1E9',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Lingala',
            native: 'Lingála'
          },
          {
            name: 'Kongo',
            native: 'KiKongo'
          },
          {
            name: 'Swahili',
            native: 'Kiswahili'
          },
          {
            name: 'Luba-Katanga',
            native: 'Tshiluba'
          }
        ]
      },
      name: 'Democratic Republic of the Congo',
      phone: '243',
      phones: ['243']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CF'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Bangui',
      code: 'CF',
      currencies: ['XAF'],
      currency: 'XAF',
      emoji: '🇨🇫',
      emojiU: 'U+1F1E8 U+1F1EB',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Sango',
            native: 'Sängö'
          }
        ]
      },
      name: 'Central African Republic',
      phone: '236',
      phones: ['236']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CG'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Brazzaville',
      code: 'CG',
      currencies: ['XAF'],
      currency: 'XAF',
      emoji: '🇨🇬',
      emojiU: 'U+1F1E8 U+1F1EC',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Lingala',
            native: 'Lingála'
          }
        ]
      },
      name: 'Republic of the Congo',
      phone: '242',
      phones: ['242']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CH'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Bern',
      code: 'CH',
      currencies: ['CHE', 'CHF', 'CHW'],
      currency: 'CHE,CHF,CHW',
      emoji: '🇨🇭',
      emojiU: 'U+1F1E8 U+1F1ED',
      languages: {
        create: [
          {
            name: 'German',
            native: 'Deutsch'
          },
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Italian',
            native: 'Italiano'
          }
        ]
      },
      name: 'Switzerland',
      phone: '41',
      phones: ['41']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CI'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Yamoussoukro',
      code: 'CI',
      currencies: ['XOF'],
      currency: 'XOF',
      emoji: '🇨🇮',
      emojiU: 'U+1F1E8 U+1F1EE',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Ivory Coast',
      phone: '225',
      phones: ['225']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CK'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-2',
      capital: 'Avarua',
      code: 'CK',
      currencies: ['NZD'],
      currency: 'NZD',
      emoji: '🇨🇰',
      emojiU: 'U+1F1E8 U+1F1F0',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Cook Islands',
      phone: '682',
      phones: ['682']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CL'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Santiago',
      code: 'CL',
      currencies: ['CLF', 'CLP'],
      currency: 'CLF,CLP',
      emoji: '🇨🇱',
      emojiU: 'U+1F1E8 U+1F1F1',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Chile',
      phone: '56',
      phones: ['56']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CM'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Yaoundé',
      code: 'CM',
      currencies: ['XAF'],
      currency: 'XAF',
      emoji: '🇨🇲',
      emojiU: 'U+1F1E8 U+1F1F2',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Cameroon',
      phone: '237',
      phones: ['237']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CN'
    },
    update: {},
    create: {
      awsRegion: 'ap-east-1',
      capital: 'Beijing',
      code: 'CN',
      currencies: ['CNY'],
      currency: 'CNY',
      emoji: '🇨🇳',
      emojiU: 'U+1F1E8 U+1F1F3',
      languages: {
        create: [
          {
            name: 'Chinese',
            native: '中文'
          }
        ]
      },
      name: 'China',
      phone: '86',
      phones: ['86']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CO'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Bogotá',
      code: 'CO',
      currencies: ['COP'],
      currency: 'COP',
      emoji: '🇨🇴',
      emojiU: 'U+1F1E8 U+1F1F4',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Colombia',
      phone: '57',
      phones: ['57']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CR'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'San José',
      code: 'CR',
      currencies: ['CRC'],
      currency: 'CRC',
      emoji: '🇨🇷',
      emojiU: 'U+1F1E8 U+1F1F7',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Costa Rica',
      phone: '506',
      phones: ['506']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CU'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Havana',
      code: 'CU',
      currencies: ['CUC', 'CUP'],
      currency: 'CUC,CUP',
      emoji: '🇨🇺',
      emojiU: 'U+1F1E8 U+1F1FA',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Cuba',
      phone: '53',
      phones: ['53']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CV'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-1',
      capital: 'Praia',
      code: 'CV',
      currencies: ['CVE'],
      currency: 'CVE',
      emoji: '🇨🇻',
      emojiU: 'U+1F1E8 U+1F1FB',
      languages: {
        create: [
          {
            name: 'Portuguese',
            native: 'Português'
          }
        ]
      },
      name: 'Cape Verde',
      phone: '238',
      phones: ['238']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CW'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Willemstad',
      code: 'CW',
      currencies: ['ANG'],
      currency: 'ANG',
      emoji: '🇨🇼',
      emojiU: 'U+1F1E8 U+1F1FC',
      languages: {
        create: [
          {
            name: 'Dutch',
            native: 'Nederlands'
          },
          {
            name: 'Panjabi / Punjabi',
            native: 'ਪੰਜਾਬੀ / पंजाबी / پنجابي'
          },
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Curacao',
      phone: '5999',
      phones: ['5999']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CX'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-1',
      capital: 'Flying Fish Cove',
      code: 'CX',
      currencies: ['AUD'],
      currency: 'AUD',
      emoji: '🇨🇽',
      emojiU: 'U+1F1E8 U+1F1FD',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Christmas Island',
      phone: '61',
      phones: ['61']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CY'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Nicosia',
      code: 'CY',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇨🇾',
      emojiU: 'U+1F1E8 U+1F1FE',
      languages: {
        create: [
          {
            name: 'Greek',
            native: 'Ελληνικά'
          },
          {
            name: 'Turkish',
            native: 'Türkçe'
          },
          {
            name: 'Armenian',
            native: 'Հայերեն'
          }
        ]
      },
      name: 'Cyprus',
      phone: '357',
      phones: ['357']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'CZ'
    },
    update: {},
    create: {
      awsRegion: 'eu-central-1',
      capital: 'Prague',
      code: 'CZ',
      currencies: ['CZK'],
      currency: 'CZK',
      emoji: '🇨🇿',
      emojiU: 'U+1F1E8 U+1F1FF',
      languages: {
        create: [
          {
            name: 'Czech',
            native: 'Čeština'
          },
          {
            name: 'Slovak',
            native: 'Slovenčina'
          }
        ]
      },
      name: 'Czech Republic',
      phone: '420',
      phones: ['420']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'DE'
    },
    update: {},
    create: {
      awsRegion: 'eu-central-1',
      capital: 'Berlin',
      code: 'DE',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇩🇪',
      emojiU: 'U+1F1E9 U+1F1EA',
      languages: {
        create: [
          {
            name: 'German',
            native: 'Deutsch'
          }
        ]
      },
      name: 'Germany',
      phone: '49',
      phones: ['49']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'DJ'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Djibouti',
      code: 'DJ',
      currencies: ['DJF'],
      currency: 'DJF',
      emoji: '🇩🇯',
      emojiU: 'U+1F1E9 U+1F1EF',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Arabic',
            native: 'العربية'
          }
        ]
      },
      name: 'Djibouti',
      phone: '253',
      phones: ['253']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'DK'
    },
    update: {},
    create: {
      awsRegion: 'eu-north-1',
      capital: 'Copenhagen',
      code: 'DK',
      currencies: ['DKK'],
      currency: 'DKK',
      emoji: '🇩🇰',
      emojiU: 'U+1F1E9 U+1F1F0',
      languages: {
        create: [
          {
            name: 'Danish',
            native: 'Dansk'
          }
        ]
      },
      name: 'Denmark',
      phone: '45',
      phones: ['45']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'DM'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Roseau',
      code: 'DM',
      currencies: ['XCD'],
      currency: 'XCD',
      emoji: '🇩🇲',
      emojiU: 'U+1F1E9 U+1F1F2',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Dominica',
      phone: '1767',
      phones: ['1767']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'DO'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Santo Domingo',
      code: 'DO',
      currencies: ['DOP'],
      currency: 'DOP',
      emoji: '🇩🇴',
      emojiU: 'U+1F1E9 U+1F1F4',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Dominican Republic',
      phone: '1809,1829,1849',
      phones: ['1809', '1829', '1849']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'DZ'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Algiers',
      code: 'DZ',
      currencies: ['DZD'],
      currency: 'DZD',
      emoji: '🇩🇿',
      emojiU: 'U+1F1E9 U+1F1FF',
      languages: {
        create: [
          {
            name: 'Arabic',
            native: 'العربية'
          }
        ]
      },
      name: 'Algeria',
      phone: '213',
      phones: ['213']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'EC'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Quito',
      code: 'EC',
      currencies: ['USD'],
      currency: 'USD',
      emoji: '🇪🇨',
      emojiU: 'U+1F1EA U+1F1E8',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Ecuador',
      phone: '593',
      phones: ['593']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'EE'
    },
    update: {},
    create: {
      awsRegion: 'eu-north-1',
      capital: 'Tallinn',
      code: 'EE',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇪🇪',
      emojiU: 'U+1F1EA U+1F1EA',
      languages: {
        create: [
          {
            name: 'Estonian',
            native: 'Eesti'
          }
        ]
      },
      name: 'Estonia',
      phone: '372',
      phones: ['372']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'EG'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Cairo',
      code: 'EG',
      currencies: ['EGP'],
      currency: 'EGP',
      emoji: '🇪🇬',
      emojiU: 'U+1F1EA U+1F1EC',
      languages: {
        create: [
          {
            name: 'Arabic',
            native: 'العربية'
          }
        ]
      },
      name: 'Egypt',
      phone: '20',
      phones: ['20']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'EH'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-3',
      capital: 'El Aaiún',
      code: 'EH',
      currencies: ['MAD', 'DZD', 'MRU'],
      currency: 'MAD,DZD,MRU',
      emoji: '🇪🇭',
      emojiU: 'U+1F1EA U+1F1ED',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Western Sahara',
      phone: '212',
      phones: ['212']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'ER'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Asmara',
      code: 'ER',
      currencies: ['ERN'],
      currency: 'ERN',
      emoji: '🇪🇷',
      emojiU: 'U+1F1EA U+1F1F7',
      languages: {
        create: [
          {
            name: 'Tigrinya',
            native: 'ትግርኛ'
          },
          {
            name: 'Arabic',
            native: 'العربية'
          },
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Eritrea',
      phone: '291',
      phones: ['291']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'ES'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-3',
      capital: 'Madrid',
      code: 'ES',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇪🇸',
      emojiU: 'U+1F1EA U+1F1F8',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          },
          {
            name: 'Basque',
            native: 'Euskara'
          },
          {
            name: 'Catalan',
            native: 'Català'
          },
          {
            name: 'Galician',
            native: 'Galego'
          },
          {
            name: 'Occitan',
            native: 'Occitan'
          }
        ]
      },
      name: 'Spain',
      phone: '34',
      phones: ['34']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'ET'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Addis Ababa',
      code: 'ET',
      currencies: ['ETB'],
      currency: 'ETB',
      emoji: '🇪🇹',
      emojiU: 'U+1F1EA U+1F1F9',
      languages: {
        create: [
          {
            name: 'Amharic',
            native: 'አማርኛ'
          }
        ]
      },
      name: 'Ethiopia',
      phone: '251',
      phones: ['251']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'FI'
    },
    update: {},
    create: {
      awsRegion: 'eu-north-1',
      capital: 'Helsinki',
      code: 'FI',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇫🇮',
      emojiU: 'U+1F1EB U+1F1EE',
      languages: {
        create: [
          {
            name: 'Finnish',
            native: 'Suomi'
          },
          {
            name: 'Swedish',
            native: 'Svenska'
          }
        ]
      },
      name: 'Finland',
      phone: '358',
      phones: ['358']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'FJ'
    },
    update: {},
    create: {
      awsRegion: 'ap-southeast-2',
      capital: 'Suva',
      code: 'FJ',
      currencies: ['FJD'],
      currency: 'FJD',
      emoji: '🇫🇯',
      emojiU: 'U+1F1EB U+1F1EF',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'Fijian',
            native: 'Na Vosa Vakaviti'
          },
          {
            name: 'Hindi',
            native: 'हिन्दी'
          },
          {
            name: 'Urdu',
            native: 'اردو'
          }
        ]
      },
      name: 'Fiji',
      phone: '679',
      phones: ['679']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'FK'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Stanley',
      code: 'FK',
      currencies: ['FKP'],
      currency: 'FKP',
      emoji: '🇫🇰',
      emojiU: 'U+1F1EB U+1F1F0',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Falkland Islands',
      phone: '500',
      phones: ['500']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'FM'
    },
    update: {},
    create: {
      awsRegion: 'ap-northeast-1',
      capital: 'Palikir',
      code: 'FM',
      currencies: ['USD'],
      currency: 'USD',
      emoji: '🇫🇲',
      emojiU: 'U+1F1EB U+1F1F2',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Micronesia',
      phone: '691',
      phones: ['691']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'FO'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-1',
      capital: 'Tórshavn',
      code: 'FO',
      currencies: ['DKK'],
      currency: 'DKK',
      emoji: '🇫🇴',
      emojiU: 'U+1F1EB U+1F1F4',
      languages: {
        create: [
          {
            name: 'Faroese',
            native: 'Føroyskt'
          }
        ]
      },
      name: 'Faroe Islands',
      phone: '298',
      phones: ['298']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'FR'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-3',
      capital: 'Paris',
      code: 'FR',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇫🇷',
      emojiU: 'U+1F1EB U+1F1F7',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'France',
      phone: '33',
      phones: ['33']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GA'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Libreville',
      code: 'GA',
      currencies: ['XAF'],
      currency: 'XAF',
      emoji: '🇬🇦',
      emojiU: 'U+1F1EC U+1F1E6',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Gabon',
      phone: '241',
      phones: ['241']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GB'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-2',
      capital: 'London',
      code: 'GB',
      currencies: ['GBP'],
      currency: 'GBP',
      emoji: '🇬🇧',
      emojiU: 'U+1F1EC U+1F1E7',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'United Kingdom',
      phone: '44',
      phones: ['44']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GD'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: "St. George's",
      code: 'GD',
      currencies: ['XCD'],
      currency: 'XCD',
      emoji: '🇬🇩',
      emojiU: 'U+1F1EC U+1F1E9',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Grenada',
      phone: '1473',
      phones: ['1473']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GE'
    },
    update: {},
    create: {
      awsRegion: 'me-south-1',
      capital: 'Tbilisi',
      code: 'GE',
      currencies: ['GEL'],
      currency: 'GEL',
      emoji: '🇬🇪',
      emojiU: 'U+1F1EC U+1F1EA',
      languages: {
        create: [
          {
            name: 'Georgian',
            native: 'ქართული'
          }
        ]
      },
      name: 'Georgia',
      phone: '995',
      phones: ['995']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GF'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Cayenne',
      code: 'GF',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇬🇫',
      emojiU: 'U+1F1EC U+1F1EB',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'French Guiana',
      phone: '594',
      phones: ['594']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GG'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-1',
      capital: 'St. Peter Port',
      code: 'GG',
      currencies: ['GBP'],
      currency: 'GBP',
      emoji: '🇬🇬',
      emojiU: 'U+1F1EC U+1F1EC',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Guernsey',
      phone: '44',
      phones: ['44']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GH'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Accra',
      code: 'GH',
      currencies: ['GHS'],
      currency: 'GHS',
      emoji: '🇬🇭',
      emojiU: 'U+1F1EC U+1F1ED',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Ghana',
      phone: '233',
      phones: ['233']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GI'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-3',
      capital: 'Gibraltar',
      code: 'GI',
      currencies: ['GIP'],
      currency: 'GIP',
      emoji: '🇬🇮',
      emojiU: 'U+1F1EC U+1F1EE',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Gibraltar',
      phone: '350',
      phones: ['350']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GL'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-1',
      capital: 'Nuuk',
      code: 'GL',
      currencies: ['DKK'],
      currency: 'DKK',
      emoji: '🇬🇱',
      emojiU: 'U+1F1EC U+1F1F1',
      languages: {
        create: [
          {
            name: 'Greenlandic',
            native: 'Kalaallisut'
          }
        ]
      },
      name: 'Greenland',
      phone: '299',
      phones: ['299']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GM'
    },
    update: {},
    create: {
      awsRegion: 'eu-west-3',
      capital: 'Banjul',
      code: 'GM',
      currencies: ['GMD'],
      currency: 'GMD',
      emoji: '🇬🇲',
      emojiU: 'U+1F1EC U+1F1F2',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Gambia',
      phone: '220',
      phones: ['220']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GN'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Conakry',
      code: 'GN',
      currencies: ['GNF'],
      currency: 'GNF',
      emoji: '🇬🇳',
      emojiU: 'U+1F1EC U+1F1F3',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          },
          {
            name: 'Peul',
            native: 'Fulfulde'
          }
        ]
      },
      name: 'Guinea',
      phone: '224',
      phones: ['224']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GP'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Basse-Terre',
      code: 'GP',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇬🇵',
      emojiU: 'U+1F1EC U+1F1F5',
      languages: {
        create: [
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Guadeloupe',
      phone: '590',
      phones: ['590']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GQ'
    },
    update: {},
    create: {
      awsRegion: 'af-south-1',
      capital: 'Malabo',
      code: 'GQ',
      currencies: ['XAF'],
      currency: 'XAF',
      emoji: '🇬🇶',
      emojiU: 'U+1F1EC U+1F1F6',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          },
          {
            name: 'French',
            native: 'Français'
          }
        ]
      },
      name: 'Equatorial Guinea',
      phone: '240',
      phones: ['240']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GR'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Athens',
      code: 'GR',
      currencies: ['EUR'],
      currency: 'EUR',
      emoji: '🇬🇷',
      emojiU: 'U+1F1EC U+1F1F7',
      languages: {
        create: [
          {
            name: 'Greek',
            native: 'Ελληνικά'
          }
        ]
      },
      name: 'Greece',
      phone: '30',
      phones: ['30']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GS'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'King Edward Point',
      code: 'GS',
      currencies: ['GBP'],
      currency: 'GBP',
      emoji: '🇬🇸',
      emojiU: 'U+1F1EC U+1F1F8',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'South Georgia and the South Sandwich Islands',
      phone: '500',
      phones: ['500']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GT'
    },
    update: {},
    create: {
      awsRegion: 'us-east-1',
      capital: 'Guatemala City',
      code: 'GT',
      currencies: ['GTQ'],
      currency: 'GTQ',
      emoji: '🇬🇹',
      emojiU: 'U+1F1EC U+1F1F9',
      languages: {
        create: [
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Guatemala',
      phone: '502',
      phones: ['502']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GU'
    },
    update: {},
    create: {
      awsRegion: 'ap-northeast-1',
      capital: 'Hagåtña',
      code: 'GU',
      currencies: ['USD'],
      currency: 'USD',
      emoji: '🇬🇺',
      emojiU: 'U+1F1EC U+1F1FA',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          },
          {
            name: 'Chamorro',
            native: 'Chamoru'
          },
          {
            name: 'Spanish',
            native: 'Español'
          }
        ]
      },
      name: 'Guam',
      phone: '1671',
      phones: ['1671']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GW'
    },
    update: {},
    create: {
      awsRegion: 'eu-south-1',
      capital: 'Bissau',
      code: 'GW',
      currencies: ['XOF'],
      currency: 'XOF',
      emoji: '🇬🇼',
      emojiU: 'U+1F1EC U+1F1FC',
      languages: {
        create: [
          {
            name: 'Portuguese',
            native: 'Português'
          }
        ]
      },
      name: 'Guinea-Bissau',
      phone: '245',
      phones: ['245']
    }
  });

  await prisma.country.upsert({
    where: {
      code: 'GY'
    },
    update: {},
    create: {
      awsRegion: 'sa-east-1',
      capital: 'Georgetown',
      code: 'GY',
      currencies: ['GYD'],
      currency: 'GYD',
      emoji: '🇬🇾',
      emojiU: 'U+1F1EC U+1F1FE',
      languages: {
        create: [
          {
            name: 'English',
            native: 'English'
          }
        ]
      },
      name: 'Guyana',
      phone: '592',
      phones: ['592']
    }
  });
};

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
