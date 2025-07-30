import { Service, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'process-auditing',
    title: 'Process Auditing',
    description: 'Comprehensive analysis and optimization of your business processes to eliminate inefficiencies and maximize ROI.',
    icon: 'Search',
    benefits: [
      'Identify operational bottlenecks',
      'Reduce costs by up to 30%',
      'Streamline workflows',
      'Improve team productivity'
    ]
  },
  {
    id: 'strategy-development',
    title: 'Strategy Development',
    description: 'Data-driven strategic planning that transforms your vision into actionable roadmaps for sustainable growth.',
    icon: 'Target',
    benefits: [
      'Clear strategic roadmap',
      'Competitive advantage',
      'Market positioning',
      'Long-term growth planning'
    ]
  },
  {
    id: 'operations-management',
    title: 'Operations Management',
    description: 'End-to-end operational excellence through proven methodologies and cutting-edge technology integration.',
    icon: 'Settings',
    benefits: [
      'Operational efficiency',
      'Quality improvement',
      'Cost optimization',
      'Performance metrics'
    ]
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing',
    description: 'Revenue acceleration through strategic sales optimization and data-driven marketing campaigns.',
    icon: 'TrendingUp',
    benefits: [
      'Revenue growth',
      'Lead generation',
      'Sales process optimization',
      'Marketing ROI improvement'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Johnson',
    position: 'CEO',
    company: 'TechFlow Solutions',
    content: 'The strategic insights and operational improvements delivered exceptional results. Our efficiency increased by 40% within 6 months.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Chen',
    position: 'Founder',
    company: 'InnovateLab',
    content: 'Professional, results-driven, and incredibly knowledgeable. The process audit revealed opportunities we never knew existed.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: '3',
    name: 'David Rodriguez',
    position: 'VP Operations',
    company: 'Global Dynamics',
    content: 'Transformed our entire operations framework. The ROI was immediate and the long-term impact has been tremendous.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  }
];