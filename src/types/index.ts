export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: string;
  isPositive: boolean;
}

export interface ChartPoint {
  time: string;
  price: number;
}