import React, { useState } from 'react';
import { TARGET_PROFILES_DATA } from '../data/playbookData';
import { Calculator, Target, Copy, Check, Sparkles, TrendingUp, ChevronRight } from 'lucide-react';

export const SimulatorAndTargets: React.FC = () => {
  // Simulator State
  const [p1Count, setP1Count] = useState<number>(1);
  const [p2Count, setP2Count] = useState<number>(2);
  const [p3Count, setP3Count] = useState<number>(1);
  const [renewalsCount, setRenewalsCount] = useState<number>(3);
  const [bonusTasksCount, setBonusTasksCount] = useState<number>(2);

  // Target Profiles State
  const [selectedProfileId, setSelectedProfileId] = useState<string>(TARGET_PROFILES_DATA[0].id);
  const [copiedPitch, setCopiedPitch] = useState<boolean>(false);

  // Math Calculations
  const p1Commission = p1Count * 870;
  const p2Commission = p2Count * 2670;
  const p3Commission = p3Count * 5070;
  const newSalesTotal = p1Commission + p2Commission + p3Commission;

  // Average monthly renewal fee per active recurring client estimated at R$ 600
  const renewalsTotal = renewalsCount * 600;
  
  // Average production bonus per task estimated at R$ 400
  const bonusTotal = bonusTasksCount * 400;

  const monthlyTotal = newSalesTotal + renewalsTotal + bonusTotal;
  const annualTotal = monthlyTotal * 12;

  // Quick preset handlers
  const handleApplyPreset = (p1: number, p2: number, p3: number, ren: number, bon: number) => {
    setP1Count(p1);
    setP2Count(p2);
    setP3Count(p3);
    setRenewalsCount(ren);
    setBonusTasksCount(bon);
  };

  const selectedProfile = TARGET_PROFILES_DATA.find((p) => p.id === selectedProfileId) || TARGET_PROFILES_DATA[0];

  const handleCopyPitch = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            06. MODELAGEM FINANCEIRA & PERFIS DE PROSPECÇÃO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f4f6] mb-4">
            Simulador de Ganhos & Alvos Prioritários de Prospecção
          </h2>
          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
            Calcule sua remuneração mensal com base nas metas de fechamento e consulte o raio-X completo dos 5 nichos locais mais propensos a contratar a operação.
          </p>
        </div>

        {/* PART 1: Interactive Commission Simulator */}
        <div className="p-6 sm:p-8 bg-[#111316] border border-[#22272e] rounded-lg mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#22272e] mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f3f4f6]">Simulador Matemático de Comissionamento</h3>
                <span className="text-xs text-[#9ca3af]">Ajuste as variáveis e veja a projeção mensal e anualizada</span>
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#9ca3af] mr-1">Cenários:</span>
              <button
                onClick={() => handleApplyPreset(0, 2, 0, 0, 0)}
                className="px-2.5 py-1 text-xs font-mono rounded bg-[#08090a] border border-[#22272e] text-[#9ca3af] hover:text-[#b0f443] hover:border-[#b0f443]/40 cursor-pointer"
              >
                Iniciante (2 Crescimento)
              </button>
              <button
                onClick={() => handleApplyPreset(1, 2, 1, 3, 2)}
                className="px-2.5 py-1 text-xs font-mono rounded bg-[#08090a] border border-[#22272e] text-[#9ca3af] hover:text-[#b0f443] hover:border-[#b0f443]/40 cursor-pointer"
              >
                Operador Ativo (4 Vendas)
              </button>
              <button
                onClick={() => handleApplyPreset(1, 3, 3, 8, 4)}
                className="px-2.5 py-1 text-xs font-mono rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443] cursor-pointer"
              >
                Alta Performance (7 Vendas)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider P1 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-[#f3f4f6]">Pacote 01 // Presença (R$ 870 comissão):</span>
                  <span className="text-[#b0f443] font-bold text-sm">{p1Count} {p1Count === 1 ? 'venda' : 'vendas'}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={p1Count}
                  onChange={(e) => setP1Count(Number(e.target.value))}
                  className="w-full accent-[#b0f443] bg-[#22272e] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Slider P2 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-[#f3f4f6]">Pacote 02 // Crescimento (R$ 2.670 comissão):</span>
                  <span className="text-[#b0f443] font-bold text-sm">{p2Count} {p2Count === 1 ? 'venda' : 'vendas'}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={p2Count}
                  onChange={(e) => setP2Count(Number(e.target.value))}
                  className="w-full accent-[#b0f443] bg-[#22272e] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Slider P3 */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-[#f3f4f6]">Pacote 03 // Dominação (R$ 5.070 comissão):</span>
                  <span className="text-[#b0f443] font-bold text-sm">{p3Count} {p3Count === 1 ? 'venda' : 'vendas'}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={p3Count}
                  onChange={(e) => setP3Count(Number(e.target.value))}
                  className="w-full accent-[#b0f443] bg-[#22272e] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Slider Renewals */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-[#9ca3af]">Clientes em Renovação Ativa (Média R$ 600/mês):</span>
                  <span className="text-[#f3f4f6] font-bold text-sm">{renewalsCount} clientes</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={renewalsCount}
                  onChange={(e) => setRenewalsCount(Number(e.target.value))}
                  className="w-full accent-[#b0f443] bg-[#22272e] h-2 rounded cursor-pointer"
                />
              </div>

              {/* Slider Bonus Tasks */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-[#9ca3af]">Tarefas de Execução/Captação Presencial (Média R$ 400):</span>
                  <span className="text-[#f3f4f6] font-bold text-sm">{bonusTasksCount} tarefas</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={bonusTasksCount}
                  onChange={(e) => setBonusTasksCount(Number(e.target.value))}
                  className="w-full accent-[#b0f443] bg-[#22272e] h-2 rounded cursor-pointer"
                />
              </div>

            </div>

            {/* Live Financial Projection Display */}
            <div className="lg:col-span-5 p-6 bg-[#08090a] border border-[#22272e] rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#9ca3af] uppercase tracking-wider mb-1">
                  PROJEÇÃO MENSAL ESTIMADA
                </div>
                <div className="text-4xl font-extrabold font-mono text-[#b0f443] tabular-figures">
                  R$ {monthlyTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-[#9ca3af] mt-1 font-mono">
                  Projeção anualizada: <span className="text-[#f3f4f6] font-bold">R$ {annualTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="mt-6 pt-6 border-t border-[#22272e] space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Comissão Novas Vendas:</span>
                    <span className="text-[#f3f4f6] font-semibold tabular-figures">
                      R$ {newSalesTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Recorrência Renovações:</span>
                    <span className="text-[#f3f4f6] font-semibold tabular-figures">
                      R$ {renewalsTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Bônus de Execução de Campo:</span>
                    <span className="text-[#f3f4f6] font-semibold tabular-figures">
                      R$ {bonusTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#22272e] text-[11px] text-[#9ca3af] leading-relaxed">
                * As comissões são liberadas à medida que os pagamentos são compensados. Sem teto de ganhos.
              </div>
            </div>

          </div>
        </div>

        {/* PART 2: Target Client Profiles Checklist */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
              RADAR DE PROSPECÇÃO LOCAL
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6] mb-2">
              Perfil de Clientes & Argumentação Pronta por Nicho
            </h3>
            <p className="text-sm text-[#9ca3af] max-w-3xl">
              Selecione o segmento que você vai abordar hoje para ver a dor exata, o tíquete médio, o pitch de ouro e o pacote mais indicado:
            </p>
          </div>

          {/* Profile Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            {TARGET_PROFILES_DATA.map((prof) => (
              <button
                key={prof.id}
                onClick={() => setSelectedProfileId(prof.id)}
                className={`p-3.5 rounded text-left transition-colors cursor-pointer border ${
                  selectedProfileId === prof.id
                    ? 'bg-[#111316] border-[#b0f443] text-[#f3f4f6] lime-glow-sm'
                    : 'bg-[#08090a] border-[#22272e] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#b0f443]/40'
                }`}
              >
                <div className="text-xs font-bold truncate">{prof.title.split(',')[0]}</div>
                <div className="text-[11px] text-[#9ca3af] truncate mt-0.5">{prof.recommendedPackage}</div>
              </button>
            ))}
          </div>

          {/* Selected Profile Detailed Card */}
          <div className="p-6 sm:p-8 bg-[#111316] border border-[#22272e] rounded-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#22272e] mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#b0f443]">NICHO SELECIONADO</span>
                  <span className="text-xs text-[#9ca3af]">·</span>
                  <span className="text-xs font-mono text-[#f3f4f6]">{selectedProfile.subtitle}</span>
                </div>
                <h4 className="text-2xl font-bold text-[#f3f4f6]">{selectedProfile.title}</h4>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-[11px] font-mono text-[#9ca3af]">PACOTE INDICADO</div>
                  <div className="text-sm font-bold text-[#b0f443]">{selectedProfile.recommendedPackage}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              
              {/* Left Column: Pain & Gap */}
              <div className="space-y-4">
                <div className="p-4 bg-[#08090a] border border-[#22272e] rounded">
                  <div className="text-xs font-mono text-[#9ca3af] uppercase mb-1">A Dor que Sangra o Caixa</div>
                  <p className="text-xs sm:text-sm text-[#f3f4f6] leading-relaxed">{selectedProfile.mainPain}</p>
                </div>

                <div className="p-4 bg-[#08090a] border border-[#22272e] rounded">
                  <div className="text-xs font-mono text-[#9ca3af] uppercase mb-1">O Gap Tecnológico Não Percebido</div>
                  <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">{selectedProfile.technologicalGap}</p>
                </div>
              </div>

              {/* Right Column: Golden Pitch with Copy Button */}
              <div className="p-5 bg-[#08090a] border border-[#b0f443]/30 rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#b0f443] uppercase tracking-wider font-semibold">
                      Pitch de Ouro para a Reunião
                    </span>
                    <button
                      onClick={() => handleCopyPitch(selectedProfile.goldenPitch)}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded bg-[#181b1f] border border-[#22272e] text-[#f3f4f6] hover:border-[#b0f443] transition-colors cursor-pointer"
                    >
                      {copiedPitch ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#b0f443]" />
                          <span className="text-[#b0f443]">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Pitch</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#f3f4f6] leading-relaxed italic border-l-2 border-[#b0f443] pl-3 py-1">
                    {selectedProfile.goldenPitch}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#22272e] flex items-center justify-between text-xs">
                  <span className="text-[#9ca3af]">Métrica de Impacto:</span>
                  <span className="text-[#b0f443] font-semibold">{selectedProfile.keyMetric}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
