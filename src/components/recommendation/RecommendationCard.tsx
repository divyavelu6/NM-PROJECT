import React from 'react';
import Card from '../ui/Card';
import { AIRecommendation } from '../../types';
import { motion } from 'framer-motion';
import { DropletIcon, Thermometer, Leaf, ZapIcon, Building2 } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: AIRecommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const { 
    title, 
    description, 
    impact, 
    implementationDifficulty, 
    costEstimate, 
    benefits, 
    category,
    imageUrl
  } = recommendation;
  
  const getCategoryIcon = () => {
    switch (category) {
      case 'water':
        return <DropletIcon className="text-primary-600" size={20} />;
      case 'heat':
        return <Thermometer className="text-warning-600" size={20} />;
      case 'biodiversity':
        return <Leaf className="text-secondary-600" size={20} />;
      case 'energy':
        return <ZapIcon className="text-accent-600" size={20} />;
      case 'infrastructure':
        return <Building2 className="text-gray-600" size={20} />;
      default:
        return <Leaf className="text-secondary-600" size={20} />;
    }
  };
  
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-success-100 text-success-800';
      case 'medium':
        return 'bg-warning-100 text-warning-800';
      case 'high':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getCostColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-success-100 text-success-800';
      case 'medium':
        return 'bg-warning-100 text-warning-800';
      case 'high':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="h-full flex flex-col" isInteractive>
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          {getCategoryIcon()}
          <span className="ml-2 text-sm font-medium capitalize text-gray-600">
            {category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(implementationDifficulty)}`}>
            {implementationDifficulty.charAt(0).toUpperCase() + implementationDifficulty.slice(1)} Difficulty
          </span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${getCostColor(costEstimate)}`}>
            {costEstimate.charAt(0).toUpperCase() + costEstimate.slice(1)} Cost
          </span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Impact</h4>
          <p className="text-sm text-gray-600">{impact}</p>
        </div>
        
        <div className="mt-auto">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Benefits</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-1.5 mr-2"></span>
                {benefit}
              </li>
            ))}
            {benefits.length > 3 && (
              <li className="text-xs text-primary-600 mt-1">
                + {benefits.length - 3} more benefits
              </li>
            )}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default RecommendationCard;