import React from 'react';
import { Target, ArrowUp, Shield } from 'lucide-react';

interface ManifestoFooterProps {
  onOpenModal: () => void;
}

export const ManifestoFooter: React.FC<ManifestoFooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090a] border-t border-[#22272e] pt-20 pb-16 text-[#9ca3af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Commercial Manifesto Block */}
        <div className="p-8 sm:p-12 bg-[#111316] border border-[#b0f443]/40 rounded-xl mb-16 lime-glow-subtle relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-[#b0f443] uppercase tracking-wider mb-4">
              MANIFESTO COMERCIAL DA OPERAÇÃO
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f3f4f6] mb-6 leading-[1.15]">
              "Não vendemos tecnologia. Vendemos capacidade."
            </h3>

            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed mb-8">
              O empresário local não acorda querendo um pixel de conversão, uma landing page ou um funil de CRM. Ele quer previsibilidade de faturamento no caixa, controle absoluto da própria demanda e o fim definitivo da dependência do acaso. Nós construímos o motor que viabiliza isso.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenModal}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#08090a] bg-[#b0f443] hover:bg-[#c2f763] rounded transition-colors lime-glow-sm cursor-pointer whitespace-nowrap"
              >
                <Target className="w-4 h-4" />
                <span>Começar a Prospecção Agora (7 Passos)</span>
              </button>

              <span className="text-xs font-mono text-[#9ca3af] self-center">
                Checklist executivo com scripts prontos para cópia
              </span>
            </div>
          </div>
        </div>

        {/* Footer Meta & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#22272e] text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#b0f443]" />
            <span className="text-[#f3f4f6] font-semibold">
              OPERAÇÃO // ACELERAÇÃO LOCAL B2B
            </span>
            <span className="text-[#9ca3af]">·</span>
            <span>DOCUMENTO ESTRATÉGICO INTERNO</span>
          </div>

          <div className="flex items-center gap-6">
            <span>COMISSÃO GARANTIDA: 30%</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#9ca3af] hover:text-[#f3f4f6] transition-colors cursor-pointer"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-[11px] text-[#6b7280]">
          Uso confidencial reservado aos executivos e consultores comerciais credenciados na operação de digitalização local.
        </div>

      </div>
    </footer>
  );
};
