import type { IBill, IBuyerDetails, IBuyerDetailsAddress, IPix } from '@/types/props';

import { ETypeDocuments } from '@/types/enum';

import { projectFaker } from '../common/faker';

export const mockPix: IPix = {
  amount: 0,
  code: 'pix/code',
  codeUrl: 'pix/code/url',
};

export const mockBuyerDetails: IBuyerDetails = {
  buyer: projectFaker.person.fullName(),
  ddi: '55',
  document: projectFaker.custom.cpf({ formatted: false }),
  email: projectFaker.internet.email(),
  typeDocument: ETypeDocuments.CPF,
  phone: projectFaker.phone.number({ style: 'national' }),
};

export const mockBill: IBill = {
  barcode: 'bar/code',
  barcodeUrl: 'bar/code/url',
  expDate: new Date('02-02-2025'),
  pdfUrl: 'pdf/url',
};

export const mockBuyerDetailsAddress: IBuyerDetailsAddress = {
  city: projectFaker.location.city(),
  complement: '',
  country: 'BR',
  neighborhood: 'Frei Higino',
  number: projectFaker.location.buildingNumber(),
  shortState: projectFaker.location.state({ abbreviated: true }),
  state: projectFaker.location.state({ abbreviated: false }),
  street: projectFaker.location.street(),
  zipCode: projectFaker.location.zipCode(),
};
