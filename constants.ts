import { NavItem, ScrapPrice, StatItem, PricingDataPoint } from './types';

export const COMPANY_NAME = "Dithanimba Holdings";
export const PHONE_NUMBER = "+27 12 345 6789";
export const WHATSAPP_NUMBER = "27123456789";
export const EMAIL_INFO = "info@dithanimbaholdings.co.za";
export const EMAIL_PRICES = "prices@dithanimbaholdings.co.za";
export const ADDRESS_MAIN = "123 Industrial Road, Pretoria North, Gauteng, 0182";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'What We Buy', path: '/what-we-buy' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Locations', path: '/locations' },
  { label: 'Contact', path: '/contact' },
];

export const SCRAP_PRICES: ScrapPrice[] = [
  { id: '1', material: 'Copper', grade: '#1 (Bare Bright)', category: 'Non-Ferrous', pricePerKg: 'R140.00', trend: 'up', notes: 'Highest in Pretoria' },
  { id: '2', material: 'Copper', grade: '#2 (Mixed)', category: 'Non-Ferrous', pricePerKg: 'R130.00', trend: 'stable', notes: 'Paint/Oxidation OK' },
  { id: '3', material: 'Copper', grade: 'Insulated Wire', category: 'Non-Ferrous', pricePerKg: 'R30-R110', trend: 'up', notes: 'Varies by recovery %' },
  { id: '4', material: 'Brass', grade: 'Clean Mixed', category: 'Non-Ferrous', pricePerKg: 'R45.00', trend: 'up', notes: 'Best in Gauteng' },
  { id: '5', material: 'Aluminium', grade: 'Clean Sheet', category: 'Non-Ferrous', pricePerKg: 'R22.00', trend: 'stable', notes: 'Standard grade' },
  { id: '6', material: 'Aluminium', grade: 'Rims', category: 'Non-Ferrous', pricePerKg: 'R25.00', trend: 'up', notes: 'No tires/valves' },
  { id: '7', material: 'Stainless Steel', grade: '304/316', category: 'Non-Ferrous', pricePerKg: 'R12-R16', trend: 'stable', notes: 'Non-magnetic preferred' },
  { id: '8', material: 'Steel', grade: 'Light Iron/HMS', category: 'Ferrous', pricePerKg: 'R1.50', trend: 'down', notes: 'Appliances/Sheet' },
  { id: '9', material: 'Car Bodies', grade: 'Complete', category: 'Ferrous', pricePerKg: 'R2000+', trend: 'stable', notes: 'Must have paperwork' },
  { id: '10', material: 'Catalytic Converters', grade: 'Various', category: 'Non-Ferrous', pricePerKg: 'R8000+', trend: 'up', notes: 'Call for quote' },
];

export const COPPER_CHART_DATA: PricingDataPoint[] = [
  { day: 'Nov 3', price: 125 },
  { day: 'Nov 10', price: 128 },
  { day: 'Nov 17', price: 132 },
  { day: 'Nov 24', price: 135 },
  { day: 'Dec 1', price: 138 },
  { day: 'Dec 3', price: 140 },
];

export const STATS: StatItem[] = [
  { label: 'Paid Out', value: '150', suffix: 'm+', description: 'Paid to Sellers' },
  { label: 'Recycled', value: '2', suffix: 'M Tons+', description: 'Metal kept out of landfills' },
  { label: 'Since 2017', value: 'Top', suffix: ' Prices', description: 'Top Copper Scrap Prices' },
];