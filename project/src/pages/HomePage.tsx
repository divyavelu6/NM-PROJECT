import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, BarChart2, Shield, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Climate Resilient Urban Design Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered tools to help urban planners, architects, and students create more resilient and sustainable cities.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/assistant">
              <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                Start Design Assistant
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" rightIcon={<BarChart2 size={20} />}>
                View Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                <Building2 size={24} />
              </div>
              <h2 className="text-xl font-semibold">AI-Powered Design Recommendations</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Our AI analyzes your urban inputs and recommends resilient infrastructure and layout solutions based on climate models.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                Optimized urban layouts for water drainage
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                Heat island effect reduction strategies
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                Biodiversity enhancement suggestions
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                <MessageSquare size={24} />
              </div>
              <h2 className="text-xl font-semibold">Interactive Design Assistant</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Chat with our AI assistant to receive personalized guidance on creating climate-resilient urban designs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                Conversational interface for complex queries
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                Explains rationale behind recommendations
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 mt-0.5 text-xs">✓</span>
                Adapts to your specific design context
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-sm border mb-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Input Your Design Parameters</h3>
              <p className="text-gray-600">Provide details about your urban project including location, size, and existing conditions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our AI analyzes your inputs against climate data and urban design best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Get Actionable Recommendations</h3>
              <p className="text-gray-600">Receive tailored suggestions and sustainability scores for your urban design.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-lg text-white text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to create a climate-resilient urban design?</h2>
          <p className="text-xl mb-6">Start using our AI assistant to build more sustainable cities.</p>
          <Link to="/assistant">
            <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-gray-100 border-white">
              Get Started Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default HomePage;