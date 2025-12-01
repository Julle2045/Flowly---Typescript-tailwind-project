export interface FAQItem {
    question: string;
    answer: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface HeroProps {
    title?: string;
    subtitle?: string;
}

export interface Step {
    id: number;
    title: string;
    description: string;
}

export interface Plan {
    id: number;
    name: string;
    price: string;
    features: string[];
    isBest: boolean;
}