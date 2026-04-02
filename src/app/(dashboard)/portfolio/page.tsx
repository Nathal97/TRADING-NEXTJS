"use client";

import { AnimatedContainer } from "@/src/components/ui/animated-container";
import { PortfolioAllocation } from "@/src/components/charts/portfolio-allocation";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";

const ASSETS_DETAILS = [
  { name: "Bitcoin", symbol: "BTC", amount: "1.24", value: "$79,600", change: "+2.4%", isPositive: true, color: "bg-orange-500" },
  { name: "Ethereum", symbol: "ETH", amount: "15.5", value: "$38,750", change: "-1.1%", isPositive: false, color: "bg-indigo-500" },
  { name: "Solana", symbol: "SOL", amount: "120.0", value: "$18,240", change: "+5.7%", isPositive: true, color: "bg-teal-500" },
];

export default function PortfolioPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header avec Statut Global */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Mon Portefeuille</h1>
          <p className="text-gray-400 mt-1">Analyse globale de vos actifs numériques</p>
        </div>
        <div className="flex items-center gap-3 bg-[#161618] p-2 rounded-2xl border border-white/5">
          <div className="px-4 py-2 bg-blue-600/10 rounded-xl">
            <p className="text-[10px] uppercase text-blue-400 font-bold tracking-widest">Statut</p>
            <p className="text-sm font-semibold text-blue-200">Optimisé</p>
          </div>
        </div>
      </header>

      {/* Grille Principale */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Colonne GAUCHE : Stats et Donut */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedContainer delay={0.1}>
              <div className="bg-blue-600 p-8 rounded-[32px] text-white relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
                <Wallet className="w-8 h-8 mb-6 opacity-80" />
                <p className="text-blue-100 text-sm font-medium">Valeur Totale Estimée</p>
                <h2 className="text-4xl font-bold font-mono mt-1">$124,500.00</h2>
                <div className="flex items-center gap-2 mt-4 text-sm bg-black/20 w-fit px-3 py-1 rounded-full">
                  <ArrowUpRight className="w-4 h-4 text-green-300" />
                  <span className="text-green-300 font-medium">+14.2%</span>
                  <span className="opacity-60 text-xs ml-1">ce mois</span>
                </div>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2}>
              <div className="bg-[#161618] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Profit Net (24h)</p>
                  <h2 className="text-3xl font-bold font-mono mt-1 text-green-500">+$2,430.12</h2>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-1 flex-1 bg-green-500/20 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[70%]" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-tighter">Objectif annuel : 70% complété</p>
              </div>
            </AnimatedContainer>
          </div>

          {/* Zone du Donut Chart */}
          <AnimatedContainer delay={0.3}>
            <div className="bg-[#161618] border border-white/5 p-8 rounded-[32px]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg flex items-center gap-2">
                   <TrendingUp className="w-5 h-5 text-blue-500" /> Répartition Stratégique
                </h3>
              </div>
              <PortfolioAllocation />
            </div>
          </AnimatedContainer>
        </div>

        {/* Colonne DROITE : Liste détaillée */}
        <div className="lg:col-span-4 space-y-6">
          <AnimatedContainer delay={0.4}>
            <div className="bg-[#161618] border border-white/5 p-6 rounded-[32px] h-full">
              <h3 className="font-bold mb-6">Détails des Assets</h3>
              <div className="space-y-3">
                {ASSETS_DETAILS.map((asset, i) => (
                  <div key={i} className="group flex items-center justify-between p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${asset.color} bg-opacity-20 text-white`}>
                        {asset.symbol}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{asset.name}</p>
                        <p className="text-[10px] text-gray-500 font-mono">{asset.amount} {asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold font-mono">{asset.value}</p>
                      <p className={`text-[10px] font-bold ${asset.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {asset.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-4 border border-dashed border-white/10 rounded-2xl text-gray-500 text-xs hover:border-blue-500/50 hover:text-blue-400 transition-all">
                + Ajouter un actif
              </button>
            </div>
          </AnimatedContainer>
        </div>
      </div>

      {/* Barre de Commande IA ( Text2Query) */}
      <AnimatedContainer delay={0.5}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0b] border border-blue-500/20 p-8 rounded-[32px]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold">Assistant IA Text2Query</h3>
                <p className="text-gray-400 text-sm mt-1">Interrogez vos données en langage naturel (SQL Engine v1.0)</p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <input 
                  type="text" 
                  placeholder="Ex: 'Solde total par mois...'"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-5 text-sm outline-none focus:border-blue-500 transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold transition-colors">
                  Run
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </div>
  );
}