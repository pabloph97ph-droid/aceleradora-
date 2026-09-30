import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, OBJECTIONS_DATA } from '../data/playbookData';
import { HelpCircle, MessageSquare, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export const DiagnosticPlaybook: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(0);

  const handleCopyScript = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="playbook" className="py-20 lg:py-28 border-b border-[#22272e] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#b0f443] tracking-wide mb-2">
            07. PLAYBOOK DE PROSPECÇÃO & FECHAMENTO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f4f6] mb-4">
            Roteiro Diagnóstico & Quebra de Objeções de Alto Impacto
          </h2>
          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl leading-relaxed">
            Em reuniões com empresários locais, quem faz as perguntas controla a negociação. Conduza o diagnóstico com as 6 perguntas de ouro e quebre as objeções clássicas usando nossos scripts testados em campo.
          </p>
        </div>

        {/* PART 1: The 6 Golden Diagnostic Questions */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-[#b0f443]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#f3f4f6]">
              As 6 Perguntas de Ouro do Diagnóstico Comercial
            </h3>
          </div>

          <div className="space-y-4">
            {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
              const isExpanded = expandedQuestion === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#111316] border border-[#22272e] rounded-lg overflow-hidden transition-colors hover:border-[#b0f443]/40"
                >
                  <div
                    onClick={() => setExpandedQuestion(isExpanded ? null : idx)}
                    className="p-5 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-mono font-bold text-[#b0f443] bg-[#08090a] px-2 py-1 rounded border border-[#22272e] shrink-0">
                        {q.number}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#f3f4f6] leading-snug">
                          "{q.question}"
                        </h4>
                        <span className="text-xs font-mono text-[#9ca3af] mt-1 block">
                          Objetivo: {q.objective}
                        </span>
                      </div>
                    </div>

                    <div className="p-1 rounded bg-[#08090a] text-[#9ca3af] shrink-0 mt-0.5">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#22272e]/60 bg-[#08090a]/40 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 bg-[#08090a] border border-[#22272e] rounded">
                        <span className="font-mono text-[#9ca3af] uppercase block mb-1">
                          Por que essa pergunta dói no empresário?
                        </span>
                        <p className="text-[#f3f4f6] leading-relaxed">
                          {q.impactExplanation}
                        </p>
                      </div>

                      <div className="p-3.5 bg-[#08090a] border border-[#b0f443]/30 rounded">
                        <span className="font-mono text-[#b0f443] uppercase block mb-1">
                          Seu Gancho de Continuidade (Follow-up)
                        </span>
                        <p className="text-[#f3f4f6] italic leading-relaxed">
                          {q.followUp}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: Objection Handling Matrix */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-[#b0f443]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#f3f4f6]">
              Matriz de Quebra de Objeções (Scripts Palavra por Palavra)
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {OBJECTIONS_DATA.map((obj, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#111316] border border-[#22272e] rounded-lg flex flex-col justify-between hover:border-[#b0f443]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[#b0f443] px-2 py-0.5 rounded bg-[#08090a] border border-[#b0f443]/30">
                      {obj.category}
                    </span>
                    <button
                      onClick={() => handleCopyScript(obj.scriptResponse, idx)}
                      className="flex items-center gap-1 text-[11px] font-mono text-[#9ca3af] hover:text-[#b0f443] cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#b0f443]" />
                          <span className="text-[#b0f443]">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-[#f3f4f6] mb-2 leading-snug">
                    {obj.objection}
                  </h4>
                  <div className="text-[11px] text-[#9ca3af] italic mb-4">
                    Subtexto do cliente: {obj.subtext}
                  </div>

                  <div className="p-3.5 bg-[#08090a] border border-[#22272e] rounded text-xs text-[#f3f4f6] leading-relaxed mb-4">
                    <span className="font-mono text-[#9ca3af] block text-[10px] mb-1">SCRIPT RECOMENDADO:</span>
                    {obj.scriptResponse}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#22272e] text-xs">
                  <span className="font-mono text-[#b0f443] block text-[10px] uppercase mb-0.5">
                    Pergunta de Fechamento Imediato:
                  </span>
                  <p className="text-[#f3f4f6] font-medium italic">
                    "{obj.closingQuestion}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
