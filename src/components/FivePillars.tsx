import React, { useState } from 'react';
import { Compass, Crosshair, Zap, Repeat, BarChart3, ChevronRight, Check } from 'lucide-react';

export const FivePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: '01',
      title: '01. Presença',
      subtitle: 'Autoridade & Indexação Local',
      icon: Compass,
      tagline: 'Garantir que quem procura pelo serviço no bairro encontre a empresa em 1º lugar com credibilidade inquestionável.',
      deliverables: [
        'Otimização algorítmica profunda do perfil do Google Meu Negócio',
        'Padronização técnica de categorias primárias e secundárias do Google',
        'Landing Page proprietária ultrarrápida (carregamento < 1.2s em 4G)',
        'Estratégia de geração contínua de avaliações 5 estrelas verificadas',
        'Remoção de vazamentos de clientes para concorrentes orgânicos'
      ],
      pitchTip: 'Explique que sem presença técnica, a empresa está literalmente invisível para quem já está com o cartão de crédito na mão pronto para comprar.',
      metric: 'Top 3 posições garantidas na busca local do Google Maps'
    },
    {
      id: '02',
      title: '02. Aquisição',
      subtitle: 'Tráfego Hiperlocal Pago',
      icon: Crosshair,
      tagline: 'Criar um canhão de demanda ativa que atrai compradores num raio cirúrgico de 3km a 10km.',
      deliverables: [
        'Campanhas no Google Search focadas em palavras-chave de compra imediata',
        'Anúncios patrocinados no Instagram e Facebook com segmentação geográfica restrita',
        'R$ 1.500 de verba inicial assumida pela nossa operação (no Pacote 02)',
        'Testes contínuos de criativos de alta resposta direta',
        'Filtro de exclusão de público para não desperdiçar verba com curiosos'
      ],
      pitchTip: 'Enfatize a garantia da verba de mídia: "Nós confiamos tanto na nossa aquisição que nós mesmos bancamos R$ 1.500 nos seus primeiros anúncios."',
      metric: 'Custo por Lead qualificado 40% abaixo da média de mercado'
    },
    {
      id: '03',
      title: '03. Conversão',
      subtitle: 'Automação & Atendimento Imediato',
      icon: Zap,
      tagline: 'Transformar cliques anônimos em conversas no WhatsApp e vendas fechadas em tempo recorde.',
      deliverables: [
        'Atendimento e triagem automática de WhatsApp em menos de 60 segundos',
        'Roteamento inteligente de leads qualificados direto para a equipe de vendas',
        'Mensagens pré-configuradas para quebrar as principais objeções de entrada',
        'Integração com calendários e agendamento instantâneo',
        'Treinamento prático e roteiro de fechamento para atendentes e recepcionistas'
      ],
      pitchTip: 'Pergunte: "Se alguém mandar mensagem no domingo às 22h, quem atende hoje?" Mostre que o robô resolve isso no ato.',
      metric: 'Zero leads perdidos por demora no tempo de resposta inicial'
    },
    {
      id: '04',
      title: '04. Retenção',
      subtitle: 'CRM & Reativação de Base',
      icon: Repeat,
      tagline: 'Multiplicar o faturamento ativando a base de clientes antigos sem gastar nada a mais em anúncios.',
      deliverables: [
        'Centralização e higienização da base de contatos em CRM especializado',
        'Segmentação de clientes por data da última compra e tíquete médio',
        'Automação de campanhas de reativação a cada 30 e 60 dias de inatividade',
        'Disparos de benefícios de aniversário e datas comemorativas personalizadas',
        'Aumento exponencial do Lifetime Value (LTV) e previsibilidade de caixa'
      ],
      pitchTip: 'Mostre que atrair um cliente novo custa 7x mais do que vender novamente para quem já confia na marca.',
      metric: '+35% a +50% no volume de recompra sem novo investimento em tráfego'
    },
    {
      id: '05',
      title: '05. Inteligência',
      subtitle: 'Atribuição de Receita & ROI',
      icon: BarChart3,
      tagline: 'Substituir opiniões por matemática pura: saiba exatamente quanto cada centavo investido colocou no bolso.',
      deliverables: [
        'Dashboard executivo unificado de performance comercial em tempo real',
        'Rastreamento ponta a ponta: do anúncio clicado até o valor pago no balcão',
        'Relatórios quinzenais/mensais focados em lucro líquido e Custo de Aquisição (CAC)',
        'Mapeamento dos serviços/produtos com maior margem de contribuição',
        'Reuniões de acompanhamento estratégico com engenheiro de crescimento dedicado'
      ],
      pitchTip: 'Agências entregam relatórios com número de impressões e likes. Nós entregamos faturamento rastreado e custo por cliente real.',
      metric: 'Visão 100% clara de Retorno sobre Investimento (ROI)'
    }
  ];

  const current = pillars[activePillar];

  return (
    <section id="pilares" className="py-20 lg:py-28 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            02. ARQUITETURA DO ECOSSISTEMA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f4f6] mb-4">
            Os 5 Pilares da Máquina de Digitalização Local
          </h2>
          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
            Uma engrenagem comercial sólida não é formada por um serviço isolado. Cada pilar alimenta o seguinte, construindo uma barreira competitiva intransponível para os concorrentes locais.
          </p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#111316] border-[#b0f443] text-[#f3f4f6] lime-glow-sm'
                    : 'bg-[#08090a] border-[#22272e] text-[#9ca3af] hover:border-[#b0f443]/40 hover:text-[#f3f4f6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#b0f443]' : 'text-[#9ca3af]'}`} />
                  <span className="text-xs font-mono text-[#9ca3af]">{pillar.id}</span>
                </div>
                <div className="font-semibold text-sm truncate">{pillar.title.replace(/^\d+\.\s*/, '')}</div>
                <div className="text-xs text-[#9ca3af] truncate mt-0.5">{pillar.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase */}
        <div className="p-6 sm:p-8 bg-[#111316] border border-[#22272e] rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#08090a] border border-[#b0f443]/30 text-[#b0f443]">
                  PILAR {current.id} DE 05
                </span>
                <span className="text-sm font-semibold text-[#f3f4f6]">{current.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] mb-3">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#9ca3af] mb-6 leading-relaxed">
                {current.tagline}
              </p>

              <div className="mb-6">
                <div className="text-xs font-mono text-[#9ca3af] uppercase tracking-wider mb-3">
                  Entregáveis Técnicos da Operação
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-[#08090a] border border-[#22272e]">
                      <Check className="w-4 h-4 text-[#b0f443] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f3f4f6] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Commercial Pitch Advice & Metrics */}
            <div className="flex flex-col justify-between p-6 bg-[#08090a] border border-[#22272e] rounded-lg">
              <div>
                <div className="text-xs font-mono text-[#b0f443] uppercase tracking-wider mb-2">
                  Dica de Abordagem do Vendedor
                </div>
                <div className="text-sm text-[#f3f4f6] leading-relaxed italic mb-6 border-l-2 border-[#b0f443] pl-3">
                  "{current.pitchTip}"
                </div>
              </div>

              <div className="pt-4 border-t border-[#22272e]">
                <div className="text-xs font-mono text-[#9ca3af] mb-1">MÉTRICA CHAVE DE SUCESSO</div>
                <div className="text-sm font-medium text-[#b0f443] leading-snug">
                  {current.metric}
                </div>
                
                <div className="mt-4 flex items-center justify-between text-xs text-[#9ca3af]">
                  <span>Pilar integrado ao ecossistema</span>
                  <ChevronRight className="w-4 h-4 text-[#b0f443]" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
