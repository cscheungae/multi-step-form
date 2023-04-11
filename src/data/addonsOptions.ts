import { PaymentPeriod } from '@/types';

const options: {
  addonKey: number;
  addonTitle: string;
  addonDescription: string;
  price: number;
  paymentPeriod: PaymentPeriod;
}[] = [
  {
    addonKey: 0,
    addonTitle: 'form-addons-online-service-title',
    addonDescription: 'form-addons-online-service-description',
    price: 1,
    paymentPeriod: 1,
  },
  {
    addonKey: 1,
    addonTitle: 'form-addons-larger-storage-title',
    addonDescription: 'form-addons-larger-storage-description',
    price: 2,
    paymentPeriod: 1,
  },
  {
    addonKey: 2,
    addonTitle: 'form-addons-customizable-title',
    addonDescription: 'form-addons-customizable-description',
    price: 2,
    paymentPeriod: 1,
  },
  {
    addonKey: 3,
    addonTitle: 'form-addons-online-service-title',
    addonDescription: 'form-addons-online-service-description',
    price: 10,
    paymentPeriod: 12,
  },
  {
    addonKey: 4,
    addonTitle: 'form-addons-larger-storage-title',
    addonDescription: 'form-addons-larger-storage-description',
    price: 20,
    paymentPeriod: 12,
  },
  {
    addonKey: 5,
    addonTitle: 'form-addons-customizable-title',
    addonDescription: 'form-addons-customizable-description',
    price: 20,
    paymentPeriod: 12,
  },
];

export default options;
