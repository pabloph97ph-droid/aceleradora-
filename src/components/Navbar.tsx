import React from 'react';
import { Target, ChevronRight } from 'lucide-react';

interface NavbarProps {
  scrollProgress: number;
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress, onOpenModal }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090a]/90 backdrop-blur-md border-b border-[#22272e]">
      {/* Scroll Progress Bar at the very top */}
      <div className="w-full h-[2px] bg-[#111316]">
        <div
          className="h-full bg-[#b0f443] transition-all duration-75 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#b0f443] group-hover:shadow-[0_0_8px_#b0f443] transition-shadow" />
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#f3f4f6]">
            OPERAÇÃO // ACELERAÇÃO LOCAL
          </span>
          <span className="hidden lg:inline text-xs text-[#9ca3af] font-mono border-l border-[#22272e] pl-2 ml-1">
            PLAYBOOK COMERCIAL B2B
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#9ca3af]">
          <a href="#mercado" className="hover:text-[#f3f4f6] transition-colors">
            01. Oportunidade
          </a>
          <a href="#pilares" className="hover:text-[#f3f4f6] transition-colors">
            02. 5 Pilares
          </a>
          <a href="#pacotes" className="hover:text-[#f3f4f6] transition-colors">
            03. Pacotes
          </a>
          <a href="#custos" className="hover:text-[#f3f4f6] transition-colors">
            04. Custos Internos
          </a>
          <a href="#remuneracao" className="hover:text-[#f3f4f6] transition-colors">
            05. Comissão (30%)
          </a>
          <a href="#simulador" className="hover:text-[#f3f4f6] transition-colors">
            06. Simulador
          </a>
          <a href="#playbook" className="hover:text-[#f3f4f6] transition-colors">
            07. Diagnóstico
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-semibold text-[#08090a] bg-[#b0f443] hover:bg-[#c2f763] rounded transition-colors whitespace-nowrap lime-glow-sm cursor-pointer"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Começar Prospecção</span>
            <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};
