import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../ui/Button';
import { cityTypes, climateZones, areaSizes, weatherEvents, infrastructureTypes } from '../../data/mockData';
import { motion } from 'framer-motion';

const UserInputForm: React.FC = () => {
  const { 
    userInput, 
    setUserInput, 
    generateRecommendations, 
    generateSustainabilityScore, 
    loading 
  } = useApp();
  
  const handleCityTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserInput({ ...userInput, cityType: e.target.value });
  };
  
  const handleAreaSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserInput({ ...userInput, areaSize: e.target.value });
  };
  
  const handleClimateZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserInput({ ...userInput, climateZone: e.target.value });
  };
  
  const handleWeatherEventChange = (event: string) => {
    const currentEvents = [...userInput.weatherEvents];
    
    if (currentEvents.includes(event)) {
      setUserInput({
        ...userInput,
        weatherEvents: currentEvents.filter((e) => e !== event),
      });
    } else {
      setUserInput({
        ...userInput,
        weatherEvents: [...currentEvents, event],
      });
    }
  };
  
  const handleInfrastructureChange = (infra: string) => {
    const currentInfra = [...userInput.existingInfrastructure];
    
    if (currentInfra.includes(infra)) {
      setUserInput({
        ...userInput,
        existingInfrastructure: currentInfra.filter((e) => e !== infra),
      });
    } else {
      setUserInput({
        ...userInput,
        existingInfrastructure: [...currentInfra, infra],
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateRecommendations();
    generateSustainabilityScore();
  };
  
  const isFormComplete = 
    userInput.cityType && 
    userInput.areaSize && 
    userInput.climateZone && 
    userInput.weatherEvents.length > 0 && 
    userInput.existingInfrastructure.length > 0;
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Design Parameters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="cityType" className="block text-sm font-medium text-gray-700 mb-1">
            City Type
          </label>
          <select
            id="cityType"
            value={userInput.cityType}
            onChange={handleCityTypeChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 border"
          >
            <option value="">Select city type</option>
            {cityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="areaSize" className="block text-sm font-medium text-gray-700 mb-1">
            Area Size
          </label>
          <select
            id="areaSize"
            value={userInput.areaSize}
            onChange={handleAreaSizeChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 border"
          >
            <option value="">Select area size</option>
            {areaSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="climateZone" className="block text-sm font-medium text-gray-700 mb-1">
            Climate Zone
          </label>
          <select
            id="climateZone"
            value={userInput.climateZone}
            onChange={handleClimateZoneChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 border"
          >
            <option value="">Select climate zone</option>
            {climateZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="block text-sm font-medium text-gray-700 mb-2">Common Weather Events</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {weatherEvents.map((event) => (
            <motion.div
              key={event}
              whileTap={{ scale: 0.95 }}
              className={`p-2 border rounded-md text-sm cursor-pointer transition-colors ${
                userInput.weatherEvents.includes(event)
                  ? 'bg-primary-100 border-primary-300 text-primary-800'
                  : 'hover:bg-gray-50 border-gray-200 text-gray-700'
              }`}
              onClick={() => handleWeatherEventChange(event)}
            >
              {event}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <p className="block text-sm font-medium text-gray-700 mb-2">Existing Infrastructure</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {infrastructureTypes.map((infra) => (
            <motion.div
              key={infra}
              whileTap={{ scale: 0.95 }}
              className={`p-2 border rounded-md text-sm cursor-pointer transition-colors ${
                userInput.existingInfrastructure.includes(infra)
                  ? 'bg-primary-100 border-primary-300 text-primary-800'
                  : 'hover:bg-gray-50 border-gray-200 text-gray-700'
              }`}
              onClick={() => handleInfrastructureChange(infra)}
            >
              {infra}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <Button
          type="submit"
          disabled={!isFormComplete || loading}
          isLoading={loading}
          fullWidth
          size="lg"
        >
          Generate Design Recommendations
        </Button>
      </div>
    </form>
  );
};

export default UserInputForm;