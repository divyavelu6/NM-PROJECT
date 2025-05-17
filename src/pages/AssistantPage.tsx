import React from 'react';
import Layout from '../components/layout/Layout';
import UserInputForm from '../components/input/UserInputForm';
import ChatInterface from '../components/assistant/ChatInterface';
import RecommendationCard from '../components/recommendation/RecommendationCard';
import { useApp } from '../context/AppContext';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';

const AssistantPage: React.FC = () => {
  const { recommendations } = useApp();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Design Assistant</h1>
          <p className="text-gray-600 mt-2">
            Get AI-powered recommendations for climate-resilient urban design
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <UserInputForm />
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ChatInterface />
            </motion.div>
          </div>
        </div>
        
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Design Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <RecommendationCard recommendation={rec} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {recommendations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="p-8 text-center">
              <h2 className="text-xl font-medium text-gray-700 mb-2">
                No recommendations yet
              </h2>
              <p className="text-gray-600">
                Fill in the design parameters and submit the form to get AI-powered recommendations
                for climate-resilient urban design.
              </p>
            </Card>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default AssistantPage;