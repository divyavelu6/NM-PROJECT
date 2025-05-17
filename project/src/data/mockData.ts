import { AIRecommendation, ClimateRisk } from '../types';

export const mockRecommendations: AIRecommendation[] = [
  {
    id: '1',
    title: 'Permeable Pavement Systems',
    description: 'Implement permeable pavement in parking lots and low-traffic areas to reduce runoff and increase groundwater recharge.',
    impact: 'Reduces flood risk by 30% in implemented areas and helps replenish groundwater.',
    implementationDifficulty: 'medium',
    costEstimate: 'medium',
    benefits: [
      'Reduces stormwater runoff',
      'Filters pollutants',
      'Recharges groundwater',
      'Reduces heat island effect'
    ],
    category: 'water',
    imageUrl: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Green Roof Implementation',
    description: 'Install vegetation on building rooftops to absorb rainwater, provide insulation, and reduce urban heat island effects.',
    impact: 'Reduces building energy consumption by up to 25% and absorbs up to 80% of rainfall.',
    implementationDifficulty: 'high',
    costEstimate: 'high',
    benefits: [
      'Reduces energy costs',
      'Manages stormwater',
      'Creates habitat for pollinators',
      'Improves air quality',
      'Extends roof life'
    ],
    category: 'heat',
    imageUrl: 'https://images.pexels.com/photos/1009884/pexels-photo-1009884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Urban Tree Canopy Enhancement',
    description: 'Strategically plant native trees to create shade, reduce temperatures, improve air quality, and enhance biodiversity.',
    impact: 'Can reduce local temperatures by 2-8°F and capture up to 48 pounds of carbon annually per tree.',
    implementationDifficulty: 'low',
    costEstimate: 'low',
    benefits: [
      'Creates shade and cooling',
      'Reduces air pollution',
      'Captures carbon',
      'Supports wildlife',
      'Improves mental health'
    ],
    category: 'biodiversity',
    imageUrl: 'https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Bioswale Networks',
    description: 'Implement vegetated channels designed to concentrate or remove silt and pollution from surface runoff water.',
    impact: 'Can remove up to 80% of sediments and 40% of nutrients, metals, and bacteria from stormwater runoff.',
    implementationDifficulty: 'medium',
    costEstimate: 'medium',
    benefits: [
      'Filters pollutants',
      'Reduces flooding',
      'Enhances biodiversity',
      'Creates green space'
    ],
    category: 'water',
    imageUrl: 'https://images.pexels.com/photos/18911108/pexels-photo-18911108/free-photo-of-cars-city-landscape-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'Renewable Energy Integration',
    description: 'Incorporate solar panels and small-scale wind turbines into urban infrastructure to reduce carbon footprint.',
    impact: 'Can offset 10-30% of urban energy consumption depending on implementation scale.',
    implementationDifficulty: 'high',
    costEstimate: 'high',
    benefits: [
      'Reduces carbon emissions',
      'Decreases energy costs',
      'Enhances energy independence',
      'Creates local jobs'
    ],
    category: 'energy',
    imageUrl: 'https://images.pexels.com/photos/9875449/pexels-photo-9875449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    title: 'Water-Smart Landscaping',
    description: 'Design urban landscapes with native, drought-resistant plants that require minimal irrigation and maintenance.',
    impact: 'Reduces water consumption for landscaping by 50-70% while supporting local ecosystems.',
    implementationDifficulty: 'low',
    costEstimate: 'low',
    benefits: [
      'Conserves water',
      'Supports native wildlife',
      'Reduces maintenance costs',
      'Increases resilience to drought'
    ],
    category: 'biodiversity',
    imageUrl: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const weatherEvents = [
  'Heavy rainfall',
  'Flash flooding',
  'Heat waves',
  'Droughts',
  'Severe storms',
  'Hurricane/Typhoon risk',
  'Sea level rise',
  'Wildfires'
];

export const infrastructureTypes = [
  'Traditional storm drains',
  'Concrete-dominated surfaces',
  'Limited green spaces',
  'Conventional building designs',
  'Standard electrical grid',
  'Traditional water management'
];

export const cityTypes = [
  'Large metropolitan',
  'Medium-sized city',
  'Small town',
  'Coastal city',
  'Inland urban area',
  'Suburban development'
];

export const climateZones = [
  'Tropical',
  'Arid/Desert',
  'Mediterranean',
  'Temperate',
  'Continental',
  'Polar',
  'Subtropical'
];

export const areaSizes = [
  'Small (< 1 sq km)',
  'Medium (1-5 sq km)',
  'Large (5-20 sq km)',
  'Very large (> 20 sq km)'
];