export interface ScrapPrice {
  id: string;
  material: string;
  category: 'Ferrous' | 'Non-Ferrous';
  grade: string;
  pricePerKg: string;
  trend: 'up' | 'down' | 'stable';
  notes: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface PricingDataPoint {
  day: string;
  price: number;
}
