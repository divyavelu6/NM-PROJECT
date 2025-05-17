import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserInput, AIRecommendation, SustainabilityScore, Message, ClimateRisk } from '../types';
import { mockRecommendations } from '../data/mockData';

interface AppContextType {
  userInput: UserInput;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput>>;
  recommendations: AIRecommendation[];
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  sustainabilityScore: SustainabilityScore | null;
  generateRecommendations: () => void;
  generateSustainabilityScore: () => void;
  climateRisks: ClimateRisk[];
  loading: boolean;
}

const defaultUserInput: UserInput = {
  cityType: '',
  areaSize: '',
  weatherEvents: [],
  existingInfrastructure: [],
  climateZone: '',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInput, setUserInput] = useState<UserInput>(defaultUserInput);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sustainabilityScore, setSustainabilityScore] = useState<SustainabilityScore | null>(null);
  const [climateRisks, setClimateRisks] = useState<ClimateRisk[]>([]);
  const [loading, setLoading] = useState(false);

  const addMessage = (messageData: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...messageData,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const generateRecommendations = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      
      // Generate a response from assistant
      if (userInput.cityType && userInput.areaSize) {
        addMessage({
          sender: 'assistant',
          text: `Based on your ${userInput.cityType} city design and area size of ${userInput.areaSize}, I've generated several climate resilience recommendations. These focus on managing water resources, reducing heat island effects, and enhancing biodiversity.`,
        });
      }
      
      setLoading(false);
    }, 2000);
  };

  const generateSustainabilityScore = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSustainabilityScore({
        overall: 68,
        categories: {
          waterManagement: 75,
          heatResilience: 60,
          biodiversity: 82,
          energyEfficiency: 65,
          carbonFootprint: 58,
        },
        improvements: [
          'Increase permeable surfaces to improve water management',
          'Add more shade structures to reduce heat island effect',
          'Implement green roofs on more buildings',
          'Introduce more renewable energy sources',
        ],
      });
      
      setClimateRisks([
        {
          type: 'flood',
          probability: 0.65,
          impact: 8,
          mitigationStrategies: ['Permeable pavements', 'Rain gardens', 'Bioswales'],
        },
        {
          type: 'heat',
          probability: 0.78,
          impact: 7,
          mitigationStrategies: ['Green spaces', 'Reflective surfaces', 'Shade structures'],
        },
        {
          type: 'drought',
          probability: 0.45,
          impact: 6,
          mitigationStrategies: ['Water-efficient landscaping', 'Rainwater harvesting', 'Greywater reuse'],
        },
      ]);
      
      setLoading(false);
    }, 2500);
  };

  return (
    <AppContext.Provider
      value={{
        userInput,
        setUserInput,
        recommendations,
        messages,
        addMessage,
        sustainabilityScore,
        generateRecommendations,
        generateSustainabilityScore,
        climateRisks,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};