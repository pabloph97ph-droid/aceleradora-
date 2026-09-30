/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketGap } from './components/MarketGap';
import { FivePillars } from './components/FivePillars';
import { Packages } from './components/Packages';
import { ComparisonTable } from './components/ComparisonTable';
import { OperationalCosts } from './components/OperationalCosts';
import { Remuneration } from './components/Remuneration';
import { SimulatorAndTargets } from './components/SimulatorAndTargets';
import { DiagnosticPlaybook } from './components/DiagnosticPlaybook';
import { ManifestoFooter } from './components/ManifestoFooter';
import { ProspectingModal } from './components/ProspectingModal';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090a] text-[#f3f4f6] selection:bg-[#b0f443] selection:text-[#08090a]">
      {/* Fixed Navbar with Scroll Indicator */}
      <Navbar
        scrollProgress={scrollProgress}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* Main Playbook Content Sections */}
      <main>
        {/* 1. Hero / Abertura */}
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        {/* 2. Por que agora? Oportunidade e Gap Tecnológico */}
        <MarketGap />

        {/* 3. Os 5 Pilares do Ecossistema */}
        <FivePillars />

        {/* 4. Como Funciona a Venda & Os 3 Pacotes */}
        <Packages onOpenModal={() => setIsModalOpen(true)} />

        {/* 5. Tabela Comparativa Visual de Escopo */}
        <ComparisonTable />

        {/* 6. Seção Interna Restrita: Custos Operacionais */}
        <OperationalCosts />

        {/* 7. Remuneração: 30% + Renovação + Bônus de Produção */}
        <Remuneration />

        {/* 8. Simulador Matemático & Checklist de Alvos Locais */}
        <SimulatorAndTargets />

        {/* 9. Playbook de Vendas: 6 Perguntas de Ouro e Objeções */}
        <DiagnosticPlaybook />
      </main>

      {/* 10. Rodapé com Manifesto Comercial & Início */}
      <ManifestoFooter onOpenModal={() => setIsModalOpen(true)} />

      {/* Modal Interativo de Prospecção (7 Passos) */}
      <ProspectingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
