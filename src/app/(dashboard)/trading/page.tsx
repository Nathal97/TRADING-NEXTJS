import { CryptoChart } from "@/src/components/charts/crypto-chart";
import { AnimatedContainer } from "@/src/components/ui/animated-container";
import { MOCK_ASSETS } from "@/src/constants/mock-data";
import { ArrowUpRight, Bell } from "lucide-react";

export default function TradingPage() {
  return (
    <div className="p-8">
      {/* Header Interne */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trading Dashboard</h1>
          <p className="text-gray-400 mt-1">Analyse du marché en temps réel</p>
        </div>
        <button className="relative p-2 bg-[#161618] border border-white/5 rounded-full hover:bg-white/10 transition-all" title="Notifications">
          <Bell className="w-5 h-5 text-gray-300" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0a0a0b]"></span>
        </button>
      </div>

      <div className="my-8 p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl">
        <h3 className="text-blue-400 text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Assistant IA Portefeuille
        </h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ex: 'Quelle est ma performance sur le BTC ce mois-ci ?'"
            className="w-full bg-[#0a0a0b] border border-white/10 rounded-2xl p-4 pl-6 text-sm focus:outline-none focus:border-blue-500 transition-all text-white"
          />
          <kbd className="absolute right-4 top-3.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-500">
            CTRL + K
          </kbd>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Graphique Principal (8 colonnes) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-[#161618] border border-white/5 p-6 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg">₿</div>
                <div>
                  <h2 className="font-semibold text-lg">BTC / USD</h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Bitcoin</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold font-mono">$64,200.50</p>
                <p className="text-sm text-green-500 flex items-center justify-end">
                  <ArrowUpRight className="w-4 h-4" /> +1.2%
                </p>
              </div>
            </div>
            
            <div className="h-[350px] w-full">
              <CryptoChart />
            </div>
          </div>
        </div>

        {/* Liste d'actifs (4 colonnes) */}
        <div className="lg:col-span-4 bg-[#161618] border border-white/5 p-6 rounded-3xl">
          <h3 className="text-lg font-semibold mb-6">Watchlist</h3>
          <div className="space-y-4">
            {MOCK_ASSETS.map((asset, index) => (
              <AnimatedContainer key={asset.id} delay={0.5*index}>
                <div key={asset.id} className="flex justify-between items-center p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-xs text-gray-500 uppercase">{asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold font-mono">${asset.price.toLocaleString()}</p>
                    <p className={`text-xs ${asset.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      {asset.change24h}
                    </p>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}