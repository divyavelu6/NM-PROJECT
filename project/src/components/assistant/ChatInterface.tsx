import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';

const ChatInterface: React.FC = () => {
  const { messages, addMessage, loading } = useApp();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Add user message
    addMessage({
      sender: 'user',
      text: inputText,
    });
    
    setInputText('');
    
    // Simulate AI assistant response after a short delay
    setTimeout(() => {
      addMessage({
        sender: 'assistant',
        text: getAssistantResponse(inputText),
      });
    }, 1500);
  };
  
  const getAssistantResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('flood') || lowerText.includes('water')) {
      return "Flooding is a significant climate risk in many urban areas. I recommend implementing permeable pavements, rain gardens, bioswales, and retention ponds to manage stormwater. These solutions can reduce flood risk by up to 30% in implemented areas while also providing benefits for water quality and groundwater recharge.";
    } else if (lowerText.includes('heat') || lowerText.includes('temperature')) {
      return "Urban heat islands can increase temperatures by 1-7°F compared to surrounding areas. Effective solutions include increasing tree canopy, implementing green roofs, using cool/reflective pavements, and creating more green spaces. These interventions can reduce local temperatures by 2-8°F while also improving air quality and providing habitat.";
    } else if (lowerText.includes('green') || lowerText.includes('tree') || lowerText.includes('biodiversity')) {
      return "Increasing urban biodiversity through native planting, habitat corridors, and multi-layered vegetation can make cities more resilient to climate impacts. I recommend implementing a connected network of green spaces with diverse native plants, which can support pollinators, improve air quality, manage stormwater, and reduce heat island effects.";
    } else {
      return "I'm your Climate Resilient Urban Design Assistant. I can help you design urban spaces that are more resilient to climate impacts like flooding, extreme heat, and biodiversity loss. What specific aspect of climate resilience would you like to explore for your urban design project?";
    }
  };
  
  return (
    <div className="flex flex-col h-[600px] border rounded-lg bg-white shadow-sm">
      <div className="p-4 border-b bg-primary-50">
        <h3 className="text-lg font-medium text-gray-900">Design Assistant</h3>
        <p className="text-sm text-gray-500">Chat with our AI to get climate resilience recommendations</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>Ask me about climate resilient urban design strategies!</p>
            <p className="text-sm mt-2">Example: "How can I reduce flood risk in my city design?"</p>
          </div>
        ) : (
          messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`max-w-[75%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-primary-100 text-primary-900'
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || loading}
          className={`px-4 py-2 rounded-r-lg flex items-center justify-center ${
            !inputText.trim() || loading
              ? 'bg-gray-300 text-gray-500'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {loading ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;