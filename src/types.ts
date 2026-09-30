export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  commission: number;
  commissionFormatted: string;
  isPopular?: boolean;
  highlightNote?: string;
  badge?: string;
  duration: string;
  idealFor: string;
  deliverables: string[];
  differentials: string[];
}

export interface TargetProfile {
  id: string;
  title: string;
  subtitle: string;
  averageTicket: string;
  mainPain: string;
  technologicalGap: string;
  recommendedPackage: string;
  goldenPitch: string;
  keyMetric: string;
}

export interface DiagnosticQuestion {
  number: string;
  question: string;
  objective: string;
  impactExplanation: string;
  followUp: string;
}

export interface ObjectionItem {
  objection: string;
  subtext: string;
  category: string;
  scriptResponse: string;
  closingQuestion: string;
}

export interface ChecklistStep {
  id: number;
  title: string;
  timeEstimate: string;
  description: string;
  deliverable: string;
  script?: string;
  tips: string[];
}
