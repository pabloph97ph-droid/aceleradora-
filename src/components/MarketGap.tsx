import React from 'react';
import { X, Check, AlertOctagon, TrendingUp } from 'lucide-react';

export const MarketGap: React.FC = () => {
  return (
    <section id="mercado" className="py-20 lg:py-28 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            01. OPORTUNIDADE DE MERCADO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f4f6] mb-4">
            Por que agora? O abismo entre "estar na internet" e faturar com ela.
          </h2>
          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
            A maioria dos empresários locais já tentou anunciar ou contratou "social medias" que só entregaram posts bonitos e nenhuma venda. A oportunidade de ouro da nossa operação está em preencher a lacuna da <span className="text-[#f3f4f6] font-medium">infraestrutura de receita real</span>.
          </p>
        </div>

        {/* Asymmetrical Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: The Superficial Presence Trap */}
          <div className="p-6 sm:p-8 bg-[#111316] border border-[#22272e] rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#22272e] mb-6">
                <div>
                  <div className="text-xs font-mono text-[#9ca3af] uppercase">O Modelo Fracassado</div>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mt-1">Presença Superficial</h3>
                </div>
                <div className="p-2 rounded bg-neutral-900 border border-[#22272e] text-[#9ca3af]">
                  <AlertOctagon className="w-5 h-5 text-neutral-400" />
                </div>
              </div>

              <p className="text-sm text-[#9ca3af] mb-6">
                O que 95% dos negócios locais fazem hoje — gastando energia em vaidade e perdendo margem para concorrentes e aplicativos:
              </p>

              <ul className="space-y-4 text-sm text-[#9ca3af]">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-neutral-900 border border-[#22272e] text-neutral-400 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Feed decorado, caixa vazio:</strong> Postagens diárias que geram curtidas de amigos e familiares, mas nenhum novo comprador qualificado na porta.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-neutral-900 border border-[#22272e] text-neutral-400 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">WhatsApp caótico e lento:</strong> Leads que mandam mensagem à noite ou no fim de semana ficam horas sem resposta e compram do concorrente em 10 minutos.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-neutral-900 border border-[#22272e] text-neutral-400 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Botão "Impulsionar" às cegas:</strong> Dinheiro queimado em anúncios sem pixel configurado, sem geofencing cirúrgico e sem cálculo de Custo de Aquisição (CAC).
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-neutral-900 border border-[#22272e] text-neutral-400 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Zero controle da base de clientes:</strong> A empresa não tem lista de contatos, não faz campanhas de reativação e depende exclusivamente do acaso para o cliente voltar.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#22272e] text-xs font-mono text-[#9ca3af]">
              RESULTADO: INSEGURANÇA FINANCEIRA E DEPENDÊNCIA DE INDICAÇÃO INFORMAL
            </div>
          </div>

          {/* Box 2: The Real Revenue Infrastructure */}
          <div className="p-6 sm:p-8 bg-[#111316] border border-[#b0f443]/40 rounded-lg flex flex-col justify-between lime-glow-subtle relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b0f443]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#22272e] mb-6">
                <div>
                  <div className="text-xs font-mono text-[#b0f443] uppercase">A Solução da Nossa Operação</div>
                  <h3 className="text-xl font-bold text-[#f3f4f6] mt-1">Infraestrutura Real de Receita</h3>
                </div>
                <div className="p-2 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-[#9ca3af] mb-6">
                A tecnologia comercial que entregamos pronta — transformando tráfego frio em dinheiro em caixa com previsibilidade matemática:
              </p>

              <ul className="space-y-4 text-sm text-[#9ca3af]">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Captação de Alta Intenção Local:</strong> Posicionamento absoluto no Top 3 do Google Maps e anúncios no raio de 3 a 5km exatamente para quem precisa comprar hoje.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Triagem Automatizada em &lt; 60s:</strong> Robô inteligente de WhatsApp que acolhe o lead, responde dúvidas básicas, filtra curiosos e entrega a oportunidade quente para a equipe.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Verba Inicial Assumida (R$ 1.500):</strong> No Pacote Crescimento, nós injetamos o capital inicial em mídia para provar a tese sem medo ou resistência do empresário.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#f3f4f6] font-medium">Máquina de Reativação Contínua:</strong> CRM ativo que dispara ofertas segmentadas para a base de clientes a cada 30/60 dias, multiplicando a taxa de recompra sem custo adicional.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#22272e] text-xs font-mono text-[#b0f443]">
              RESULTADO: PREVISIBILIDADE DE DEMANDA, CONTROLE DE CAIXA E ALTO LTV
            </div>
          </div>

        </div>

        {/* Strategic Data Callout */}
        <div className="mt-10 p-6 bg-[#111316] border border-[#22272e] rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-bold font-mono text-[#f3f4f6] tabular-figures">84%</div>
            <div className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
              Dos consumidores locais pesquisam no Google antes de visitar uma loja física ou contratar um serviço presencial.
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-[#f3f4f6] tabular-figures">400%</div>
            <div className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
              Maior probabilidade de fechamento quando o primeiro contato no WhatsApp ocorre nos primeiros 5 minutos da pesquisa.
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-[#b0f443] tabular-figures">7x mais barato</div>
            <div className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
              O custo de vender novamente para um cliente da própria base através de CRM comparado a atrair um cliente totalmente desconhecido.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
