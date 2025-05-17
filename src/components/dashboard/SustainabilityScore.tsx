import React from 'react';
import { useApp } from '../../context/AppContext';
import Card from '../ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const SustainabilityScore: React.FC = () => {
  const { sustainabilityScore } = useApp();
  
  if (!sustainabilityScore) {
    return (
      <Card className="p-6">
        <div className="text-center py-8">
          <p className="text-gray-500">Generate recommendations to see sustainability scores</p>
        </div>
      </Card>
    );
  }
  
  const { overall, categories, improvements } = sustainabilityScore;
  
  const categoryData = [
    { name: 'Water Management', value: categories.waterManagement, color: '#0ea5e9' },
    { name: 'Heat Resilience', value: categories.heatResilience, color: '#f97316' },
    { name: 'Biodiversity', value: categories.biodiversity, color: '#10b981' },
    { name: 'Energy Efficiency', value: categories.energyEfficiency, color: '#8b5cf6' },
    { name: 'Carbon Footprint', value: categories.carbonFootprint, color: '#64748b' },
  ];
  
  const getColorForScore = (score: number) => {
    if (score < 50) return 'text-error-600';
    if (score < 70) return 'text-warning-600';
    return 'text-success-600';
  };
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Sustainability Score</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className={`text-5xl font-bold ${getColorForScore(overall)}`}>{overall}</div>
            <div className="text-gray-500 text-sm">out of 100</div>
          </div>
          <div className="mt-4 text-center">
            <h4 className="text-sm font-medium text-gray-700">Overall Rating</h4>
            <p className="text-sm text-gray-500 mt-1">
              {overall < 50 ? 'Needs Improvement' : overall < 70 ? 'Moderate' : 'Good'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center col-span-2">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={false}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}/100`, 'Score']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Improvements</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          {improvements.map((improvement, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block h-2 w-2 rounded-full bg-primary-500 mt-1.5 mr-2"></span>
              {improvement}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default SustainabilityScore;