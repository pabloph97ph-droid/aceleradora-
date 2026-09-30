import React from 'react';
import { PACKAGES_DATA } from '../data/playbookData';
import { Check, Star, ShieldCheck, DollarSign, Clock } from 'lucide-react';

interface PackagesProps {
  onOpenModal: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenModal }) => {
  return (
    <section id="pacotes" className="py-20 lg:py-28 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            03. ENGENHARIA DE OFERTA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f4f6] mb-4">
            Como funciona a venda e os Três Pacotes Comerciais
          </h2>
          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
            Nós não vendemos "serviços avulsos" nem cobramos por hora trabalhada. O cliente contrata uma <span className="text-[#f3f4f6] font-medium">solução institucional pronta</span>, com prazo determinado, escopo cirúrgico e comissão integral de 30% creditada ao vendedor.
          </p>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isRec = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-all relative ${
                  isRec
                    ? 'bg-[#111316] border-2 border-[#b0f443] lime-glow-subtle'
                    : 'bg-[#111316] border border-[#22272e] hover:border-[#b0f443]/40'
                }`}
              >
                {/* Popular / Recommended Tag */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#b0f443] text-[#08090a] text-xs font-bold font-mono tracking-wider rounded uppercase flex items-center gap-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>PLANO MAIS RECOMENDADO</span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="border-b border-[#22272e] pb-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#9ca3af]">{pkg.id.toUpperCase()}</span>
                      {pkg.badge && (
                        <span className="text-[11px] font-mono text-[#b0f443] border border-[#b0f443]/30 px-2 py-0.5 rounded bg-[#08090a]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-[#f3f4f6] mb-2">{pkg.name}</h3>
                    <p className="text-xs text-[#9ca3af] leading-relaxed min-h-[36px]">{pkg.tagline}</p>
                    
                    {/* Price and Commission Block */}
                    <div className="mt-6 pt-4 border-t border-[#22272e]/60 flex items-baseline justify-between">
                      <div>
                        <div className="text-xs font-mono text-[#9ca3af]">VALOR PARA O CLIENTE</div>
                        <div className="text-3xl font-extrabold font-mono text-[#f3f4f6] tabular-figures">
                          {pkg.priceFormatted}
                        </div>
                        <div className="text-[11px] text-[#9ca3af] mt-0.5">ou até 12x no cartão</div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-mono text-[#b0f443]">SUA COMISSÃO (30%)</div>
                        <div className="text-2xl font-bold font-mono text-[#b0f443] tabular-figures">
                          {pkg.commissionFormatted}
                        </div>
                        <div className="text-[11px] text-[#9ca3af] mt-0.5">líquidos na sua conta</div>
                      </div>
                    </div>
                  </div>

                  {/* Duration & Ideal For */}
                  <div className="space-y-3 mb-6 text-xs text-[#9ca3af] bg-[#08090a] p-4 rounded border border-[#22272e]">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#b0f443] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#f3f4f6]">Duração:</strong> {pkg.duration}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#b0f443] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#f3f4f6]">Perfil ideal:</strong> {pkg.idealFor}
                      </div>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-[#9ca3af] uppercase tracking-wider mb-3">
                      Escopo Técnico Entregue
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#f3f4f6]">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#b0f443] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Differentials Callout */}
                  <div className="mb-6 pt-4 border-t border-[#22272e]">
                    <div className="text-xs font-mono text-[#b0f443] uppercase tracking-wider mb-2">
                      Diferencial Estratégico de Venda
                    </div>
                    {pkg.differentials.map((diff, idx) => (
                      <p key={idx} className="text-xs text-[#9ca3af] leading-relaxed mb-1.5 last:mb-0">
                        • {diff}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-[#22272e]">
                  <button
                    onClick={onOpenModal}
                    className={`w-full py-2.5 px-4 text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      isRec
                        ? 'bg-[#b0f443] text-[#08090a] hover:bg-[#c2f763]'
                        : 'bg-[#181b1f] text-[#f3f4f6] hover:bg-[#22272e] border border-[#22272e]'
                    }`}
                  >
                    <span>Prospectar com {pkg.name.split('//')[1]?.trim() || pkg.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Sales Anchor Box */}
        <div className="mt-12 p-6 bg-[#111316] border border-[#22272e] rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-[#b0f443] uppercase mb-1">
                A Regra de Ouro da Apresentação
              </div>
              <h4 className="text-lg font-bold text-[#f3f4f6]">
                Sempre apresente o Pacote 03 (Dominação) primeiro para ancorar a conversa.
              </h4>
              <p className="text-xs text-[#9ca3af] max-w-3xl mt-1 leading-relaxed">
                Ao apresentar primeiro o ecossistema completo de R$ 16.900, o empresário compreende o tamanho do impacto. Quando você apresenta em seguida o Pacote Crescimento por R$ 8.900 com <strong className="text-[#f3f4f6]">R$ 1.500 de mídia assumida pela nossa operação</strong>, a decisão torna-se óbvia e o fechamento flui sem atrito.
              </p>
            </div>
            <div className="shrink-0 font-mono text-right">
              <span className="text-xs text-[#9ca3af]">Taxa de conversão do Pacote 02:</span>
              <div className="text-xl font-bold text-[#b0f443]">~68% dos contratos</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
