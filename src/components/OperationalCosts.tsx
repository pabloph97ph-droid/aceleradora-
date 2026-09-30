import React, { useState } from 'react';
import { OPERATIONAL_COSTS_DATA } from '../data/playbookData';
import { Lock, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export const OperationalCosts: React.FC = () => {
  const [showItemDetails, setShowItemDetails] = useState(true);
  const data = OPERATIONAL_COSTS_DATA;

  return (
    <section id="custos" className="py-20 lg:py-24 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Confidentiality Warning Header */}
        <div className="p-4 bg-[#181b1f] border-l-4 border-[#b0f443] rounded-r border-y border-r border-[#22272e] mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#b0f443] shrink-0" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#b0f443] uppercase">
              SEÇÃO RESTRITA // APENAS OPERAÇÃO INTERNA E FORÇA DE VENDAS
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#9ca3af]">
            NÃO COMPARTILHAR OU EXIBIR ESTA TELA PARA CLIENTES FINAIS
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <div className="text-xs font-mono text-[#9ca3af] tracking-wide mb-2">
            04. PROVISÃO FINANCEIRA & SAÚDE OPERACIONAL
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6] mb-3">
            Estrutura de Custos Operacionais (Pacote Dominação)
          </h2>
          <p className="text-sm text-[#9ca3af] max-w-3xl leading-relaxed">
            Para garantir excelência técnica e sustentabilidade ao longo dos 6 meses de contrato, a nossa operação reserva uma provisão orçamentária rígida de <span className="text-[#f3f4f6] font-medium">{data.provisionFormatted}</span> para custear infraestrutura, mídia, equipamentos e equipe de engenharia.
          </p>
        </div>

        {/* Financial Flow Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Operational Cost Provision */}
          <div className="p-6 bg-[#111316] border border-[#22272e] rounded-lg">
            <div className="text-xs font-mono text-[#9ca3af] uppercase mb-1">
              PROVISÃO OPERACIONAL DE CUSTO
            </div>
            <div className="text-3xl font-bold font-mono text-[#f3f4f6] tabular-figures">
              {data.provisionFormatted}
            </div>
            <div className="text-xs font-mono text-[#9ca3af] mt-1">
              {data.provisionPercentage} do valor bruto (R$ 16.900)
            </div>
            <p className="text-xs text-[#9ca3af] mt-4 pt-4 border-t border-[#22272e] leading-relaxed">
              Cobre infraestrutura de software, verba de testes, diária presencial de gravação e 6 meses de suporte ativo.
            </p>
          </div>

          {/* Card 2: Sales Rep Commission */}
          <div className="p-6 bg-[#111316] border border-[#b0f443]/40 rounded-lg lime-glow-subtle">
            <div className="text-xs font-mono text-[#b0f443] uppercase mb-1">
              SUA COMISSÃO DIRETA (30%)
            </div>
            <div className="text-3xl font-bold font-mono text-[#b0f443] tabular-figures">
              {data.vendorCommissionFormatted}
            </div>
            <div className="text-xs font-mono text-[#9ca3af] mt-1">
              {data.vendorCommissionPercentage} do valor bruto
            </div>
            <p className="text-xs text-[#9ca3af] mt-4 pt-4 border-t border-[#22272e] leading-relaxed">
              Líquido para você. Liberado conforme a liquidação financeira do contrato, sem pegadinhas ou descontos ocultos.
            </p>
          </div>

          {/* Card 3: Net Company Margin */}
          <div className="p-6 bg-[#111316] border border-[#22272e] rounded-lg">
            <div className="text-xs font-mono text-[#9ca3af] uppercase mb-1">
              MARGEM LÍQUIDA DA OPERAÇÃO
            </div>
            <div className="text-3xl font-bold font-mono text-[#f3f4f6] tabular-figures">
              {data.companyNetMarginFormatted}
            </div>
            <div className="text-xs font-mono text-[#9ca3af] mt-1">
              {data.companyNetMarginPercentage} do valor bruto
            </div>
            <p className="text-xs text-[#9ca3af] mt-4 pt-4 border-t border-[#22272e] leading-relaxed">
              Reserva de segurança da empresa para reinvestimento em inteligência, ferramentas proprietárias e escala.
            </p>
          </div>

        </div>

        {/* Detailed Item Ledger */}
        <div className="bg-[#111316] border border-[#22272e] rounded-lg overflow-hidden">
          <div
            onClick={() => setShowItemDetails(!showItemDetails)}
            className="p-5 bg-[#181b1f] border-b border-[#22272e] flex items-center justify-between cursor-pointer hover:bg-[#22272e]/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#f3f4f6] uppercase">
                Detalhamento da Provisão Operacional de R$ 6.700,00
              </span>
              <span className="text-[11px] font-mono text-[#9ca3af] hidden sm:inline">
                (5 rubricas de alocação)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#b0f443]">
              <span>{showItemDetails ? 'Ocultar Detalhes' : 'Ver Detalhes'}</span>
              {showItemDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </div>

          {showItemDetails && (
            <div className="divide-y divide-[#22272e]">
              {data.items.map((item, idx) => (
                <div key={idx} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#181b1f]/30 transition-colors">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#b0f443]">0{idx + 1}.</span>
                      <h4 className="text-sm font-semibold text-[#f3f4f6]">{item.item}</h4>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed pl-5">
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-left md:text-right pl-5 md:pl-0">
                    <div className="text-sm font-bold font-mono text-[#f3f4f6] tabular-figures">
                      {item.costFormatted}
                    </div>
                    <span className="text-[11px] text-[#9ca3af] font-mono">
                      {((item.cost / data.totalProvision) * 100).toFixed(1)}% da provisão
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Why this matters for the sales representative */}
        <div className="mt-8 p-5 bg-[#08090a] border border-[#22272e] rounded text-xs text-[#9ca3af] leading-relaxed">
          <strong className="text-[#f3f4f6]">Por que essa informação fortalece o vendedor?</strong> Saber exatamente como os custos são estruturados permite que você defenda o preço de R$ 16.900 com total segurança moral e técnica. O cliente não está pagando um valor arbitrário: ele está contratando uma operação estruturada que aloca quase R$ 7.000 de recursos diretos no sucesso do negócio dele.
        </div>

      </div>
    </section>
  );
};
