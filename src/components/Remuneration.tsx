import React from 'react';
import { DollarSign, Repeat, Video, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

export const Remuneration: React.FC = () => {
  return (
    <section id="remuneracao" className="py-20 lg:py-24 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            05. PLANO DE COMPENSAÇÃO & GANHOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f4f6] mb-4">
            Quanto você ganha? Modelo de 30% + Recorrência + Bônus de Produção
          </h2>
          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
            Nossa estrutura de comissionamento é a mais agressiva do mercado de digitalização B2B. Você ganha na venda imediata, constrói carteira de renovação e pode multiplicar seus ganhos executando tarefas táticas de campo.
          </p>
        </div>

        {/* 3 Pillars of Remuneration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Pillar 1: Direct 30% Commission */}
          <div className="p-6 sm:p-8 bg-[#111316] border border-[#b0f443]/40 rounded-lg flex flex-col justify-between lime-glow-subtle">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#22272e] mb-6">
                <div>
                  <div className="text-xs font-mono text-[#b0f443]">GANHO IMEDIATO</div>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mt-0.5">30% Comissão Direta</h3>
                </div>
                <div className="p-2 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443]">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
                Toda nova venda fechada garante 30% do valor bruto do contrato líquido para o vendedor, liberado após a compensação financeira do cliente.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <span className="text-[#9ca3af]">Pacote 03 (Dominação):</span>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">R$ 5.070,00</span>
                </div>
                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <span className="text-[#9ca3af]">Pacote 02 (Crescimento):</span>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">R$ 2.670,00</span>
                </div>
                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <span className="text-[#9ca3af]">Pacote 01 (Presença):</span>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">R$ 870,00</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#22272e] text-[11px] font-mono text-[#9ca3af]">
              SEM LIMITES DE FECHAMENTO MENSAL
            </div>
          </div>

          {/* Pillar 2: Scaled Renewal Model */}
          <div className="p-6 sm:p-8 bg-[#111316] border border-[#22272e] rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#22272e] mb-6">
                <div>
                  <div className="text-xs font-mono text-[#9ca3af]">RECORRÊNCIA EM CARTEIRA</div>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mt-0.5">Renovação Escalonada</h3>
                </div>
                <div className="p-2 rounded bg-[#08090a] border border-[#22272e] text-[#9ca3af]">
                  <Repeat className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
                Ao término do período inicial de contrato, quando o cliente renova a gestão continuada de tráfego e infraestrutura, você continua recebendo comissão escalonada:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <div>
                    <div className="text-[#f3f4f6] font-semibold">1ª Renovação (Meses 4–6)</div>
                    <div className="text-[10px] text-[#9ca3af] font-sans">Primeiro ciclo de continuidade</div>
                  </div>
                  <span className="text-[#f3f4f6] font-bold text-sm tabular-figures">30%</span>
                </div>

                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <div>
                    <div className="text-[#f3f4f6] font-semibold">2ª Renovação (Meses 7–9)</div>
                    <div className="text-[10px] text-[#9ca3af] font-sans">Segundo ciclo de consolidação</div>
                  </div>
                  <span className="text-[#f3f4f6] font-bold text-sm tabular-figures">15%</span>
                </div>

                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <div>
                    <div className="text-[#f3f4f6] font-semibold">3ª Renovação em diante</div>
                    <div className="text-[10px] text-[#9ca3af] font-sans">Recorrência vitalícia da conta</div>
                  </div>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">10% perpétuo</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#22272e] text-[11px] font-mono text-[#9ca3af]">
              CONSTRUÇÃO DE PATRIMÔNIO RECORRENTE
            </div>
          </div>

          {/* Pillar 3: Production Bonuses */}
          <div className="p-6 sm:p-8 bg-[#111316] border border-[#22272e] rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#22272e] mb-6">
                <div>
                  <div className="text-xs font-mono text-[#9ca3af]">OPERAÇÃO DE CAMPO</div>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mt-0.5">Bônus de Produção</h3>
                </div>
                <div className="p-2 rounded bg-[#08090a] border border-[#22272e] text-[#9ca3af]">
                  <Video className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
                Tem habilidades com câmera, smartphone ou edição? Você pode optar por executar as tarefas de campo do cliente e reter o bônus de produção da provisão interna:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <div>
                    <div className="text-[#f3f4f6] font-semibold">Captação Audiovisual in loco</div>
                    <div className="text-[10px] text-[#9ca3af] font-sans">Sessão de 2h com smartphone 4K / estabilizador</div>
                  </div>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">+R$ 450,00</span>
                </div>

                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <div>
                    <div className="text-[#f3f4f6] font-semibold">Edição de Lote de Criativos</div>
                    <div className="text-[10px] text-[#9ca3af] font-sans">Cortes de 6 a 10 Reels comerciais</div>
                  </div>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">+R$ 300,00</span>
                </div>

                <div className="p-3 bg-[#08090a] border border-[#22272e] rounded flex items-center justify-between">
                  <div>
                    <div className="text-[#f3f4f6] font-semibold">Setup Avançado de CRM</div>
                    <div className="text-[10px] text-[#9ca3af] font-sans">Cadastramento e parametrização do funil</div>
                  </div>
                  <span className="text-[#b0f443] font-bold text-sm tabular-figures">+R$ 400,00</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#22272e] text-[11px] font-mono text-[#9ca3af]">
              POTENCIAL DE ATÉ +R$ 1.150,00 POR CONTRATO
            </div>
          </div>

        </div>

        {/* Master Example Callout */}
        <div className="p-6 bg-[#181b1f] border border-[#b0f443]/30 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#b0f443] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>EXEMPLO REAL: FECHAMENTO DE 1 PACOTE DOMINAÇÃO COMPLETO</span>
              </div>
              <h4 className="text-xl font-bold text-[#f3f4f6]">
                Ganho de até R$ 6.220,00 em uma única conta para um operador de ponta a ponta
              </h4>
              <p className="text-xs text-[#9ca3af] mt-2 leading-relaxed">
                Comissão direta (R$ 5.070,00) + Captação audiovisual presencial (R$ 450,00) + Edição dos Reels (R$ 300,00) + Parametrização do CRM (R$ 400,00) = <strong className="text-[#f3f4f6]">R$ 6.220,00 líquidos</strong>. Fechar duas contas como essa no mês coloca você em patamar executivo sênior.
              </p>
            </div>
            
            <div className="shrink-0 p-4 bg-[#08090a] border border-[#22272e] rounded font-mono text-right">
              <div className="text-xs text-[#9ca3af]">FECHANDO 2 POR MÊS:</div>
              <div className="text-2xl font-bold text-[#b0f443] tabular-figures">R$ 12.440,00 /mês</div>
              <div className="text-[10px] text-[#9ca3af] mt-1">+ recorrências acumuladas</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
