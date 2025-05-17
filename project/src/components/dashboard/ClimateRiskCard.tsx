import React from 'react';
import { useApp } from '../../context/AppContext';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { Droplets, Thermometer, CloudRain } from 'lucide-react';

const ClimateRiskCard: React.FC = () => {
  const { climateRisks } = useApp();
  
  if (climateRisks.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center py-8">
          <p className="text-gray-500">Generate recommendations to see climate risks</p>
        </div>
      </Card>
    );
  }
  
  const getRiskIcon = (type: string) => {
    switch (type) {
      case 'flood':
        return <Droplets className="text-primary-600" size={24} />;
      case 'heat':
        return <Thermometer className="text-warning-600" size={24} />;
      case 'drought':
        return <CloudRain className="text-secondary-600" size={24} />;
      default:
        return <Droplets className="text-primary-600" size={24} />;
    }
  };
  
  const getRiskColor = (probability: number) => {
    if (probability < 0.3) return 'bg-success-100 border-success-300 text-success-800';
    if (probability < 0.6) return 'bg-warning-100 border-warning-300 text-warning-800';
    return 'bg-error-100 border-error-300 text-error-800';
  };
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Climate Risk Assessment</h3>
      
      <div className="space-y-4">
        {climateRisks.map((risk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-4 rounded-lg border ${getRiskColor(risk.probability)}`}
          >
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                {getRiskIcon(risk.type)}
              </div>
              <div>
                <h4 className="font-medium capitalize">{risk.type} Risk</h4>
                <div className="flex items-center mt-2">
                  <div className="text-sm mr-4">
                    <span className="font-medium">Probability:</span>{' '}
                    {(risk.probability * 100).toFixed(0)}%
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Impact:</span> {risk.impact}/10
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="text-sm font-medium mb-1">Mitigation Strategies:</h5>
                  <ul className="text-sm space-y-1">
                    {risk.mitigationStrategies.map((strategy, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current mt-1.5 mr-2"></span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default ClimateRiskCard;