import { CryptoAsset, ChartPoint } from "@/src/types";

export const MOCK_ASSETS: CryptoAsset[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 64200.50, change24h: '+1.2%', isPositive: true },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3450.20, change24h: '-0.5%', isPositive: false },
  { id: '3', name: 'Solana', symbol: 'SOL', price: 145.80, change24h: '+5.7%', isPositive: true },
];

export const MOCK_CHART_DATA: ChartPoint[] = [
  { time: "00:00", price: 62000 }, { time: "04:00", price: 63500 },
  { time: "08:00", price: 63000 }, { time: "12:00", price: 65000 },
  { time: "16:00", price: 64200 }, { time: "20:00", price: 66000 },
];