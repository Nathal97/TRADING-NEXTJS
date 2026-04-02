"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

// Données de portefeuille
const DATA = [
  { name: "Bitcoin", value: 45, color: "#f59e0b" },   // Orange
  { name: "Ethereum", value: 30, color: "#6366f1" },  // Indigo
  { name: "Solana", value: 15, color: "#14b8a6" },    // Teal
  { name: "Autres", value: 10, color: "#3f3f46" },    // Zinc/Gray
];

export function PortfolioAllocation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] w-full" />;

  return (
    <div className="h-[300px] w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={DATA}
            cx="50%" // Centrage horizontal
            cy="50%" // Centrage vertical
            innerRadius={70} // Rayon intérieur (crée le trou)
            outerRadius={100} // Rayon extérieur
            paddingAngle={8}  // Espace entre les tranches
            dataKey="value"
            stroke="none"     // Enlève les bordures par défaut
          >
            {DATA.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={{ 
                backgroundColor: "#161618", 
                border: "1px solid rgba(255,255,255,0.1)", 
                borderRadius: "12px",
                fontSize: "12px"
            }}
            itemStyle={{ color: "#fff" }}
          />
          
          <Legend 
            verticalAlign="bottom" 
            align="center"
            iconType="circle"
            formatter={(value) => <span className="text-xs text-gray-400">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Texte central pour le look "Modern Banking" */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total</span>
        <span className="text-xl font-bold text-white font-mono">$124.5k</span>
      </div>
    </div>
  );
}