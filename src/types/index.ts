export interface UserInput {
  cityType: string;
  areaSize: string;
  weatherEvents: string[];
  existingInfrastructure: string[];
  climateZone: string;
}

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
  implementationDifficulty: 'low' | 'medium' | 'high';
  costEstimate: 'low' | 'medium' | 'high';
  benefits: string[];
  category: 'water' | 'heat' | 'biodiversity' | 'energy' | 'infrastructure';
  imageUrl?: string;
}

export interface SustainabilityScore {
  overall: number; // 0-100
  categories: {
    waterManagement: number;
    heatResilience: number;
    biodiversity: number;
    energyEfficiency: number;
    carbonFootprint: number;
  };
  improvements: string[];
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export interface ClimateRisk {
  type: 'flood' | 'heat' | 'drought' | 'storm';
  probability: number; // 0-1
  impact: number; // 1-10
  mitigationStrategies: string[];
}

export interface UserFeedback {
  recommendationId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comments: string;
  implementationFeasibility: 1 | 2 | 3 | 4 | 5;
}