import React from 'react';
import { COMPARISON_FEATURES } from '../data/playbookData';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            MATRIZ COMPARATIVA DE ESCOPO
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6] mb-3">
            Comparativo Técnico e Comercial dos Pacotes
          </h2>
          <p className="text-sm text-[#9ca3af] max-w-3xl">
            Tabela de consulta rápida para o vendedor dirimir dúvidas de escopo do cliente durante a reunião de apresentação de proposta.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="overflow-x-auto border border-[#22272e] rounded-lg bg-[#111316]">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-[#22272e] bg-[#181b1f]">
                <th className="py-4 px-6 text-xs font-mono text-[#9ca3af] uppercase tracking-wider w-2/5">
                  Recurso / Entregável
                </th>
                <th className="py-4 px-6 text-xs font-mono text-[#9ca3af] uppercase tracking-wider w-1/5 text-center">
                  Presença (R$ 2.900)
                </th>
                <th className="py-4 px-6 text-xs font-mono text-[#b0f443] uppercase tracking-wider w-1/5 text-center bg-[#b0f443]/5 border-x border-[#b0f443]/30">
                  Crescimento (R$ 8.900) ★
                </th>
                <th className="py-4 px-6 text-xs font-mono text-[#9ca3af] uppercase tracking-wider w-1/5 text-center">
                  Dominação (R$ 16.900)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22272e] text-xs">
              {COMPARISON_FEATURES.map((catGroup, cIdx) => (
                <React.Fragment key={cIdx}>
                  {/* Category Header Row */}
                  <tr className="bg-[#08090a]/80">
                    <td
                      colSpan={4}
                      className="py-2.5 px-6 font-mono text-[11px] font-semibold text-[#b0f443] uppercase tracking-wider"
                    >
                      {catGroup.category}
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {catGroup.features.map((feat, fIdx) => (
                    <tr
                      key={fIdx}
                      className="hover:bg-[#181b1f]/50 transition-colors"
                    >
                      <td className="py-3 px-6 text-[#f3f4f6] font-medium">
                        {feat.name}
                      </td>
                      <td className="py-3 px-6 text-center text-[#9ca3af]">
                        {feat.p1}
                      </td>
                      <td className="py-3 px-6 text-center text-[#f3f4f6] font-medium bg-[#b0f443]/5 border-x border-[#b0f443]/20">
                        {feat.p2}
                      </td>
                      <td className="py-3 px-6 text-center text-[#f3f4f6]">
                        {feat.p3}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#9ca3af] font-mono">
          <span>* Todos os pacotes contam com contrato formal assinado digitalmente e SLA garantido.</span>
          <span className="text-[#b0f443]">Comissão de 30% válida para todos os 3 pacotes</span>
        </div>

      </div>
    </section>
  );
};
