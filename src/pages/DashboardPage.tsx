import React from 'react';
import Layout from '../components/layout/Layout';
import SustainabilityScore from '../components/dashboard/SustainabilityScore';
import ClimateRiskCard from '../components/dashboard/ClimateRiskCard';
import { useApp } from '../context/AppContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart2,
  ArrowRight,
  BarChart,
  TrendingUp,
  CloudSun,
  Check,
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { sustainabilityScore, recommendations } = useApp();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Monitor sustainability metrics and climate resilience factors
          </p>
        </motion.div>
        
        {sustainabilityScore ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-2"
            >
              <SustainabilityScore />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ClimateRiskCard />
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="p-8 text-center">
              <BarChart2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-medium text-gray-700 mb-2">
                No dashboard data available
              </h2>
              <p className="text-gray-600 mb-6">
                Generate design recommendations first to see sustainability metrics and climate risk analysis.
              </p>
              <Link to="/assistant">
                <Button rightIcon={<ArrowRight size={20} />}>
                  Go to Assistant
                </Button>
              </Link>
            </Card>
          </motion.div>
        )}
        
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Progress</h2>
            
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                  <div className="flex items-center mb-2">
                    <BarChart className="h-6 w-6 text-primary-600 mr-2" />
                    <h3 className="text-lg font-medium text-primary-900">Overall</h3>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-100">
                  <div className="flex items-center mb-2">
                    <CloudSun className="h-6 w-6 text-secondary-600 mr-2" />
                    <h3 className="text-lg font-medium text-secondary-900">Resilience</h3>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Current</span>
                      <span className="text-sm font-medium text-gray-900">Low</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-accent-50 rounded-lg border border-accent-100">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-6 w-6 text-accent-600 mr-2" />
                    <h3 className="text-lg font-medium text-accent-900">Cost Savings</h3>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Potential</span>
                      <span className="text-sm font-medium text-gray-900">High</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-accent-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-success-50 rounded-lg border border-success-100">
                  <div className="flex items-center mb-2">
                    <Check className="h-6 w-6 text-success-600 mr-2" />
                    <h3 className="text-lg font-medium text-success-900">Recommendations</h3>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Implemented</span>
                      <span className="text-sm font-medium text-gray-900">0/{recommendations.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-success-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button variant="outline">Track Implementation</Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;