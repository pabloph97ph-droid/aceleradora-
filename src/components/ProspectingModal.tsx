import React, { useState, useEffect } from 'react';
import { CHECKLIST_STEPS } from '../data/playbookData';
import { X, Check, Copy, RotateCcw, Target, Shield, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface ProspectingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProspectingModal: React.FC<ProspectingModalProps> = ({ isOpen, onClose }) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('operacao_local_checklist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [copiedScriptId, setCopiedScriptId] = useState<number | null>(null);
  const [expandedStepId, setExpandedStepId] = useState<number | null>(1);

  useEffect(() => {
    try {
      localStorage.setItem('operacao_local_checklist', JSON.stringify(completedSteps));
    } catch {
      // ignore
    }
  }, [completedSteps]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyScript = (scriptText: string, stepId: number) => {
    navigator.clipboard.writeText(scriptText);
    setCopiedScriptId(stepId);
    setTimeout(() => setCopiedScriptId(null), 2000);
  };

  const handleResetChecklist = () => {
    if (window.confirm('Deseja zerar o progresso do seu checklist de prospecção?')) {
      setCompletedSteps([]);
    }
  };

  const progressPercentage = Math.round((completedSteps.length / CHECKLIST_STEPS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#08090a]/80 backdrop-blur-md">
      
      {/* Modal Dialog Card */}
      <div className="bg-[#111316] border border-[#22272e] rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden lime-glow-subtle">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#22272e] bg-[#181b1f] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#b0f443]" />
              <span className="text-xs font-mono text-[#b0f443] uppercase tracking-wider font-semibold">
                ROTEIRO OPERACIONAL PRÁTICO
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#f3f4f6]">
              Checklist de Prospecção do Vendedor (7 Passos)
            </h3>
            <p className="text-xs text-[#9ca3af] mt-1">
              Siga cada etapa sequencialmente para sair da pesquisa no Google Maps até a comissão de 30% creditada na sua conta.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded bg-[#08090a] border border-[#22272e] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#b0f443]/40 transition-colors cursor-pointer shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Container */}
        <div className="px-5 sm:px-6 py-3 bg-[#08090a] border-b border-[#22272e] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 w-full">
            <div className="w-full bg-[#181b1f] h-2 rounded-full overflow-hidden border border-[#22272e]">
              <div
                className="bg-[#b0f443] h-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-mono text-[#b0f443] font-bold whitespace-nowrap tabular-figures">
              {completedSteps.length} de {CHECKLIST_STEPS.length} ({progressPercentage}%)
            </span>
          </div>

          <button
            onClick={handleResetChecklist}
            title="Zerar progresso"
            className="text-[11px] font-mono text-[#9ca3af] hover:text-[#f3f4f6] flex items-center gap-1 cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reiniciar</span>
          </button>
        </div>

        {/* Modal Scrollable Steps Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {CHECKLIST_STEPS.map((step) => {
            const isCompleted = completedSteps.includes(step.id);
            const isExpanded = expandedStepId === step.id;

            return (
              <div
                key={step.id}
                className={`border rounded-lg transition-colors ${
                  isCompleted
                    ? 'bg-[#181b1f]/40 border-[#b0f443]/30'
                    : 'bg-[#08090a] border-[#22272e]'
                }`}
              >
                {/* Step Top Bar */}
                <div className="p-4 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {/* Interactive Checkbox */}
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`w-6 h-6 rounded flex items-center justify-center border transition-colors mt-0.5 cursor-pointer shrink-0 ${
                        isCompleted
                          ? 'bg-[#b0f443] border-[#b0f443] text-[#08090a]'
                          : 'bg-[#111316] border-[#22272e] text-transparent hover:border-[#b0f443]'
                      }`}
                      aria-label={`Marcar passo ${step.id} como ${isCompleted ? 'não concluído' : 'concluído'}`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[11px] font-mono text-[#b0f443] font-bold">
                          PASSO 0{step.id}
                        </span>
                        <span className="text-xs text-[#9ca3af]">·</span>
                        <span className="text-[11px] font-mono text-[#9ca3af] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.timeEstimate}
                        </span>
                      </div>
                      <h4
                        className={`text-sm sm:text-base font-bold cursor-pointer ${
                          isCompleted ? 'text-[#9ca3af] line-through' : 'text-[#f3f4f6]'
                        }`}
                        onClick={() => toggleStep(step.id)}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Expand / Collapse toggle */}
                  <button
                    onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                    className="p-1 rounded text-[#9ca3af] hover:text-[#f3f4f6] cursor-pointer shrink-0"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Details: Deliverable, Script, Tips */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#22272e]/60 space-y-3 text-xs">
                    
                    {/* Deliverable Box */}
                    <div className="p-3 bg-[#111316] border border-[#22272e] rounded">
                      <strong className="text-[#f3f4f6] block mb-0.5 font-mono text-[11px] uppercase">
                        Entregável Esperado Desta Etapa:
                      </strong>
                      <span className="text-[#9ca3af]">{step.deliverable}</span>
                    </div>

                    {/* Script if available */}
                    {step.script && (
                      <div className="p-3 bg-[#111316] border border-[#b0f443]/30 rounded">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-[#b0f443] text-[11px] uppercase font-semibold">
                            Script Pronto para WhatsApp / Ligação:
                          </span>
                          <button
                            onClick={() => handleCopyScript(step.script!, step.id)}
                            className="flex items-center gap-1 text-[11px] font-mono text-[#9ca3af] hover:text-[#b0f443] cursor-pointer"
                          >
                            {copiedScriptId === step.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#b0f443]" />
                                <span className="text-[#b0f443]">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar Script</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-[#f3f4f6] italic leading-relaxed bg-[#08090a] p-2.5 rounded border border-[#22272e]">
                          "{step.script}"
                        </p>
                      </div>
                    )}

                    {/* Execution Tips */}
                    <div className="space-y-1">
                      <span className="font-mono text-[#9ca3af] text-[11px] uppercase block">
                        Dicas Táticas de Execução:
                      </span>
                      {step.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                          <span className="text-[#b0f443] font-bold">•</span>
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-[#22272e] bg-[#181b1f] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-[#9ca3af]">
            Progresso salvo automaticamente no seu navegador.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#f3f4f6] bg-[#08090a] border border-[#22272e] hover:bg-[#22272e] rounded transition-colors cursor-pointer"
            >
              Fechar Guia
            </button>
            <button
              onClick={() => {
                if (completedSteps.length < CHECKLIST_STEPS.length) {
                  setCompletedSteps(CHECKLIST_STEPS.map((s) => s.id));
                } else {
                  setCompletedSteps([]);
                }
              }}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#08090a] bg-[#b0f443] hover:bg-[#c2f763] rounded transition-colors cursor-pointer whitespace-nowrap"
            >
              {completedSteps.length === CHECKLIST_STEPS.length ? 'Desmarcar Todos' : 'Marcar Todos Concluídos'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
