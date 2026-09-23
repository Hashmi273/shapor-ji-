export interface RealEstateProject {
  id: string;
  name: string;
  tagline: string;
  city: 'Mumbai' | 'Pune' | 'Bengaluru' | 'Gurugram' | 'Kolkata';
  location: string;
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  typology: string[];
  startingPrice: string;
  carpetArea: string;
  reraNumber: string;
  possessionYear: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  keyHighlights: string[];
  amenities: string[];
  floorPlanType: string;
  featured?: boolean;
}

export const REAL_ESTATE_PROJECTS: RealEstateProject[] = [
  {
    id: 'the-imperial-edge',
    name: 'The Imperial Edge',
    tagline: 'Iconic Ultra-Luxury Sea View Penthouses & Residences',
    city: 'Mumbai',
    location: 'Tardeo, South Mumbai',
    status: 'Ready to Move',
    typology: ['3 BHK', '4 BHK Luxury Suites', 'Duplex Penthouses'],
    startingPrice: '₹12.50 Cr*',
    carpetArea: '1,850 - 3,900 sq.ft.',
    reraNumber: 'P51900000185',
    possessionYear: 'Immediate Possession',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Standing tall over the South Mumbai skyline, The Imperial Edge represents the peak of bespoke vertical luxury. Unhindered views of the Arabian Sea, private elevator vestibules, and temperature-controlled infinity pools.',
    keyHighlights: [
      'Panoramic 270° Arabian Sea and Racecourse Views',
      'Private High-Speed Elevator to Each Residence',
      'Designed by World-Renowned Architect Hafeez Contractor',
      'South Mumbai Elite Pin Code'
    ],
    amenities: ['Sky Infinity Pool', 'Bespoke Concierge 24x7', 'Private Spa & Sauna', 'State-of-the-Art Fitness Center', 'Private Screening Theatre', 'Valet Parking'],
    floorPlanType: 'Custom Ultra-Spacious Layouts',
    featured: true
  },
  {
    id: 'bkc-28',
    name: 'Shapoorji Pallonji BKC 28',
    tagline: 'Intelligently Designed Residences in the Heart of the Financial District',
    city: 'Mumbai',
    location: 'Bandra East / BKC, Mumbai',
    status: 'Under Construction',
    typology: ['2 BHK', '3 BHK Smart Living'],
    startingPrice: '₹2.45 Cr*',
    carpetArea: '680 - 1,020 sq.ft.',
    reraNumber: 'P51800028472',
    possessionYear: 'Dec 2026',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'BKC 28 places you at the epicenter of Mumbai’s premier central business district. Designed for modern corporate leaders and smart investors seeking maximum connectivity, smart home automation, and contemporary elegance.',
    keyHighlights: [
      '5 Minutes from Bandra Kurla Complex (BKC) Financial Hub',
      'Smart Home Voice & App Enabled Automation',
      'Double-Height Grand Entrance Lobby',
      'Rooftop Sky Lounge with Cityscape Views'
    ],
    amenities: ['Sky Garden', 'Co-working Pods', 'EV Charging Bays', 'Modern Gymnasium', 'Multi-tier 24/7 Security'],
    floorPlanType: 'Optimized Zero-Wastage Floor Plan',
    featured: true
  },
  {
    id: 'vicinia-powai',
    name: 'Vicinia Powai',
    tagline: 'Expansive 6.7-Acre Gated Community amidst Powai Hills & Lake',
    city: 'Mumbai',
    location: 'Chandivali / Powai, Mumbai',
    status: 'Ready to Move',
    typology: ['2 BHK', '3 BHK Luxury'],
    startingPrice: '₹2.10 Cr*',
    carpetArea: '720 - 1,280 sq.ft.',
    reraNumber: 'P51800002558',
    possessionYear: 'Ready to Move In',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Surrounded by lush green Powai hills, Vicinia brings resort-style serenity into metropolitan Mumbai. Featuring 8 elegant residential towers spread across 6.7 acres with over 70% open landscape and world-class leisure facilities.',
    keyHighlights: [
      '70% Open Spaces & Designer Landscaping',
      '50,000 sq.ft. Multi-level Signature Clubhouse',
      'Close to Powai Lake, International Airport & Metro Line',
      'Fully Ready Community with 600+ Families Living'
    ],
    amenities: ['Olympic Length Pool', 'Squash & Badminton Courts', 'Banquet Hall', 'Jogging Tracks', 'Kids Adventure Zone'],
    floorPlanType: 'Spacious Vastu Compliant Layouts',
    featured: true
  },
  {
    id: 'northern-lights-thane',
    name: 'Northern Lights Thane',
    tagline: 'Thane’s Tallest Towers with a 4.8-Acre Sky Promenade',
    city: 'Mumbai',
    location: 'Pokhran Road No. 2, Thane West',
    status: 'Under Construction',
    typology: ['2 BHK', '3 BHK High-Rise'],
    startingPrice: '₹1.48 Cr*',
    carpetArea: '590 - 980 sq.ft.',
    reraNumber: 'P51700019864',
    possessionYear: 'Mid 2026',
    heroImage: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Northern Lights is located along Pokhran Road No. 2—the most coveted residential strip in Thane. Offering 60+ curated amenities, sweeping Yeoor Hills views, and exceptional connectivity to the Eastern Express Highway.',
    keyHighlights: [
      '4.8 Acres Land Parcel with 60+ Curated Lifestyle Amenities',
      'Breathtaking Views of Yeoor Hills & Upvan Lake',
      'High-speed Elevators & Double Glazed Soundproof Windows',
      'Direct Connectivity to Eastern Express Highway & Ghodbunder Road'
    ],
    amenities: ['Infinity Sky Deck', 'Cricket Pitch', 'Herb Garden', 'Gymnasium', 'Amphitheatre', 'Meditation Lawn'],
    floorPlanType: 'Sunlit Living Rooms with Wide Balconies',
    featured: true
  },
  {
    id: 'parkwest-bengaluru',
    name: 'Parkwest 2.0 Bengaluru',
    tagline: '46 Acres of Grand Urban Living in Central Bengaluru',
    city: 'Bengaluru',
    location: 'Binnypet, Central Bengaluru',
    status: 'Under Construction',
    typology: ['2 BHK', '3 BHK', '4 BHK Penthouses'],
    startingPrice: '₹1.85 Cr*',
    carpetArea: '950 - 2,450 sq.ft.',
    reraNumber: 'PRM/KA/RERA/1251/310/PR/171015/000277',
    possessionYear: 'Late 2025',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'One of Central Bengaluru’s largest gated residential developments spanning 46 acres. Featuring a 7-acre bio-diversity park, tranquil tree-lined boulevards, a 56,000 sq.ft. luxury club, and effortless reach to MG Road and Majestic.',
    keyHighlights: [
      '46-Acre Integrated Ecosystem in Heart of Bengaluru',
      '7-Acre Biodiversity Park with Native Flora & Bird Habitat',
      '56,000 sq.ft. Clubhouse "Club Uno"',
      '10 Minutes from Metro Station & Central Railway Station'
    ],
    amenities: ['Tennis & Basketball Courts', 'Heated Indoor Swimming Pool', 'Library & Reading Lounge', 'Aerobics Studio', 'Skating Rink'],
    floorPlanType: 'Vast French-Window Residences',
    featured: true
  },
  {
    id: 'golfland-pune',
    name: 'Shapoorji Pallonji Golfland',
    tagline: 'Boutique Golf-Front Residences Overlooking Sahyadri Hills',
    city: 'Pune',
    location: 'Vanaha, Bavdhan, Pune',
    status: 'Newly Launched',
    typology: ['3 BHK', '4 BHK Luxury Suites'],
    startingPrice: '₹1.92 Cr*',
    carpetArea: '1,120 - 2,150 sq.ft.',
    reraNumber: 'P52100030248',
    possessionYear: 'Dec 2027',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set within the massive 1,000-acre Vanaha valley, Golfland offers breathtaking green fairway views, unadulterated air quality, and low-density luxury. Walk to the golf driving range right from your front lobby.',
    keyHighlights: [
      'Overlooking Championship Golf Course Greens & Hills',
      'Clean Air Index & Pristine Natural Valley Setting',
      'Private Terraces with Unobstructed Vistas',
      '15 Minutes from Kothrud & Mumbai-Pune Expressway'
    ],
    amenities: ['Golf Putting Greens', 'Infinity Valley Pool', 'Clubhouse & Fine Dining', 'Trekking Trails', 'Yoga Pavilion'],
    floorPlanType: 'Panoramic Balcony & Dual Master Suites',
    featured: false
  },
  {
    id: 'joyville-hadapsar-pune',
    name: 'Joyville Hadapsar Annexe',
    tagline: 'Mega Township with 35,000 sq.ft. Clubhouse & 60+ Amenities',
    city: 'Pune',
    location: 'Shewalewadi, Hadapsar Annexe, Pune',
    status: 'Under Construction',
    typology: ['1 BHK', '2 BHK', '3 BHK Joy'],
    startingPrice: '₹49.5 Lakhs*',
    carpetArea: '440 - 890 sq.ft.',
    reraNumber: 'P52100026451',
    possessionYear: 'Ready & Under Construction Phases',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Joyville Hadapsar brings affordable luxury backed by Shapoorji Pallonji’s 158-year construction legacy. An aspirational lifestyle complete with central park, open air cinemas, multiple swimming pools, and top schools nearby.',
    keyHighlights: [
      '21 Acres of Planned Township Development',
      '8.8 Acres of Central Open Greens',
      '35,000 sq.ft. Modern Lifestyle Clubhouse',
      '15 Min Drive to Magarpatta IT Park & SP Infocity'
    ],
    amenities: ['Multiple Swimming Pools', 'Open-Air Amphitheatre', 'Senior Citizen Park', 'Multi-sport Courts', 'Crèche & Daycare'],
    floorPlanType: 'Efficient Compact Smart Homes',
    featured: false
  },
  {
    id: 'joyville-sensorium-pune',
    name: 'Joyville Sensorium',
    tagline: 'Waterfront Biophilic Smart Living in Hinjawadi IT Hub',
    city: 'Pune',
    location: 'Hinjawadi Phase 1, Pune',
    status: 'Under Construction',
    typology: ['2 BHK', '3 BHK Sensorium'],
    startingPrice: '₹75 Lakhs*',
    carpetArea: '620 - 940 sq.ft.',
    reraNumber: 'P52100024965',
    possessionYear: '2026',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed around biophilic architecture that integrates oxygen-rich landscape, herbal aroma gardens, and sensory soundscapes. Just minutes from Pune’s prime IT offices in Hinjawadi.',
    keyHighlights: [
      'Sensory Garden with 2.8-Acre Multi-Tier Central Park',
      'Riverside Edge Living in Hinjawadi IT Corridor',
      'Smart Sensor Air & Water Purification Integration',
      'Walking Distance to Tech Parks & Upcoming Metro'
    ],
    amenities: ['Water Pavilion', 'Floating Lounges', 'Infinity Edge Pool', 'Outdoor Gym', 'Reflexology Pathways'],
    floorPlanType: 'Vastu Compliant Natural Light Layouts',
    featured: false
  }
];

export const CITY_FILTERS = ['All Cities', 'Mumbai', 'Pune', 'Bengaluru'] as const;
export const TYPOLOGY_FILTERS = ['All Typologies', '1 BHK', '2 BHK', '3 BHK', '4 BHK+'] as const;
export const STATUS_FILTERS = ['All Statuses', 'Ready to Move', 'Under Construction', 'Newly Launched'] as const;
