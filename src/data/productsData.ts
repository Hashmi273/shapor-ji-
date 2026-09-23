import { REAL_ESTATE_PROJECTS, RealEstateProject } from './realEstateData';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  location: string;
  fragranceFamily: string;
  fragranceNotes: string;
  shortDesc: string;
  detailedDesc: string;
  packSize: string;
  burnTime?: string;
  keyFeatures: string[];
  idealFor: string[];
  badge?: string;
  image: string;
}

export const PRODUCTS_DATA: ProductItem[] = REAL_ESTATE_PROJECTS.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.city + ' Residences',
  location: p.location,
  fragranceFamily: p.status,
  fragranceNotes: p.typology.join(', '),
  shortDesc: p.tagline,
  detailedDesc: p.description,
  packSize: p.startingPrice,
  burnTime: p.possessionYear,
  keyFeatures: p.keyHighlights,
  idealFor: p.amenities,
  badge: p.status,
  image: p.heroImage
}));

export const PRODUCT_CATEGORIES = [
  'All Properties',
  'Mumbai Residences',
  'Pune Residences',
  'Bengaluru Residences',
  'Ready to Move',
  'Under Construction',
  'New Launches'
] as const;

export const FRAGRANCE_FAMILIES = [
  {
    id: 'architecture',
    name: 'Architectural Excellence',
    iconName: 'Building2',
    emoji: '🏛️',
    tagline: '158+ Years of Structural Prowess',
    desc: 'Engineered by Shapoorji Pallonji with meticulous attention to orientation, ventilation, earthquake resistance, and timeless grandeur.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Hafeez Contractor Designs', 'Double Glazed Glass Façades', 'Zero-Wastage Floor Plans']
  },
  {
    id: 'landscape',
    name: 'Biophilic Landscape',
    iconName: 'Trees',
    emoji: '🌿',
    tagline: '70% Open Green Podiums & Bio-parks',
    desc: 'Immersive sensory gardens, native trees, organic herb sanctuaries, and expansive open courtyards designed for holistic mental rejuvenation.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Aroma Herbal Podiums', 'Lush Reflexology Walkways', 'Rainwater Harvesting']
  },
  {
    id: 'luxury-amenities',
    name: 'Signature Clubhouses',
    iconName: 'Waves',
    emoji: '✨',
    tagline: 'Olympic Pools & Sky Decks',
    desc: 'World-class 50,000+ sq.ft. private clubhouses featuring temperature-controlled pools, squash courts, private cinemas, and wellness spas.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Infinity Sky Pools', 'Fine Dining Rooftop Lounges', 'Private Screening Rooms']
  }
];

export { REAL_ESTATE_PROJECTS };
