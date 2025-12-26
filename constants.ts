
import { BudgetItem, TimelinePhase } from './types';

export const BUDGET_DATA: BudgetItem[] = [
  {
    id: 'pre-production',
    category: 'Pre-Production (Months 1-2)',
    timeframe: 'Research & Launch',
    total: 12500,
    items: [
      { label: 'Case Vetting & Booking', cost: 4500, description: 'Securing the first 5 core witness agreements' },
      { label: 'MUFON Database Access', cost: 2000, description: 'Priority access and administrative filing' },
      { label: 'Legal/Insurance', cost: 4000, description: 'Production insurance and series contracts' },
      { label: 'Initial Location Scouting', cost: 2000, description: 'Logistics for the Pilot episode sites' }
    ]
  },
  {
    id: 'production',
    category: 'Production (Months 3-10)',
    timeframe: 'The Pilot Season',
    total: 110000,
    items: [
      { label: 'George Anton (Director/Lead)', cost: 30000, description: '$3,000/mo x 10 months - Full Commitment' },
      { label: 'Lead MUFON Investigator / 1st AD', cost: 30000, description: '$3,000/mo x 10 months - Research & Field' },
      { label: 'Secondary Investigator / Assistant', cost: 30000, description: '$3,000/mo x 10 months - Booking & Production' },
      { label: 'Field Logistics & Travel', cost: 20000, description: 'US Travel for core crew of 3 (Flights, Hotels, Meals)' }
    ]
  },
  {
    id: 'post-production',
    category: 'Post-Production (Months 11-12)',
    timeframe: 'Finishing the 45m Pilot',
    total: 18000,
    items: [
      { label: 'Edit & Color (Facility Owned)', cost: 0, description: '$5,000 value contributed as equipment' },
      { label: 'VFX & UFO Recreations', cost: 8000, description: 'Cinematic rendering of witness descriptions' },
      { label: 'Sound Design & Mastering', cost: 5000, description: 'Professional immersive mix' },
      { label: 'Original Score & Licensing', cost: 5000, description: 'Series theme and atmospheric cues' }
    ]
  },
  {
    id: 'equipment',
    category: 'Equipment Value (CONTRIBUTED)',
    total: 50000,
    items: [
      { label: '4K RED/Sony Camera Package', cost: 35000, description: 'Field ready cinematic gear' },
      { label: 'Field Audio & Monitoring', cost: 10000, description: 'Professional wireless & shotgun kits' },
      { label: 'Post-Production Studio', cost: 5000, description: 'Dedicated DaVinci Resolve workstation' }
    ]
  }
];

export const TIMELINE: TimelinePhase[] = [
  {
    month: 'Month 1-2',
    title: 'Research & Booking',
    activities: ['Abductee Vetting', 'UFO Celebrity Outreach', 'Studio Prep', 'Series Mapping']
  },
  {
    month: 'Month 3-6',
    title: 'Field Investigation',
    activities: ['On-Location Shoots', 'Physical Evidence Analysis', 'Investigator Cross-Exam', 'Podcast Promo']
  },
  {
    month: 'Month 7-10',
    title: 'Production Wrap',
    activities: ['Final Witness Filming', 'Expert Wrap-ups', 'Subculture Deep-dives', 'B-Roll']
  },
  {
    month: 'Month 11-12',
    title: 'Pilot Delivery',
    activities: ['Post-Production', 'Distribution Pitching', 'Series Expansion Plan', 'Premiere']
  }
];
