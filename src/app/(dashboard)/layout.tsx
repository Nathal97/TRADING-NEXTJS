import { Home, BarChart2, Wallet, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0a0a0b] text-white">
      {/* Sidebar Verticale */}
      <aside className="w-20 border-r border-white/5 flex flex-col items-center py-8 justify-between">
        <div className="space-y-8 flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">
            S
          </div>
          <nav className="flex flex-col gap-6 text-gray-500">
            <Home className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
            <BarChart2 className="w-6 h-6 text-blue-500" /> {/* Active */}
            <Wallet className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
            <Settings className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
          </nav>
        </div>
        <LogOut className="w-6 h-6 text-gray-500 cursor-pointer hover:text-red-500 transition-colors" />
      </aside>

      {/* Contenu de la page */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}