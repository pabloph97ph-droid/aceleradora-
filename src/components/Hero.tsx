import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed Metadata Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#b0f443] tracking-wide mb-6">
          <span>OPERAÇÃO COMERCIAL B2B</span>
          <span aria-hidden="true">·</span>
          <span>ACESSO EXCLUSIVO DA FORÇA DE VENDAS</span>
          <span aria-hidden="true">·</span>
          <span>VERSÃO OPERACIONAL ATIVA</span>
        </div>

        {/* Main Editorial Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f4f6] leading-[1.1] mb-6">
            O mercado está mudando.
          </h1>
          <p className="text-lg sm:text-xl text-[#9ca3af] leading-relaxed max-w-3xl mb-8">
            Empresas locais não precisam de mais postagens decorativas em redes sociais ou promessas de agências genéricas. Elas precisam de <span className="text-[#f3f4f6] font-medium">infraestrutura comercial própria</span>, automação de alta velocidade e previsibilidade de clientes na porta.
          </p>
        </div>

        {/* Technologies accessible to local businesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div className="p-5 bg-[#111316] border border-[#22272e] rounded hover:border-[#b0f443]/40 transition-colors">
            <div className="flex items-center gap-2 text-[#b0f443] text-sm font-semibold mb-2">
              <Cpu className="w-4 h-4" />
              <span>CRM Conversacional & WhatsApp 24/7</span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Atendimento automatizado em menos de 60 segundos com triagem inteligente, evitando que o lead compre do concorrente no fim de semana.
            </p>
          </div>

          <div className="p-5 bg-[#111316] border border-[#22272e] rounded hover:border-[#b0f443]/40 transition-colors">
            <div className="flex items-center gap-2 text-[#b0f443] text-sm font-semibold mb-2">
              <Zap className="w-4 h-4" />
              <span>Mídia Paga Hiperlocal (Raio 3–10km)</span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Campanhas focadas em clientes com intenção imediata de compra no bairro, com geofencing estrito e zero dispersão orçamentária.
            </p>
          </div>

          <div className="p-5 bg-[#111316] border border-[#22272e] rounded hover:border-[#b0f443]/40 transition-colors">
            <div className="flex items-center gap-2 text-[#b0f443] text-sm font-semibold mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>Otimização Algorítmica Google Meu Negócio</span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Dominação do Top 3 nas pesquisas locais do Google Maps, captando mais de 80% dos compradores prontos para consumir.
            </p>
          </div>

          <div className="p-5 bg-[#111316] border border-[#22272e] rounded hover:border-[#b0f443]/40 transition-colors">
            <div className="flex items-center gap-2 text-[#b0f443] text-sm font-semibold mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Landing Pages Ultrarrápidas</span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Páginas mobile-first com carregamento sub-segundo, desenhadas com foco exclusivo em clique para WhatsApp ou agendamento direto.
            </p>
          </div>

          <div className="p-5 bg-[#111316] border border-[#22272e] rounded hover:border-[#b0f443]/40 transition-colors">
            <div className="flex items-center gap-2 text-[#b0f443] text-sm font-semibold mb-2">
              <Shield className="w-4 h-4" />
              <span>Atribuição & Métricas de Caixa Real</span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Rastreamento ponta a ponta: o cliente sabe exatamente quanto faturou para cada real investido, sem métricas ilusórias de vaidade.
            </p>
          </div>

          <div className="p-5 bg-[#111316] border border-[#22272e] rounded hover:border-[#b0f443]/40 transition-colors">
            <div className="flex items-center gap-2 text-[#b0f443] text-sm font-semibold mb-2">
              <ArrowRight className="w-4 h-4" />
              <span>Motor de Reativação Contínua de Base</span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Disparos programados para clientes inativos a cada 30 e 60 dias, multiplicando o valor vitalício (LTV) com custo de aquisição zero.
            </p>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="p-6 bg-[#111316] border border-[#22272e] rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#22272e]">
            <div className="pt-3 md:pt-0 md:px-4 first:pl-0">
              <div className="text-xs font-mono text-[#9ca3af] mb-1">SUA COMISSÃO DIRETA</div>
              <div className="text-3xl font-bold font-mono text-[#b0f443] tabular-figures">30%</div>
              <div className="text-xs text-[#9ca3af] mt-1">Até R$ 5.070,00 por contrato fechado</div>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <div className="text-xs font-mono text-[#9ca3af] mb-1">MÍDIA ASSUMIDA PELA EMPRESA</div>
              <div className="text-3xl font-bold font-mono text-[#f3f4f6] tabular-figures">R$ 1.500</div>
              <div className="text-xs text-[#9ca3af] mt-1">Verba inicial garantida no Pacote 02</div>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <div className="text-xs font-mono text-[#9ca3af] mb-1">EFICIÊNCIA DE CONVERSÃO</div>
              <div className="text-3xl font-bold font-mono text-[#b0f443] tabular-figures">&lt; 60s</div>
              <div className="text-xs text-[#9ca3af] mt-1">Tempo de resposta inicial automatizada</div>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <div className="text-xs font-mono text-[#9ca3af] mb-1">MODELO DE OPERAÇÃO</div>
              <div className="text-3xl font-bold font-mono text-[#f3f4f6]">Turnkey</div>
              <div className="text-xs text-[#9ca3af] mt-1">Infraestrutura completa entregue pronta</div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#181b1f] border border-[#22272e] rounded">
          <div className="text-sm text-[#9ca3af]">
            <strong className="text-[#f3f4f6]">Objetivo desta plataforma:</strong> Servir de referência estratégica, precificação transparente e roteiro de prospecção para fechamento de contratos de alta margem.
          </div>
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#08090a] bg-[#b0f443] hover:bg-[#c2f763] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Abrir Checklist de Prospecção (7 Passos)
          </button>
        </div>

      </div>
    </section>
  );
};
