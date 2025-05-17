import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Settings, Bell, User, Lock, Database, Globe } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">
            Configure application preferences and manage data
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-medium text-gray-900">Data Options</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Climate Data Integration</h3>
                    <p className="text-sm text-gray-500">Connect to public climate APIs for real-time data</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="climate-data" 
                        id="climate-data" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      />
                      <label 
                        htmlFor="climate-data" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Satellite Imagery</h3>
                    <p className="text-sm text-gray-500">Incorporate satellite imagery in analysis</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="satellite" 
                        id="satellite" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      />
                      <label 
                        htmlFor="satellite" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Local Data Storage</h3>
                    <p className="text-sm text-gray-500">Store project data locally in your browser</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="local-storage" 
                        id="local-storage" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                        defaultChecked
                      />
                      <label 
                        htmlFor="local-storage" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Bell className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-medium text-gray-900">Notifications</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Climate Alerts</h3>
                    <p className="text-sm text-gray-500">Receive notifications about climate risks in your area</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="climate-alerts" 
                        id="climate-alerts" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      />
                      <label 
                        htmlFor="climate-alerts" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Recommendation Updates</h3>
                    <p className="text-sm text-gray-500">Get notified about new design recommendations</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="updates" 
                        id="updates" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                        defaultChecked
                      />
                      <label 
                        htmlFor="updates" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-medium text-gray-900">Language & Accessibility</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    id="language"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 border"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">High Contrast Mode</h3>
                    <p className="text-sm text-gray-500">Enhance visibility with higher contrast</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="contrast" 
                        id="contrast" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      />
                      <label 
                        htmlFor="contrast" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Text-to-Speech</h3>
                    <p className="text-sm text-gray-500">Enable spoken recommendations and feedback</p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        name="tts" 
                        id="tts" 
                        className="absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                      />
                      <label 
                        htmlFor="tts" 
                        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" className="mr-4">Cancel</Button>
          <Button>Save Settings</Button>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;