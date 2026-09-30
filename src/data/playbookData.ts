import {
  PackageItem,
  TargetProfile,
  DiagnosticQuestion,
  ObjectionItem,
  ChecklistStep
} from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pacote-01',
    name: 'Pacote 01 // Presença',
    tagline: 'Infraestrutura essencial de autoridade e indexação local.',
    price: 2900,
    priceFormatted: 'R$ 2.900',
    commission: 870,
    commissionFormatted: 'R$ 870',
    duration: 'Entrega única (Setup em até 15 dias úteis)',
    idealFor: 'Empresas locais que ainda não possuem presença técnica validada ou estão invisíveis no Google Maps.',
    deliverables: [
      'Otimização algorítmica profunda do Google Meu Negócio (SEO Local)',
      'Landing Page de alta conversão ultraveloz (Mobile First, carregamento < 1.2s)',
      'Padronização técnica de marca e identidade digital local',
      'Configuração de tags de rastreamento (Meta Pixel, Google Analytics 4, Tag Manager)',
      'Botão inteligente integrado direto para WhatsApp com mensagem parametrizada',
      'Relatório de auditoria e entrega de chaves de controle'
    ],
    differentials: [
      'Garantia de indexação nos principais motores de busca',
      'Código limpo proprietário sem mensalidades de plataformas de terceiros'
    ]
  },
  {
    id: 'pacote-02',
    name: 'Pacote 02 // Crescimento',
    tagline: 'O motor de tração com verba de tráfego inicial garantida pela nossa operação.',
    price: 8900,
    priceFormatted: 'R$ 8.900',
    commission: 2670,
    commissionFormatted: 'R$ 2.670',
    isPopular: true,
    highlightNote: 'DESTAQUE COMERCIAL · RECOMENDADO',
    badge: '3 MESES DE TRÁFEGO + R$ 1.500 EM MÍDIA INCLUSA',
    duration: 'Setup completo + 3 meses de gestão contínua de tráfego',
    idealFor: 'Negócios com produto/serviço já validado que necessitam de fluxo previsível de novos clientes toda semana.',
    deliverables: [
      'Tudo incluído no Pacote 01 (Presença + SEO Local + Landing Page Premium)',
      '3 meses completos de gestão de tráfego pago hiperlocal (raio de 3km a 10km)',
      'R$ 1.500 de verba de mídia inicial ASSUMIDA INTEGRALMENTE pela nossa operação',
      'Fluxo automatizado de qualificação e triagem no WhatsApp (resposta em < 60s)',
      'Criação mensal de anúncios de alta resposta direta (criativos estáticos e motion)',
      'Otimização semanal de campanhas com foco estrito em Custo por Lead (CPL) e CAC',
      'Dashboard executivo de acompanhamento de métricas em tempo real',
      'Reunião mensal de alinhamento estratégico de resultados'
    ],
    differentials: [
      'RISCO REDUZIDO: A operação injeta R$ 1.500 do próprio caixa em anúncios do cliente',
      'Alinhamento total de interesse: o cliente vê leads reais caindo no primeiro mês'
    ]
  },
  {
    id: 'pacote-03',
    name: 'Pacote 03 // Dominação',
    tagline: 'Ecossistema integral de tecnologia, retenção e escala comercial local.',
    price: 16900,
    priceFormatted: 'R$ 16.900',
    commission: 5070,
    commissionFormatted: 'R$ 5.070',
    badge: 'ECOSSISTEMA COMPLETO · 6 MESES',
    duration: 'Setup integral + 6 meses de gestão, retenção e suporte avançado',
    idealFor: 'Líderes de mercado locais (clínicas conceituadas, polos gastronômicos, escritórios e redes em expansão).',
    deliverables: [
      'Infraestrutura total dos Pacotes 01 e 02 com expansão de escopo',
      '6 meses completos de gestão de tráfego multicanal (Google Search, Meta Ads, YouTube)',
      'Produção audiovisual presencial completa no estabelecimento (captação, roteiro e edição de lote de vídeos institucionais e comerciais)',
      'Implementação de CRM de Vendas dedicado com funil de atendimento e pós-venda',
      'Sistema de Reativação Ativa de Base de Clientes (campanhas de recompra e fidelização)',
      'Treinamento comercial técnico para a equipe de recepção e atendentes de balcão',
      'Call Tracking e inteligência de atribuição (identifica de qual anúncio veio cada venda)',
      'Acompanhamento tático semanal e canal direto prioritário com a liderança de growth'
    ],
    differentials: [
      'Cobre os 5 pilares completos do negócio: Presença, Aquisição, Conversão, Retenção e Inteligência',
      'Maior comissão unitária da mesa: R$ 5.070,00 líquidos por contrato'
    ]
  }
];

export const COMPARISON_FEATURES = [
  {
    category: 'Infraestrutura & Presença',
    features: [
      { name: 'Otimização Algorítmica Google Meu Negócio (SEO Local)', p1: 'Sim', p2: 'Sim (Avançado)', p3: 'Sim (Completo)' },
      { name: 'Landing Page de Alta Velocidade (Mobile First)', p1: '1 Página', p2: '1 Página Otimizada', p3: 'Até 3 Páginas Especializadas' },
      { name: 'Rastreamento Técnico (Pixel, GA4, GTM, CAPI)', p1: 'Básico', p2: 'Avançado', p3: 'Arquitetura Completa' }
    ]
  },
  {
    category: 'Aquisição & Tráfego Hiperlocal',
    features: [
      { name: 'Gestão Ativa de Tráfego Pago', p1: 'Não incluso', p2: '3 Meses inclusos', p3: '6 Meses inclusos' },
      { name: 'Verba de Mídia Assumida pela Operação', p1: 'Zero', p2: 'R$ 1.500 (Garantida)', p3: 'R$ 1.500 inicial + Estratégia de Escala' },
      { name: 'Canais de Anúncio Ativos', p1: 'Nenhum', p2: 'Meta Ads (Insta/Face) + Google', p3: 'Google Search + Meta + YouTube Local' },
      { name: 'Criação de Anúncios e Roteiros', p1: 'Não incluso', p2: 'Mensal (Estáticos e Motion)', p3: 'Produção Audiovisual Presencial' }
    ]
  },
  {
    category: 'Conversão & Automação',
    features: [
      { name: 'Triagem e Resposta Automática WhatsApp', p1: 'Link direto', p2: 'Automação de triagem 24/7', p3: 'Fluxo Inteligente com CRM' },
      { name: 'Treinamento Comercial da Equipe Local', p1: 'Não incluso', p2: 'Guia de scripts PDF', p3: 'Workshop prático online/presencial' }
    ]
  },
  {
    category: 'Retenção & Inteligência',
    features: [
      { name: 'Implementação de CRM de Vendas Local', p1: 'Não', p2: 'Planilha inteligente', p3: 'CRM Dedicado com Pipeline' },
      { name: 'Campanhas de Reativação de Clientes Antigos', p1: 'Não', p2: 'Estratégia sugerida', p3: 'Execução e Automação de Base' },
      { name: 'Relatórios de ROI e Custo por Lead', p1: 'Relatório único', p2: 'Mensal executivo', p3: 'Quinzenal executivo + Dashboard' },
      { name: 'Tempo de Acompanhamento Dedicado', p1: '15 dias de setup', p2: '90 dias (3 meses)', p3: '180 dias (6 meses)' }
    ]
  },
  {
    category: 'Valores Comerciais & Retorno',
    features: [
      { name: 'Investimento para o Cliente', p1: 'R$ 2.900 à vista', p2: 'R$ 8.900 (ou 12x no cartão)', p3: 'R$ 16.900 (ou 12x no cartão)' },
      { name: 'Sua Comissão de Vendedor (30%)', p1: 'R$ 870,00', p2: 'R$ 2.670,00', p3: 'R$ 5.070,00' }
    ]
  }
];

export const OPERATIONAL_COSTS_DATA = {
  packageTarget: 'Pacote 03 // Dominação (R$ 16.900,00)',
  totalProvision: 6700,
  provisionFormatted: 'R$ 6.700,00',
  provisionPercentage: '39,64%',
  vendorCommission: 5070,
  vendorCommissionFormatted: 'R$ 5.070,00',
  vendorCommissionPercentage: '30,00%',
  companyNetMargin: 5130,
  companyNetMarginFormatted: 'R$ 5.130,00',
  companyNetMarginPercentage: '30,36%',
  items: [
    {
      item: 'Setup Técnico & Arquitetura Web',
      cost: 1800,
      costFormatted: 'R$ 1.800,00',
      description: 'Desenvolvimento das Landing Pages ultrarrápidas, infraestrutura de hospedagem segura, domínio, tags GTM/GA4 e estruturação inicial do CRM.'
    },
    {
      item: 'Verba de Mídia & Testes Iniciais de Tração',
      cost: 1500,
      costFormatted: 'R$ 1.500,00',
      description: 'Verba de mídia real injetada diretamente nas plataformas (Meta/Google) para validação imediata do custo por lead no primeiro ciclo.'
    },
    {
      item: 'Produção Audiovisual & Direção Criativa no Local',
      cost: 1400,
      costFormatted: 'R$ 1.400,00',
      description: 'Diária técnica de captação presencial (câmera/iPhone de ponta, estabilizador, áudio profissional), roteirização de ofertas e edição pós-produção.'
    },
    {
      item: 'Gestão Operacional, Tráfego & Suporte (6 Meses)',
      cost: 1500,
      costFormatted: 'R$ 1.500,00',
      description: 'Operação continuada de mídia, testes A/B de criativos, otimização de lances hiperlocais e relatórios executivos de prestação de contas.'
    },
    {
      item: 'Softwares, Servidores & Licenças de Automação',
      cost: 500,
      costFormatted: 'R$ 500,00',
      description: 'Custos de gateways de automação de WhatsApp, APIs de integração, servidores cloud e ferramentas de inteligência competitiva.'
    }
  ]
};

export const TARGET_PROFILES_DATA: TargetProfile[] = [
  {
    id: 'restaurantes',
    title: 'Restaurantes, Hamburguerias & Gastronomia',
    subtitle: 'Ticket Médio R$ 60 - R$ 180 / Faturamento R$ 50k - R$ 300k',
    averageTicket: 'R$ 120 / pedido',
    mainPain: 'Margens esmagadas por taxas abusivas do iFood (até 27%) e mesas vazias de terça a quinta-feira.',
    technologicalGap: 'Dependem de terceiros para vender e não têm o número de WhatsApp dos próprios clientes frequentes para disparar campanhas de retorno.',
    recommendedPackage: 'Pacote 02 // Crescimento',
    goldenPitch: '"Se o iFood travar sua conta hoje, sua cozinha para? Nós criamos o canal direto que coloca clientes na sua mesa sem pagar comissão para aplicativo."',
    keyMetric: '+40% de pedidos pelo canal próprio direto no WhatsApp'
  },
  {
    id: 'clinicas',
    title: 'Clínicas Médicas, Odonto & Estética Avançada',
    subtitle: 'Procedimentos de R$ 800 a R$ 15.000 / Faturamento R$ 80k - R$ 500k',
    averageTicket: 'R$ 2.800 / tratamento',
    mainPain: 'Dependência de indicações informais, no-show (pacientes que faltam à consulta) e concorrência agressiva de franquias populares.',
    technologicalGap: 'Site antigo que não passa credibilidade institucional, demoram mais de 2 horas para responder pedidos de orçamento e perdem pacientes com alto poder aquisitivo.',
    recommendedPackage: 'Pacote 03 // Dominação',
    goldenPitch: '"Um único tratamento de implante ou protocolo estético fechado a mais no mês já paga toda a nossa infraestrutura. Quantos pacientes qualificados você deixou escapar para a clínica vizinha este mês?"',
    keyMetric: 'Redução de 65% em faltas e aumento de 3x em consultas particulares'
  },
  {
    id: 'barbearias_saloes',
    title: 'Barbearias Premium & Salões de Beleza',
    subtitle: 'Ticket Médio R$ 70 - R$ 450 / Faturamento R$ 40k - R$ 180k',
    averageTicket: 'R$ 140 / visita',
    mainPain: 'Cadeiras ociosas em horários de pico reduzido e clientes que demoram 45 a 60 dias para retornar em vez de 20 dias.',
    technologicalGap: 'Agendamento caótico via WhatsApp manual sem automação de reativação ou lembretes pré-atendimento.',
    recommendedPackage: 'Pacote 02 // Crescimento',
    goldenPitch: '"Se seus clientes retornassem a cada 21 dias em vez de 45 dias, seu faturamento anual dobraria sem você precisar de nenhum cliente novo. Nós automatizamos essa reativação."',
    keyMetric: 'Aumento de 35% na taxa de frequência de clientes da base'
  },
  {
    id: 'escritorios',
    title: 'Escritórios de Advocacia & Contabilidade Consultiva',
    subtitle: 'Contratos de R$ 1.500 a R$ 8.000/mês / Faturamento R$ 60k - R$ 400k',
    averageTicket: 'R$ 3.500 / honorário',
    mainPain: 'Dificuldade de prospecção ativa devido a restrições éticas de conselhos de classe e clientes comparando por preço.',
    technologicalGap: 'Invisíveis para empresários da região pesquisando ativamente por soluções tributárias, societárias ou trabalhistas no Google.',
    recommendedPackage: 'Pacote 01 ou 02',
    goldenPitch: '"Quando um empresário do seu bairro precisa de um especialista tributário de confiança, o seu escritório aparece em primeiro com autoridade impecável ou ele encontra o seu concorrente?"',
    keyMetric: 'Captação de 5 a 12 reuniões consultivas qualificadas/mês'
  },
  {
    id: 'servicos_locais',
    title: 'Varejo Local & Serviços de Alto Valor',
    subtitle: 'Móveis Planejados, Concessionárias, Energia Solar, Construção',
    averageTicket: 'R$ 8.000 - R$ 60.000 / projeto',
    mainPain: 'Ciclos de venda desestruturados, leads frios que não respondem e vendedores sem acompanhamento no WhatsApp.',
    technologicalGap: 'Falta de CRM para controlar follow-up e anúncios sem segmentação por geolocalização de bairros nobres.',
    recommendedPackage: 'Pacote 03 // Dominação',
    goldenPitch: '"Em negócios de tíquete alto, você não precisa de 500 leads curiosos. Você precisa de 15 pessoas que têm dinheiro e precisam comprar essa semana. É exatamente esse filtro que nossa máquina constrói."',
    keyMetric: '1 a 3 contratos fechados de alto valor cobrem o ano todo'
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    number: '01',
    question: 'Hoje, se 20 pessoas no seu bairro pesquisarem no Google exatamente pelo que você vende, quantas encontram o seu negócio e quantas vão direto para o concorrente?',
    objective: 'Identificar a gravidade da invisibilidade orgânica e posicionamento local.',
    impactExplanation: 'Mais de 80% das compras locais com alta intenção começam na pesquisa do Google Maps. Se a empresa não está no topo com notas altas e fotos profissionais, ela está literalmente doando clientes para quem está.',
    followUp: 'Se o cliente disser "não sei": "Essa incerteza custa milhares de reais em faturamento perdido todo mês."'
  },
  {
    number: '02',
    question: 'Se um cliente em potencial mandar uma mensagem no WhatsApp da sua empresa às 20h30 de sexta-feira ou no domingo à tarde, quem responde e em quantos minutos?',
    objective: 'Evidenciar o vazamento brutal de conversão por falta de automação e resposta imediata.',
    impactExplanation: 'Estudos de mercado B2B e local mostram que a probabilidade de qualificar um lead cai em 400% se ele não for respondido nos primeiros 5 minutos. Depois de 30 minutos, o cliente já comprou do concorrente.',
    followUp: '"A nossa automação atende em 45 segundos, tira as dúvidas principais e já deixa o cliente pré-agendado na sua esteira."'
  },
  {
    number: '03',
    question: 'Dos clientes novos que entraram no seu estabelecimento no último mês, quantos vieram da internet e qual foi o faturamento exato que eles geraram?',
    objective: 'Desmascarar a falta de métricas e controle de CAC (Custo de Aquisição de Clientes).',
    impactExplanation: 'A maioria dos donos de negócios gasta tempo em redes sociais ou pequenas quantias em anúncios sem ter a menor noção de atribuição de receita.',
    followUp: '"Sem rastreamento, você está navegando no escuro. Nossa tecnologia rastreia o cliente desde o primeiro clique até o dinheiro entrar na sua conta."'
  },
  {
    number: '04',
    question: 'Você tem hoje uma lista com nome, WhatsApp e data da última compra de todos os clientes que consumiram aqui nos últimos 12 meses para enviar uma oferta hoje à tarde?',
    objective: 'Diagnosticar o desperdício total do LTV (Valor do Tempo de Vida) e ausência de retenção.',
    impactExplanation: 'Vender para quem já comprou de você é 7 vezes mais barato do que conquistar um cliente do zero. Negócios sem CRM simplesmente abandonam sua base de ouro.',
    followUp: '"Com a nossa máquina de retenção do Pacote Dominação, reativamos essa base automaticamente a cada 30 e 60 dias."'
  },
  {
    number: '05',
    question: 'Qual é o tíquete médio da sua venda e quanto custa, em média, atrair um novo comprador até o fechamento?',
    objective: 'Ancorar o valor financeiro do serviço e provar que a proposta é um investimento com ROI rápido.',
    impactExplanation: 'Quando o empresário entende a matemática do próprio negócio, ele percebe que fechar 2 ou 3 clientes a mais no mês já paga todo o Pacote Crescimento com lucro.',
    followUp: '"Se você fechar apenas 3 clientes com nossa máquina, o projeto já se pagou e todo o restante é margem limpa."'
  },
  {
    number: '06',
    question: 'Se colocássemos R$ 1.500 de anúncios locais rodando amanhã na sua região, sua equipe saberia exatamente como converter os leads em vendas em menos de 10 minutos?',
    objective: 'Introduzir a proposta irrecusável do Pacote 02 com verba de mídia garantida pela operação.',
    impactExplanation: 'Demonstra a seriedade da nossa operação comercial: nós não cobramos apenas pelo serviço, nós colocamos dinheiro na mesa do cliente para gerar resultados rápidos.',
    followUp: '"É por isso que no nosso Pacote Crescimento nós assumimos os R$ 1.500 da mídia inicial. O risco inicial é nosso."'
  }
];

export const OBJECTIONS_DATA: ObjectionItem[] = [
  {
    objection: '"Já investi em anúncios no Google e Instagram antes e não deu em nada, só perdi dinheiro."',
    subtext: 'Experiência frustrada com agências genéricas que vendem métricas de vaidade (curtidas e seguidores) ou amadores que só apertam o botão impulsionar.',
    category: 'Ceticismo & Histórico Negativo',
    scriptResponse: 'Entendo perfeitamente o seu receio, [Nome]. E você está coberto de razão de desconfiar: 90% das agências do mercado vendem curtidas e impressões bonitas que não pagam o boleto no final do mês. Anunciar sem uma página ultrarrápida e sem um WhatsApp automatizado para fechar o cliente em 60 segundos é realmente jogar dinheiro no lixo. Nós não fazemos postagens bonitinhas: nós instalamos uma máquina de captação de alta intenção com rastreamento ponta a ponta. Tanto é verdade que, no nosso plano Crescimento, nós bancamos R$ 1.500 da verba inicial de anúncios do nosso próprio bolso para validar o canal.',
    closingQuestion: 'Se o risco de mídia no primeiro momento é assumido pela nossa empresa, você concorda que o que você viu no passado não tem nada a ver com essa engenharia?'
  },
  {
    objection: '"Minha sobrinha/um freelancer já cuida das minhas redes sociais / Meu negócio funciona só no boca a boca."',
    subtext: 'Confundir presença estética em rede social com infraestrutura comercial de aquisição previsível.',
    category: 'Inércia & Comodismo',
    scriptResponse: 'O boca a boca é fantástico, [Nome], é sinal de que seu produto é excelente. Mas o boca a boca tem um perigo silencioso: você não tem controle sobre ele. Se o mercado retrair esse mês, você não pode "aumentar o volume" do boca a boca. E sobre a presença em redes sociais, produzir posts de feed constrói vitrine, mas não constrói esteira de vendas. Ninguém pesquisa no Instagram quando está com uma dor de dente urgente às 21h ou precisando fechar um serviço local agora; as pessoas vão ao Google. Nós não substituímos quem cuida das suas artes, nós criamos o canhão que traz clientes pagadores todos os dias.',
    closingQuestion: 'Você prefere continuar refém de quando o cliente decide lembrar de você ou ter uma torneira de demanda que você liga e desliga quando quiser?'
  },
  {
    objection: '"R$ 8.900 ou R$ 16.900 é um valor muito alto para o meu momento atual."',
    subtext: 'Avaliação de custo versus investimento; medo de não recuperar o capital alocado.',
    category: 'Preço & Orçamento',
    scriptResponse: 'Eu entendo que qualquer alocação de caixa precisa ser justificada até o último centavo. Vamos olhar não para o custo, mas para a capacidade de retorno do seu modelo: com o seu tíquete médio de R$ [Valor], quantos clientes novos você precisa fechar ao longo dos próximos 90 dias para recuperar 100% desse valor investido? São apenas [X] clientes. Você acredita que com a nossa máquina operando no Google Maps e no raio de 5km ao redor da sua empresa, nós não conseguimos trazer esses [X] clientes? Além disso, parcelamos em até 12 vezes, o que significa que o lucro dos primeiros novos clientes já quita as parcelas seguintes.',
    closingQuestion: 'Faz sentido começarmos pelo Pacote Crescimento agora para colocar a verba de R$ 1.500 rodando ainda esta semana?'
  }
];

export const CHECKLIST_STEPS: ChecklistStep[] = [
  {
    id: 1,
    title: 'Mapeamento de 20 Alvos Locais no Google Maps',
    timeEstimate: '30 a 45 minutos',
    description: 'Abra o Google Maps e busque pelos nichos prioritários (Restaurantes, Clínicas, Barbearias, Escritórios) num raio estrito de 3km a 5km do seu ponto de atuação.',
    deliverable: 'Planilha preenchida com 20 empresas com faturamento estimado acima de R$ 40k/mês e nota/presença deficitária.',
    tips: [
      'Priorize empresas que possuem entre 10 e 80 avaliações no Google (elas têm demanda, mas estão estagnadas).',
      'Descarte negócios com menos de 6 meses de vida ou franquias com diretrizes de marketing engessadas pela matriz.'
    ]
  },
  {
    id: 2,
    title: 'Auditoria Silenciosa do Gap Digital',
    timeEstimate: '5 minutos por alvo',
    description: 'Antes de entrar em contato, passe o pente fino na presença digital da empresa sem falar com ninguém.',
    deliverable: 'Checklist de 3 falhas críticas identificadas para usar como alavanca de autoridade no primeiro contato.',
    tips: [
      'Envie uma mensagem teste de WhatsApp às 19h30 para cronometrar o tempo de resposta.',
      'Abra o site da empresa no celular pelo 4G: demora mais de 3 segundos para carregar? Não tem botão de WhatsApp fixo?',
      'Verifique se os concorrentes diretos aparecem patrocinados acima dele no Google Search.'
    ]
  },
  {
    id: 3,
    title: 'Abordagem Executiva de Alta Autoridade (Sem parecer vendedor)',
    timeEstimate: '2 minutos por contato',
    description: 'Envie uma mensagem direta e cirúrgica para o WhatsApp comercial ou ligue solicitando falar diretamente com a pessoa responsável pela operação de clientes.',
    deliverable: 'Reunião diagnóstica de 20 minutos agendada presencialmente ou via Google Meet.',
    script: 'Olá, [Nome do Responsável ou Sócio]. Aqui é [Seu Nome], diretor de operações da [Nome da Operação]. Estive analisando a posição digital da [Nome da Empresa] aqui na região de [Bairro/Cidade] e identifiquei 2 falhas técnicas na sua esteira de atendimento que estão fazendo vocês perderem clientes qualificados para a concorrência local todos os dias. Estamos conduzindo um estudo de infraestrutura comercial na região e selecionei 3 empresas do seu nicho para apresentar esse diagnóstico sem custo. Teria 15 minutos na quinta às 14h ou sexta às 10h para eu te mostrar onde o faturamento está vazando?',
    tips: [
      'Nunca tente vender na mensagem de abordagem. Venda apenas a reunião diagnóstica de 15 minutos.',
      'Mencione o bairro ou cidade para criar proximidade geográfica imediata.'
    ]
  },
  {
    id: 4,
    title: 'Condução da Reunião Diagnóstica com as 6 Perguntas de Ouro',
    timeEstimate: '25 a 35 minutos',
    description: 'Não faça uma apresentação institucional chata. Faça perguntas diagnósticas que façam o empresário admitir em voz alta as fragilidades da sua operação comercial.',
    deliverable: 'Diagnóstico preenchido com a quantificação financeira do faturamento perdido todo mês.',
    tips: [
      'Faça a pergunta do tempo de resposta no WhatsApp e do CAC/LTV.',
      'Ouça 70% do tempo e anote os números ditos pelo cliente para usar no fechamento.'
    ]
  },
  {
    id: 5,
    title: 'Apresentação da Solução e Ancoragem do Pacote Crescimento',
    timeEstimate: '15 minutos',
    description: 'Apresente a solução como um motor completo de negócios. Comece ancorando o Pacote Dominação (R$ 16.900) e desça para o Pacote Crescimento (R$ 8.900) com o fechamento da verba de R$ 1.500 assumida.',
    deliverable: 'Cliente convencido de que o Pacote Crescimento oferece o menor risco do mercado.',
    script: 'Nosso ecossistema completo custa R$ 16.900 para 6 meses com produção audiovisual e CRM. Mas para a maioria dos negócios validados como o seu, nós recomendamos iniciar pelo Pacote Crescimento de R$ 8.900. O diferencial: nós temos tanta certeza da tração da nossa engenharia que nós assumimos R$ 1.500 da verba inicial de mídia do nosso próprio bolso. Você não corre risco de colocar dinheiro em tráfego às cegas.',
    tips: [
      'Use a garantia da verba de mídia como o golpe definitivo contra a objeção de risco.'
    ]
  },
  {
    id: 6,
    title: 'Fechamento de Contrato e Coleta de Briefing Técnico',
    timeEstimate: '20 minutos',
    description: 'Envie o contrato digital para assinatura e emita o link de pagamento (à vista com desconto ou 12x no cartão).',
    deliverable: 'Contrato assinado, comprovante financeiro validado e briefing técnico de acesso enviado à equipe de engenharia.',
    tips: [
      'Mantenha o tom executivo e seguro até a assinatura.',
      'Solicite na hora os acessos ao Google Meu Negócio e Meta Business Suite para iniciar o cronograma de 48h.'
    ]
  },
  {
    id: 7,
    title: 'Onboarding em 48h e Liberação da Sua Comissão de 30%',
    timeEstimate: '10 minutos de repasse',
    description: 'Repasse o dossiê da conta para o time de suporte e setup. Conforme a regra de remuneração, sua comissão (R$ 870, R$ 2.670 ou R$ 5.070) é liberada de acordo com o fluxo de liquidação.',
    deliverable: 'Comissão creditada na sua conta e cliente ativo na esteira de implementação.',
    tips: [
      'Acompanhe o primeiro marco de entrega (15 dias) para estreitar o relacionamento e já plantar a semente da renovação recorrente.'
    ]
  }
];
