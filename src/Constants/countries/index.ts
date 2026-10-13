import type { ICountries } from 'props';

import { messages } from '@/assets/messages';
import { parseDateInput } from '@/utils/format/parseDateInput';

const countriesMessage = messages.countries;

export const countries: ICountries[] = [
  {
    name: countriesMessage.AF,
    short: 'AF',
    countryCode: '132',
    ddi: '+93',
    flag: 'afghanistan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return ' 99 999 9999';
    },
  },
  {
    name: countriesMessage.AL,
    short: 'AL',
    countryCode: '175',
    ddi: '+355',
    flag: 'albania',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.DZ,
    short: 'DZ',
    countryCode: '590',
    ddi: '+213',
    flag: 'algeria',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 99 99';
      return '99 999 99 99';
    },
  },
  {
    name: countriesMessage.AS,
    short: 'AS',
    countryCode: '6912',
    ddi: '+1-684',
    cepLength: 5,
    flag: 'american-samoa',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.AD,
    short: 'AD',
    countryCode: '370',
    ddi: '+376',
    cepLength: 5,
    flag: 'andorra',
    phoneMask: (phone) => {
      if (phone.length > 6) return '999 999';
      return '999 999';
    },
  },
  {
    name: countriesMessage.AO,
    short: 'AO',
    countryCode: '400',
    ddi: '+244',
    flag: 'angola',
    phoneMask: (phone) => {
      if (phone.length > 11) return '999 999 999';
      return '999 999 999';
    },
  },
  {
    name: countriesMessage.AG,
    short: 'AG',
    countryCode: '434',
    ddi: '+1-268',
    flag: 'antigua-and-barbuda',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.AR,
    short: 'AR',
    countryCode: '639',
    ddi: '+54',
    cepLength: 4,
    flag: 'argentina',
    phoneMask: () => '9 999 999-9999',
  },
  {
    name: countriesMessage.AM,
    short: 'AM',
    countryCode: '647',
    ddi: '+374',
    flag: 'armenia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.AU,
    short: 'AU',
    countryCode: '698',
    ddi: '+61',
    cepLength: 4,
    flag: 'australia',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.AT,
    short: 'AT',
    countryCode: '728',
    ddi: '+43',
    cepLength: 4,
    flag: 'austria',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.AZ,
    short: 'AZ',
    countryCode: '736',
    ddi: '+994',
    flag: 'azerbaijan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 99 99';
      return '99 999 99 99';
    },
  },
  {
    name: countriesMessage.BS,
    short: 'BS',
    countryCode: '779',
    ddi: '+1-242',
    flag: 'bahamas',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.BH,
    short: 'BH',
    countryCode: '809',
    ddi: '+973',
    flag: 'bahrain',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.BD,
    short: 'BD',
    countryCode: '817',
    ddi: '+880',
    cepLength: 4,
    flag: 'bangladesh',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999[9]';
      return '9 999 999[9]';
    },
  },
  {
    name: countriesMessage.BB,
    short: 'BB',
    countryCode: '833',
    ddi: '+1-246',
    flag: 'barbados',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.BY,
    short: 'BY',
    countryCode: '850',
    ddi: '+375',
    flag: 'belarus',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(99) 999-99-99';
      return '(99) 999-99-99';
    },
  },
  {
    name: countriesMessage.BE,
    short: 'BE',
    countryCode: '876',
    ddi: '+32',
    cepLength: 4,
    flag: 'belgium',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 99 99';
      return '9 999 99 99';
    },
  },
  {
    name: countriesMessage.BZ,
    short: 'BZ',
    countryCode: '884',
    ddi: '+501',
    flag: 'belize',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.BJ,
    short: 'BJ',
    countryCode: '2291',
    ddi: '+229',
    flag: 'benin',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.BT,
    short: 'BT',
    countryCode: '1198',
    ddi: '+975',
    flag: 'bhutan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.BO,
    short: 'BO',
    countryCode: '973',
    ddi: '+591',
    flag: 'bolivia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.BA,
    short: 'BA',
    countryCode: '981',
    ddi: '+387',
    flag: 'bosnia-and-herzegovina',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999-999[9]';
      return '99 999-999[9]';
    },
  },
  {
    name: countriesMessage.BW,
    short: 'BW',
    countryCode: '1015',
    ddi: '+267',
    flag: 'botswana',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.BR,
    short: 'BR',
    countryCode: '1058',
    ddi: '+55',
    cepLength: 10,
    mask: '99.999-999',
    flag: 'brazil',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(99) 99999-9999';
      return '(99) 9999-9999';
    },
    dateFormat: ({ dateString, hasHours }) => {
      const date = parseDateInput(dateString);
      const year = date.getFullYear().toString();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      if (hasHours) return `${day}/${month}/${year} ${hours}:${minutes}`;
      return `${day}/${month}/${year}`;
    },
  },
  {
    name: countriesMessage.BN,
    short: 'BN',
    countryCode: '1082',
    ddi: '+673',
    flag: 'brunei',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.BG,
    short: 'BG',
    countryCode: '1112',
    ddi: '+359',
    cepLength: 4,
    flag: 'bulgaria',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.BF,
    short: 'BF',
    countryCode: '310',
    ddi: '+226',
    flag: 'burkina-faso',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.BI,
    short: 'BI',
    countryCode: '1155',
    ddi: '+257',
    flag: 'burundi',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.KH,
    short: 'KH',
    countryCode: '1414',
    ddi: '+855',
    flag: 'cambodia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.CM,
    short: 'CM',
    countryCode: '1457',
    ddi: '+237',
    flag: 'cameroon',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 99 99 99 99';
      return '9 99 99 99 99';
    },
  },
  {
    name: countriesMessage.CA,
    short: 'CA',
    countryCode: '1490',
    ddi: '+1',
    cepLength: 6,
    flag: 'canada',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(999) 999-9999';
      return '(999) 999-9999';
    },
  },
  {
    name: countriesMessage.CV,
    short: 'CV',
    countryCode: '1279',
    ddi: '+238',
    flag: 'cape-verde',
    phoneMask: (phone) => {
      if (phone.length > 6) return '(99) 99 99';
      return '(99) 99 99';
    },
  },
  {
    name: countriesMessage.CF,
    short: 'CF',
    countryCode: '6408',
    ddi: '+236',
    flag: 'central-african-republic',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.TD,
    short: 'TD',
    countryCode: '7889',
    ddi: '+235',
    flag: 'chad',
    phoneMask: (phone) => {
      if (phone.length > 8) return '99 99 99 99';
      return '99 99 99 99';
    },
  },
  {
    name: countriesMessage.CL,
    short: 'CL',
    countryCode: '1589',
    ddi: '+56',
    flag: 'chile',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.CN,
    short: 'CN',
    countryCode: '1600',
    ddi: '+86',
    flag: 'china',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.CO,
    short: 'CO',
    countryCode: '1694',
    ddi: '+57',
    flag: 'colombia',
    cepLength: 6,
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.KM,
    short: 'KM',
    countryCode: '1732',
    ddi: '+269',
    flag: 'comoros',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 99';
      return '99 99 99';
    },
  },
  {
    name: countriesMessage.CD,
    short: 'CD',
    countryCode: '8885',
    ddi: '+243',
    flag: 'democratic-republic-of-the-congo',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.CG,
    short: 'CG',
    countryCode: '1775',
    ddi: '+242',
    flag: 'congo',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.CR,
    short: 'CR',
    countryCode: '1961',
    ddi: '+506',
    flag: 'costa-rica',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.HR,
    short: 'HR',
    countryCode: '1953',
    ddi: '+385',
    cepLength: 5,
    flag: 'croatia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.CU,
    short: 'CU',
    countryCode: '1996',
    ddi: '+53',
    flag: 'cuba',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.CY,
    short: 'CY',
    countryCode: '1635',
    ddi: '+357',
    flag: 'cyprus',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.CZ,
    short: 'CZ',
    countryCode: '7919',
    ddi: '+420',
    cepLength: 5,
    flag: 'czech-republic',
    phoneMask: (phone) => {
      if (phone.length > 11) return '999 999 999';
      return '999 999 999';
    },
  },
  {
    name: countriesMessage.DK,
    short: 'DK',
    countryCode: '2321',
    ddi: '+45',
    cepLength: 4,
    flag: 'denmark',
    phoneMask: (phone) => {
      if (phone.length > 8) return '99 99 99 99';
      return '99 99 99 99';
    },
  },
  {
    name: countriesMessage.DJ,
    short: 'DJ',
    countryCode: '7838',
    ddi: '+253',
    flag: 'djibouti',
    phoneMask: (phone) => {
      if (phone.length > 8) return '99 99 99 99';
      return '99 99 99 99';
    },
  },
  {
    name: countriesMessage.DM,
    short: 'DM',
    countryCode: '2356',
    ddi: '+1-767',
    flag: 'dominica',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.DO,
    short: 'DO',
    countryCode: '6475',
    ddi: '+1-809',
    cepLength: 5,
    flag: 'dominican-republic',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(999) 999-9999';
      return '(999) 999-9999';
    },
  },
  {
    name: countriesMessage.EC,
    short: 'EC',
    countryCode: '2399',
    ddi: '+593',
    flag: 'ecuador',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.EG,
    short: 'EG',
    countryCode: '2402',
    ddi: '+20',
    flag: 'egypt',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.SV,
    short: 'SV',
    countryCode: '6874',
    ddi: '+503',
    flag: 'el-salvador',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.GQ,
    short: 'GQ',
    countryCode: '3310',
    ddi: '+240',
    flag: 'equatorial-guinea',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.ER,
    short: 'ER',
    countryCode: '2437',
    ddi: '+291',
    flag: 'eritrea',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.EE,
    short: 'EE',
    countryCode: '2518',
    ddi: '+372',
    flag: 'estonia',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.SZ,
    short: 'SZ',
    countryCode: '7544',
    ddi: '+268',
    flag: 'eswatini',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.ET,
    short: 'ET',
    countryCode: '2534',
    ddi: '+251',
    flag: 'ethiopia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.FJ,
    short: 'FJ',
    countryCode: '8702',
    ddi: '+679',
    flag: 'fiji',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.FI,
    short: 'FI',
    countryCode: '2712',
    ddi: '+358',
    cepLength: 5,
    flag: 'finland',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.FR,
    short: 'FR',
    countryCode: '2755',
    ddi: '+33',
    cepLength: 5,
    flag: 'france',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 99 99 99 99';
      return '9 99 99 99 99';
    },
  },
  {
    name: countriesMessage.GA,
    short: 'GA',
    countryCode: '2810',
    ddi: '+241',
    flag: 'gabon',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9 99 99 99';
      return '9 99 99 99';
    },
  },
  {
    name: countriesMessage.GM,
    short: 'GM',
    countryCode: '2852',
    ddi: '+220',
    flag: 'gambia',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.GE,
    short: 'GE',
    countryCode: '2917',
    ddi: '+995',
    flag: 'georgia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.DE,
    short: 'DE',
    countryCode: '230',
    ddi: '+49',
    cepLength: 5,
    flag: 'germany',
  },
  {
    name: countriesMessage.GH,
    short: 'GH',
    countryCode: '2895',
    ddi: '+233',
    flag: 'ghana',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.GR,
    short: 'GR',
    countryCode: '3018',
    ddi: '+30',
    flag: 'greece',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.GD,
    short: 'GD',
    countryCode: '2976',
    ddi: '+1-473',
    flag: 'grenada',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.GT,
    short: 'GT',
    countryCode: '3174',
    ddi: '+502',
    cepLength: 5,
    flag: 'guatemala',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.GN,
    short: 'GN',
    countryCode: '3298',
    ddi: '+224',
    flag: 'guinea',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.GW,
    short: 'GW',
    countryCode: '3344',
    ddi: '+245',
    flag: 'guinea-bissau',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.GY,
    short: 'GY',
    countryCode: '3379',
    ddi: '+592',
    cepLength: 5,
    flag: 'guyana',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.HT,
    short: 'HT',
    countryCode: '3417',
    ddi: '+509',
    flag: 'haiti',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.HN,
    short: 'HN',
    countryCode: '3450',
    ddi: '+504',
    flag: 'honduras',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.HU,
    short: 'HU',
    countryCode: '3557',
    ddi: '+36',
    cepLength: 4,
    flag: 'hungary',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9[9] 999 999[9]';
      return '9[9] 999 999[9]';
    },
  },
  {
    name: countriesMessage.IS,
    short: 'IS',
    countryCode: '3794',
    ddi: '+354',
    cepLength: 3,
    flag: 'iceland',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.IN,
    short: 'IN',
    countryCode: '3611',
    ddi: '+91',
    cepLength: 6,
    flag: 'india',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.ID,
    short: 'ID',
    countryCode: '3654',
    ddi: '+62',
    flag: 'indonesia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.IR,
    short: 'IR',
    countryCode: '3727',
    ddi: '+98',
    flag: 'iran',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.IQ,
    short: 'IQ',
    countryCode: '3697',
    ddi: '+964',
    flag: 'iraq',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.IE,
    short: 'IE',
    countryCode: '3751',
    ddi: '+353',
    flag: 'ireland',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.IL,
    short: 'IL',
    countryCode: '3832',
    ddi: '+972',
    flag: 'israel',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.IT,
    short: 'IT',
    countryCode: '3867',
    ddi: '+39',
    cepLength: 5,
    flag: 'italy',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.JM,
    short: 'JM',
    countryCode: '3913',
    ddi: '+1-876',
    flag: 'jamaica',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.JP,
    short: 'JP',
    countryCode: '3999',
    ddi: '+81',
    cepLength: 8,
    mask: '999-9999',
    flag: 'japan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99-9999-9999';
      return '99-9999-9999';
    },
  },
  {
    name: countriesMessage.JO,
    short: 'JO',
    countryCode: '4030',
    ddi: '+962',
    flag: 'jordan',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.KZ,
    short: 'KZ',
    countryCode: '1538',
    ddi: '+7',
    flag: 'kazakhstan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '999 999 9999';
      return '999 999 9999';
    },
  },
  {
    name: countriesMessage.KE,
    short: 'KE',
    countryCode: '6238',
    ddi: '+254',
    flag: 'kenya',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999999';
      return '99 9999999';
    },
  },
  {
    name: countriesMessage.KI,
    short: 'KI',
    countryCode: '4111',
    ddi: '+686',
    flag: 'kiribati',
    phoneMask: (phone) => {
      if (phone.length > 5) return '99 999';
      return '99 999';
    },
  },
  {
    name: countriesMessage.KW,
    short: 'KW',
    countryCode: '1988',
    ddi: '+965',
    flag: 'kuwait',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.KG,
    short: 'KG',
    countryCode: '6254',
    ddi: '+996',
    flag: 'kyrgyzstan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.LA,
    short: 'LA',
    countryCode: '4200',
    ddi: '+856',
    flag: 'laos',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.LV,
    short: 'LV',
    countryCode: '4278',
    ddi: '+371',
    cepLength: 4,
    flag: 'latvia',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.LB,
    short: 'LB',
    countryCode: '4316',
    ddi: '+961',
    flag: 'lebanon',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.LS,
    short: 'LS',
    countryCode: '4260',
    ddi: '+266',
    flag: 'lesotho',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.LR,
    short: 'LR',
    countryCode: '4340',
    ddi: '+231',
    flag: 'liberia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.LY,
    short: 'LY',
    countryCode: '4383',
    ddi: '+218',
    flag: 'libya',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.LI,
    short: 'LI',
    countryCode: '4405',
    ddi: '+423',
    cepLength: 4,
    flag: 'liechtenstein',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.LT,
    short: 'LT',
    countryCode: '4421',
    ddi: '+370',
    cepLength: 5,
    flag: 'lithuania',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 99999';
    },
  },
  {
    name: countriesMessage.LU,
    short: 'LU',
    countryCode: '4456',
    ddi: '+352',
    cepLength: 4,
    flag: 'luxembourg',
    phoneMask: (phone) => {
      if (phone.length > 11) return '999 999 999';
      return '999 999 999';
    },
  },
  {
    name: countriesMessage.MG,
    short: 'MG',
    countryCode: '4502',
    ddi: '+261',
    flag: 'madagascar',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 99999';
      return '99 99 99999';
    },
  },
  {
    name: countriesMessage.MW,
    short: 'MW',
    countryCode: '4588',
    ddi: '+265',
    flag: 'malawi',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.MY,
    short: 'MY',
    countryCode: '4553',
    ddi: '+60',
    flag: 'malaysia',
    phoneMask: (phone) => {
      if (phone.length > 9) return '99-999 9999';
      return '99-999 9999';
    },
  },
  {
    name: countriesMessage.MV,
    short: 'MV',
    countryCode: '4618',
    ddi: '+960',
    flag: 'maldives',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.ML,
    short: 'ML',
    countryCode: '4642',
    ddi: '+223',
    flag: 'mali',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.MT,
    short: 'MT',
    countryCode: '4677',
    ddi: '+356',
    flag: 'malta',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.MH,
    short: 'MH',
    countryCode: '4766',
    ddi: '+692',
    flag: 'marshall-islands',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.MR,
    short: 'MR',
    countryCode: '4880',
    ddi: '+222',
    flag: 'mauritania',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.MU,
    short: 'MU',
    countryCode: '4855',
    ddi: '+230',
    flag: 'mauritius',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.MX,
    short: 'MX',
    countryCode: '4936',
    ddi: '+52',
    cepLength: 5,
    flag: 'mexico',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.FM,
    short: 'FM',
    countryCode: '4995',
    ddi: '+691',
    flag: 'micronesia',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.MD,
    short: 'MD',
    countryCode: '4944',
    ddi: '+373',
    flag: 'moldova',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.MC,
    short: 'MC',
    countryCode: '4952',
    ddi: '+377',
    cepLength: 5,
    flag: 'monaco',
    phoneMask: (phone) => {
      if (phone.length > 8) return '99 99 99 99';
      return '99 99 99 99';
    },
  },
  {
    name: countriesMessage.MN,
    short: 'MN',
    countryCode: '4979',
    ddi: '+976',
    flag: 'mongolia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.ME,
    short: 'ME',
    countryCode: '4985',
    ddi: '+382',
    flag: 'montenegro',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.MA,
    short: 'MA',
    countryCode: '4740',
    ddi: '+212',
    flag: 'morocco',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.MZ,
    short: 'MZ',
    countryCode: '5053',
    ddi: '+258',
    flag: 'mozambique',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.MM,
    short: 'MM',
    countryCode: '930',
    ddi: '+95',
    flag: 'myanmar',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.NA,
    short: 'NA',
    countryCode: '5070',
    ddi: '+264',
    flag: 'namibia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.NR,
    short: 'NR',
    countryCode: '5088',
    ddi: '+674',
    flag: 'nauru',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.NP,
    short: 'NP',
    countryCode: '5177',
    ddi: '+977',
    flag: 'nepal',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.NL,
    short: 'NL',
    countryCode: '5738',
    ddi: '+31',
    cepLength: 6,
    flag: 'netherlands',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.NZ,
    short: 'NZ',
    countryCode: '5487',
    ddi: '+64',
    cepLength: 4,
    flag: 'new-zealand',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.NI,
    short: 'NI',
    countryCode: '5215',
    ddi: '+505',
    flag: 'nicaragua',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.NE,
    short: 'NE',
    countryCode: '5258',
    ddi: '+227',
    flag: 'niger',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 9999';
      return '99 99 9999';
    },
  },
  {
    name: countriesMessage.NG,
    short: 'NG',
    countryCode: '5282',
    ddi: '+234',
    flag: 'nigeria',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  { name: countriesMessage.KP, short: 'KP', countryCode: '1872', ddi: '+850', flag: 'north-korea' },
  {
    name: countriesMessage.MK,
    short: 'MK',
    countryCode: '4499',
    ddi: '+389',
    flag: 'north-macedonia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.NO,
    short: 'NO',
    countryCode: '5380',
    ddi: '+47',
    cepLength: 4,
    flag: 'norway',
    phoneMask: (phone) => {
      if (phone.length > 8) return '99 99 99 99';
      return '99 99 99 99';
    },
  },
  {
    name: countriesMessage.OM,
    short: 'OM',
    countryCode: '5568',
    ddi: '+968',
    flag: 'oman',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.PK,
    short: 'PK',
    countryCode: '5762',
    ddi: '+92',
    flag: 'pakistan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.PW,
    short: 'PW',
    countryCode: '5754',
    ddi: '+680',
    flag: 'palau',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.PR,
    short: 'PR',
    countryCode: '6114',
    ddi: '+1',
    flag: 'puerto-rico',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(999) 999-9999';
      return '(999) 999-9999';
    },
  },
  {
    name: countriesMessage.PS,
    short: 'PS',
    countryCode: '5780',
    ddi: '+970',
    flag: 'palestine',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.PA,
    short: 'PA',
    countryCode: '5800',
    ddi: '+507',
    flag: 'panama',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.PG,
    short: 'PG',
    countryCode: '5452',
    ddi: '+675',
    flag: 'papua-new-guinea',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.PY,
    short: 'PY',
    countryCode: '5860',
    ddi: '+595',
    flag: 'paraguay',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.PE,
    short: 'PE',
    countryCode: '5894',
    ddi: '+51',
    flag: 'peru',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.PH,
    short: 'PH',
    countryCode: '2674',
    ddi: '+63',
    flag: 'philippines',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.PL,
    short: 'PL',
    countryCode: '6033',
    ddi: '+48',
    cepLength: 6,
    flag: 'poland',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.PT,
    short: 'PT',
    countryCode: '6076',
    ddi: '+351',
    cepLength: 8,
    flag: 'portugal',
    mask: '9999-999',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.RE,
    short: 'RE',
    countryCode: '6602',
    ddi: '+262',
    flag: 'france',
    phoneMask: (phone) => {
      if (phone.length > 9) return '99999 9999';
      return '99999 9999';
    },
  },
  {
    name: countriesMessage.QA,
    short: 'QA',
    countryCode: '1546',
    ddi: '+974',
    flag: 'qatar',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.RO,
    short: 'RO',
    countryCode: '6700',
    ddi: '+40',
    flag: 'romania',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.RU,
    short: 'RU',
    countryCode: '6769',
    ddi: '+7',
    flag: 'russia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(999) 999-99-99';
      return '(999) 999-99-99';
    },
  },
  {
    name: countriesMessage.RW,
    short: 'RW',
    countryCode: '6750',
    ddi: '+250',
    flag: 'rwanda',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.KN,
    short: 'KN',
    countryCode: '6781',
    ddi: '+1-869',
    flag: 'saint-kitts-and-nevis',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.LC,
    short: 'LC',
    countryCode: '7153',
    ddi: '+1-758',
    flag: 'saint-lucia',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.VC,
    short: 'VC',
    countryCode: '7056',
    ddi: '+1-784',
    flag: 'saint-vincent-and-the-grenadines',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.WS,
    short: 'WS',
    countryCode: '6904',
    ddi: '+685',
    flag: 'samoa',
    phoneMask: (phone) => {
      if (phone.length > 6) return '99 9999';
      return '99 9999';
    },
  },
  {
    name: countriesMessage.SM,
    short: 'SM',
    countryCode: '6971',
    ddi: '+378',
    flag: 'san-marino',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9999 999999';
      return '9999 999999';
    },
  },
  {
    name: countriesMessage.ST,
    short: 'ST',
    countryCode: '7200',
    ddi: '+239',
    flag: 'sao-tome-and-principe',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 99 99';
      return '99 99 99';
    },
  },
  {
    name: countriesMessage.SA,
    short: 'SA',
    countryCode: '531',
    ddi: '+966',
    flag: 'saudi-arabia',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.SN,
    short: 'SN',
    countryCode: '7285',
    ddi: '+221',
    flag: 'senegal',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.RS,
    short: 'RS',
    countryCode: '7370',
    ddi: '+381',
    flag: 'serbia',
    phoneMask: (phone) => {
      if (phone.length > 9) return '99 9999 999';
      return '99 9999 999';
    },
  },
  {
    name: countriesMessage.SC,
    short: 'SC',
    countryCode: '7315',
    ddi: '+248',
    flag: 'seychelles',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.SL,
    short: 'SL',
    countryCode: '7358',
    ddi: '+232',
    flag: 'sierra-leone',
    phoneMask: (phone) => {
      if (phone.length > 8) return '99 999999';
      return '99 999999';
    },
  },
  {
    name: countriesMessage.SG,
    short: 'SG',
    countryCode: '7412',
    ddi: '+65',
    flag: 'singapore',
    phoneMask: (phone) => {
      if (phone.length > 8) return '9999 9999';
      return '9999 9999';
    },
  },
  {
    name: countriesMessage.SK,
    short: 'SK',
    countryCode: '2470',
    ddi: '+421',
    cepLength: 5,
    flag: 'slovakia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '[99]9 999 9999';
      return '[99]9 999 9999';
    },
  },
  {
    name: countriesMessage.SI,
    short: 'SI',
    countryCode: '2461',
    ddi: '+386',
    cepLength: 4,
    flag: 'slovenia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 99 99';
      return '9 999 99 99';
    },
  },
  {
    name: countriesMessage.SB,
    short: 'SB',
    countryCode: '6777',
    ddi: '+677',
    flag: 'solomon-islands',
    phoneMask: (phone) => {
      if (phone.length > 5) return '99999';
      return '99999';
    },
  },
  {
    name: countriesMessage.SO,
    short: 'SO',
    countryCode: '7480',
    ddi: '+252',
    flag: 'somalia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.ZA,
    short: 'ZA',
    countryCode: '7560',
    ddi: '+27',
    flag: 'south-africa',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.KR,
    short: 'KR',
    countryCode: '1902',
    ddi: '+82',
    flag: 'south-korea',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99-9999-9999';
      return '99-9999-9999';
    },
  },
  { name: countriesMessage.SS, short: 'SS', countryCode: '7600', ddi: '+211', flag: 'south-sudan' },
  {
    name: countriesMessage.ES,
    short: 'ES',
    countryCode: '2453',
    ddi: '+34',
    cepLength: 5,
    flag: 'spain',
    phoneMask: (phone) => {
      if (phone.length > 11) return '999 999 999';
      return '999 999 999';
    },
  },
  {
    name: countriesMessage.LK,
    short: 'LK',
    countryCode: '7501',
    ddi: '+94',
    flag: 'sri-lanka',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.SD,
    short: 'SD',
    countryCode: '7595',
    ddi: '+249',
    flag: 'sudan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.SR,
    short: 'SR',
    countryCode: '7706',
    ddi: '+597',
    flag: 'suriname',
    phoneMask: (phone) => {
      if (phone.length > 6) return '999 999';
      return '999 999';
    },
  },
  {
    name: countriesMessage.SE,
    short: 'SE',
    countryCode: '7641',
    ddi: '+46',
    cepLength: 5,
    flag: 'sweden',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.CH,
    short: 'CH',
    countryCode: '7676',
    ddi: '+41',
    cepLength: 4,
    flag: 'switzerland',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.SY,
    short: 'SY',
    countryCode: '7447',
    ddi: '+963',
    flag: 'syria',
    phoneMask: (phone) => {
      if (phone.length > 9) return '99 9999 999';
      return '99 9999 999';
    },
  },
  {
    name: countriesMessage.TW,
    short: 'TW',
    countryCode: '1619',
    ddi: '+886',
    flag: 'taiwan',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.TJ,
    short: 'TJ',
    countryCode: '7722',
    ddi: '+992',
    flag: 'tajikistan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.TZ,
    short: 'TZ',
    countryCode: '7803',
    ddi: '+255',
    flag: 'tanzania',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.TH,
    short: 'TH',
    countryCode: '7765',
    ddi: '+66',
    flag: 'thailand',
    phoneMask: (phone) => {
      if (phone.length > 9) return '9 9999 9999';
      return '9 9999 9999';
    },
  },
  {
    name: countriesMessage.TL,
    short: 'TL',
    countryCode: '7951',
    ddi: '+670',
    flag: 'timor-leste',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999 9999';
      return '999 9999';
    },
  },
  {
    name: countriesMessage.TG,
    short: 'TG',
    countryCode: '8001',
    ddi: '+228',
    flag: 'togo',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.TO,
    short: 'TO',
    countryCode: '8109',
    ddi: '+676',
    flag: 'tonga',
    phoneMask: (phone) => {
      if (phone.length > 5) return '99 999';
      return '99 999';
    },
  },
  {
    name: countriesMessage.TT,
    short: 'TT',
    countryCode: '8150',
    ddi: '+1-868',
    flag: 'trinidad-and-tobago',
    phoneMask: (phone) => {
      if (phone.length > 7) return '999-9999';
      return '999-9999';
    },
  },
  {
    name: countriesMessage.TN,
    short: 'TN',
    countryCode: '8206',
    ddi: '+216',
    flag: 'tunisia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 999';
      return '99 999 999';
    },
  },
  {
    name: countriesMessage.TR,
    short: 'TR',
    countryCode: '8273',
    ddi: '+90',
    flag: 'turkey',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(999) 999 9999';
      return '(999) 999 9999';
    },
  },
  {
    name: countriesMessage.TM,
    short: 'TM',
    countryCode: '8249',
    ddi: '+993',
    flag: 'turkmenistan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.TV,
    short: 'TV',
    countryCode: '8281',
    ddi: '+688',
    flag: 'tuvalu',
    phoneMask: (phone) => {
      if (phone.length > 5) return '99 999';
      return '99 999';
    },
  },
  {
    name: countriesMessage.UG,
    short: 'UG',
    countryCode: '8338',
    ddi: '+256',
    flag: 'uganda',
    phoneMask: (phone) => {
      if (phone.length > 9) return '[9]99 999 999';
      return '[9]99 999 999';
    },
  },
  {
    name: countriesMessage.UA,
    short: 'UA',
    countryCode: '8311',
    ddi: '+380',
    flag: 'ukraine',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.AE,
    short: 'AE',
    countryCode: '2445',
    ddi: '+971',
    flag: 'united-arab-emirates',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 9999';
      return '9 999 9999';
    },
  },
  {
    name: countriesMessage.GB,
    short: 'GB',
    countryCode: '6289',
    ddi: '+44',
    cepLength: 7,
    flag: 'united-kingdom',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 9999 9999';
      return '99 9999 9999';
    },
  },
  {
    name: countriesMessage.US,
    short: 'US',
    countryCode: '2496',
    ddi: '+1',
    cepLength: 5,
    flag: 'united-states',
    phoneMask: (phone) => {
      if (phone.length > 10) return '(999) 999-9999';
      return '(999) 999-9999';
    },
  },
  {
    name: countriesMessage.UY,
    short: 'UY',
    countryCode: '8451',
    ddi: '+598',
    flag: 'uruguay',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 99 99';
      return '9 999 99 99';
    },
  },
  {
    name: countriesMessage.UZ,
    short: 'UZ',
    countryCode: '8478',
    ddi: '+998',
    flag: 'uzbekistan',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.VU,
    short: 'VU',
    countryCode: '5517',
    ddi: '+678',
    flag: 'vanuatu',
    phoneMask: (phone) => {
      if (phone.length > 6) return '99 9999';
      return '99 9999';
    },
  },
  {
    name: countriesMessage.VA,
    short: 'VA',
    countryCode: '8486',
    ddi: '+379',
    flag: 'vatican-city',
    phoneMask: (phone) => {
      if (phone.length > 11) return '99 999 99999';
      return '99 999 99999';
    },
  },
  {
    name: countriesMessage.VE,
    short: 'VE',
    countryCode: '8508',
    ddi: '+58',
    flag: 'venezuela',
    phoneMask: (phone) => {
      if (phone.length > 10) return '999-9999999';
      return '999-9999999';
    },
  },
  {
    name: countriesMessage.VN,
    short: 'VN',
    countryCode: '8583',
    ddi: '+84',
    flag: 'vietnam',
    phoneMask: (phone) => {
      if (phone.length > 9) return '99 9999 999';
      return '99 9999 999';
    },
  },
  {
    name: countriesMessage.YE,
    short: 'YE',
    countryCode: '3573',
    ddi: '+967',
    flag: 'yemen',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999 999';
      return '9 999 999';
    },
  },
  {
    name: countriesMessage.ZM,
    short: 'ZM',
    countryCode: '8907',
    ddi: '+260',
    flag: 'zambia',
    phoneMask: (phone) => {
      if (phone.length > 10) return '99 999 9999';
      return '99 999 9999';
    },
  },
  {
    name: countriesMessage.ZW,
    short: 'ZW',
    countryCode: '6653',
    ddi: '+263',
    flag: 'zimbabwe',
    phoneMask: (phone) => {
      if (phone.length > 10) return '9 999999';
      return '9 999999';
    },
  },
];
