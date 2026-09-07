export interface ProductItem {
  id: string;
  name: string;
  category: string;
  fragranceFamily: string;
  fragranceNotes: string;
  shortDesc: string;
  detailedDesc: string;
  packSize: string; // Editable placeholder
  burnTime?: string;
  keyFeatures: string[];
  idealFor: string[];
  badge?: string;
  image: string;
}

export const PRODUCT_CATEGORIES = [
  'All Products',
  'Premium Agarbatti',
  'Sandalwood Agarbatti',
  'Rose Agarbatti',
  'Jasmine Agarbatti',
  'Mogra Agarbatti',
  'Lavender Agarbatti',
  'Chandan Agarbatti',
  'Masala Agarbatti',
  'Premium Incense',
  'Incense Cones'
] as const;

export const FRAGRANCE_FAMILIES = [
  {
    id: 'rose',
    name: 'Rose (Gulab)',
    iconName: 'Flower2',
    emoji: '🌹',
    tagline: 'Fresh Damask Rose + Incense Aroma',
    desc: 'Crafted with authentic fresh Damask rose oil and aromatic incense sticks, delivering an uplifting and refreshing floral fragrance.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Desi Gulab Petals', 'Morning Dew', 'Warm Musk Undertone']
  },
  {
    id: 'jasmine',
    name: 'Jasmine (Chameli)',
    iconName: 'Flower',
    emoji: '🌸',
    tagline: 'Sweet Night Jasmine + Incense Sticks',
    desc: 'Enriched with natural Jasmine floral extracts and pure aromatic herbs, creating an enchanting and blissful atmosphere.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Night-Blooming Jasmine', 'Sweet White Flora', 'Honeyed Amber']
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood (Chandan)',
    iconName: 'TreePine',
    emoji: '🌿',
    tagline: 'Mysore Sandalwood + Sacred Incense',
    desc: 'Formulated with pure sandalwood extract and natural tree gums, filling your prayer room with timeless divine tranquility.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Mysore Sandalwood', 'Sacred Herbs', 'Warm Balsamic Resin']
  },
  {
    id: 'mogra',
    name: 'Mogra (Bela)',
    iconName: 'Flower2',
    emoji: '🌼',
    tagline: 'Traditional Mogra Garland + Incense',
    desc: 'The auspicious aroma of fresh Arabian Jasmine (Mogra) that dispels negative energy and welcomes festive joy.',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Fresh Mogra Buds', 'Dewy Greenery', 'Classic Temple Floral']
  },
  {
    id: 'lavender',
    name: 'Lavender (French)',
    iconName: 'Sparkles',
    emoji: '💜',
    tagline: 'Botanical Lavender + Calming Incense',
    desc: 'A calming botanical blend of French Lavender and soothing herbs, ideal for unwinding, yoga sessions, and peaceful sleep.',
    image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['French Lavender', 'Bergamot Hint', 'Calming Herbal Moss']
  },
  {
    id: 'chandan',
    name: 'Chandan & Dhoop',
    iconName: 'Flame',
    emoji: '🪔',
    tagline: 'Temple Chandan Paste + Sambrani Dhoop',
    desc: 'Deep spiritual formulation of sacred Chandan, Sambrani, and Loban for morning aarti, deep meditation, and temple rituals.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
    popularNotes: ['Temple Chandan Paste', 'Natural Benzoin Loban', 'Sacred Hawan Gums']
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'premium-agarbatti',
    name: 'Signature Collection Premium Agarbatti',
    category: 'Premium Agarbatti',
    fragranceFamily: 'Woody & Floral',
    fragranceNotes: 'Mysore Sandalwood, Rare Natural Resins, Delicate Flora',
    shortDesc: 'Handcrafted luxury incense sticks with elegant packaging, formulated for daily pooja, meditation, and long-lasting home aroma.',
    detailedDesc: 'Our Signature Collection Premium Agarbatti delivers a harmonious blend of precious woods, natural resin powders, and essential fragrance oils. It burns with a steady, gentle fragrant smoke that creates an atmosphere of peace and auspicious positivity.',
    packSize: 'Standard Box Pack (approx. 50 sticks / customizable)',
    burnTime: 'Approx. 45-50 mins per stick',
    keyFeatures: [
      'Authentic long-lasting fragrance notes',
      'Smooth, steady burning with uniform aromatic smoke',
      'Ideal for morning rituals, meditation, and evening relaxation',
      'Moisture-protective inner pouch for fragrance retention'
    ],
    idealFor: ['Pooja & Prayer', 'Meditation', 'Living Rooms', 'Spiritual Spaces'],
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'sandalwood-agarbatti',
    name: 'Pure Mysore Sandalwood Agarbatti',
    category: 'Sandalwood Agarbatti',
    fragranceFamily: 'Woody',
    fragranceNotes: 'Authentic Sandalwood Wood Extracts, Warm Amber, Soft Resins',
    shortDesc: 'A rich, soothing sandalwood incense crafted with natural extracts for quiet prayer, mandir rituals, and deep tranquility.',
    detailedDesc: 'Crafted to celebrate the revered aroma of Indian Chandan. This sandalwood agarbatti releases a warm, comforting woody scent that soothes the senses and establishes a deeply spiritual, meditative aura.',
    packSize: 'Standard Box Pack (approx. 50 sticks / customizable)',
    burnTime: 'Approx. 45-50 mins per stick',
    keyFeatures: [
      'Pure warm sandalwood fragrance profile',
      'Clean burning bamboo stick with non-irritating smoke',
      'Fosters peaceful focus during devotional prayer',
      'Traditional gold-embossed carton packaging'
    ],
    idealFor: ['Temple & Pooja Room', 'Meditation', 'Stress Relief', 'Daily Devotion'],
    badge: 'Classic Favorite',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'rose-agarbatti',
    name: 'Divine Desi Gulab (Rose) Agarbatti',
    category: 'Rose Agarbatti',
    fragranceFamily: 'Floral',
    fragranceNotes: 'Fresh Rose Petals, Natural Floral Binders, Sweet Undertones',
    shortDesc: 'Captivating fragrance of fresh Indian roses that uplifts the spirit, dispels stale room odors, and brings joyful floral warmth.',
    detailedDesc: 'Infused with the enchanting aroma of freshly picked morning roses. This incense creates a welcoming floral atmosphere, perfect for evening prayers, family gatherings, and refreshing your living spaces.',
    packSize: 'Standard Box Pack (approx. 50 sticks / customizable)',
    burnTime: 'Approx. 45 mins per stick',
    keyFeatures: [
      'Authentic fresh Gulab petal fragrance',
      'Long-lasting lingering floral aroma',
      'Crafted with premium aromatic extracts',
      'Aroma-sealed inner pouch'
    ],
    idealFor: ['Everyday Home Freshening', 'Evening Aarti', 'Festivals', 'Gifting'],
    badge: 'Floral Delight',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'jasmine-agarbatti',
    name: 'Night Jasmine (Chameli) Agarbatti',
    category: 'Jasmine Agarbatti',
    fragranceFamily: 'Floral',
    fragranceNotes: 'Night-blooming Jasmine, White Florals, Subtle Honey Note',
    shortDesc: 'Intoxicatingly sweet and blissful white floral incense sticks that welcome positive energy and serene freshness into your home.',
    detailedDesc: 'Capturing the exotic essence of Indian Chameli blossoms. Its sweet, refined floral aroma diffuses smoothly across large rooms, helping you unwind and relax in a tranquil sanctuary.',
    packSize: 'Standard Box Pack (approx. 50 sticks / customizable)',
    burnTime: 'Approx. 45 mins per stick',
    keyFeatures: [
      'Rich night-blooming jasmine floral bouquet',
      'Smooth, continuous diffusion throughout rooms',
      'Crafted with quality non-toxic natural bases',
      'Protective moisture-resistant packaging'
    ],
    idealFor: ['Living Rooms', 'Evening Rituals', 'Celebrations', 'Relaxation'],
    badge: 'Popular Choice',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mogra-agarbatti',
    name: 'Auspicious Mogra (Bela) Agarbatti',
    category: 'Mogra Agarbatti',
    fragranceFamily: 'Floral',
    fragranceNotes: 'Fresh Indian Mogra Buds, Green Notes, Auspicious Floral Flora',
    shortDesc: 'The traditional sacred aroma of freshly strung Mogra garlands, bringing divine blessings and celebration into your home.',
    detailedDesc: 'Mogra is an auspicious floral emblem in Indian devotion. Our Auspicious Mogra Agarbatti brings the authentic fragrance of fresh blossoms into your daily morning pooja and festive rituals.',
    packSize: 'Standard Box Pack (approx. 50 sticks / customizable)',
    burnTime: 'Approx. 45 mins per stick',
    keyFeatures: [
      'Authentic fresh Mogra blossom fragrance',
      'Bright, uplifting aroma that dispels negative energy',
      'Consistent burn rate with gentle smoke diffusion',
      'Traditional festive box packaging'
    ],
    idealFor: ['Morning Pooja', 'Festivals & Weddings', 'Home Fragrance', 'Diwali Celebrations'],
    badge: 'Festive Classic',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'lavender-agarbatti',
    name: 'Calming French Lavender Agarbatti',
    category: 'Lavender Agarbatti',
    fragranceFamily: 'Fresh & Botanical',
    fragranceNotes: 'French Lavender Sprigs, Bergamot, Soft Herbal Base',
    shortDesc: 'A soothing botanical lavender incense designed to ease daily stress, encourage restful sleep, and set a peaceful yoga ambiance.',
    detailedDesc: 'Combining the natural serenity of French Lavender with soothing herbal extracts. Perfect for lighting during evening meditation, reading, or yoga practice to create a serene sanctuary.',
    packSize: 'Standard Box Pack (approx. 50 sticks / customizable)',
    burnTime: 'Approx. 45 mins per stick',
    keyFeatures: [
      'Soothing botanical French lavender profile',
      'Ideal for stress relief, yoga, and calm meditation',
      'Gentle aromatic smoke with soft diffusion',
      'Sleek modern aroma-lock carton'
    ],
    idealFor: ['Yoga & Wellness', 'Bedrooms', 'Quiet Reading Spaces', 'Stress Relief'],
    badge: 'Relax & Unwind',
    image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'chandan-agarbatti',
    name: 'Sacred Temple Chandan Agarbatti',
    category: 'Chandan Agarbatti',
    fragranceFamily: 'Spiritual',
    fragranceNotes: 'Traditional Chandan Paste, Sacred Herbs, Balsamic Resins',
    shortDesc: 'Traditional temple-style Chandan incense formulated for sacred rituals, peaceful meditation, and spiritual focus.',
    detailedDesc: 'Experience the sacred calm of Indian temples. Our Sacred Chandan Agarbatti blends authentic sandalwood paste aroma with sacred herbal resins, purifying the atmosphere and preparing the mind for prayer.',
    packSize: 'Standard Box Pack (approx. 60 sticks / customizable)',
    burnTime: 'Approx. 45-50 mins per stick',
    keyFeatures: [
      'Temple-style Chandan and sacred dhoop aroma',
      'Cleanses and elevates positive spiritual vibrations',
      'Low residue bamboo stick with smooth burn',
      'Carefully balanced fragrance intensity'
    ],
    idealFor: ['Temple & Pooja Room', 'Meditation Centers', 'Hawan & Rituals', 'Spiritual Practice'],
    badge: 'Spiritual Favorite',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'masala-agarbatti',
    name: 'Heritage Hand-Rolled Masala Agarbatti',
    category: 'Masala Agarbatti',
    fragranceFamily: 'Heritage Masala',
    fragranceNotes: 'Rare Tree Gums, Natural Resins, Spiced Woods, Aromatic Roots',
    shortDesc: 'Artisanal hand-rolled masala incense coated with rich herbal resins for a deep, lingering traditional heritage aroma.',
    detailedDesc: 'Created using time-honored artisanal masala rolling techniques. Natural tree gums, powdered resins, and aromatic herbs are hand-rolled onto bamboo sticks, producing a slow, rich, and deeply fragrant burn.',
    packSize: 'Artisanal Pack (approx. 35 hand-rolled sticks / customizable)',
    burnTime: 'Approx. 55-60 mins per stick',
    keyFeatures: [
      'Hand-rolled artisanal masala formulation',
      'Rich, long-lasting resinous fragrance diffusion',
      'Contains authentic herbal powders and sacred resins',
      'Extra-long burn duration'
    ],
    idealFor: ['Temples', 'Deep Meditation', 'Festive Hawans', 'Heritage Connoisseurs'],
    badge: 'Artisanal Reserve',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'premium-incense',
    name: 'Royal Heritage Incense Luxury Gift Box',
    category: 'Premium Incense',
    fragranceFamily: 'Curated Assortment',
    fragranceNotes: 'Assorted (Sandalwood, Rose, Jasmine, Chandan & Masala)',
    shortDesc: 'An embossed luxury presentation box containing our finest traditional incense sticks, ideal for festive celebrations and gifting.',
    detailedDesc: 'The ultimate aromatic gift set. Encased in an embossed gold and maroon presentation box with individual fragrance sleeves, this luxury collection lets you and your loved ones experience a spectrum of divine fragrances.',
    packSize: 'Luxury 5-in-1 Assortment Box (approx. 150 sticks total / customizable)',
    burnTime: 'Approx. 45 mins per stick',
    keyFeatures: [
      '5 distinct premium fragrance variants in one box',
      'Embossed presentation box with gold foil accents',
      'Includes brass incense holder inside (customizable)',
      'Ideal for Diwali, wedding, and corporate gifting'
    ],
    idealFor: ['Diwali & Festive Gifting', 'Corporate Gifting', 'Wedding Favors', 'Fragrance Discovery'],
    badge: 'Luxury Gift Set',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'incense-cones',
    name: 'Pure Sambrani & Loban Dhoop Incense Cones',
    category: 'Incense Cones',
    fragranceFamily: 'Spiritual Resin',
    fragranceNotes: 'Natural Benzoin Sambrani, Pure Loban, Frankincense Gum',
    shortDesc: 'Aromatic dhoop incense cones that release rich fragrant smoke trails, purifying home energy and dispelling negativity.',
    detailedDesc: 'Sambrani dhoop cones are a traditional staple of Indian energy cleansing. Place on a heat-safe plate or diya and experience thick, fragrant, resinous smoke that sanctifies your home and brings deep peace.',
    packSize: 'Box of 30 Cones with ceramic burning stand',
    burnTime: 'Approx. 30-35 mins per cone',
    keyFeatures: [
      'Pure natural Sambrani & Loban resin extracts',
      'Cleanses home energy and creates positive vibrations',
      'Rich, warm, balsamic aromatic smoke trail',
      'Includes safety burner stand'
    ],
    idealFor: ['Housewarming (Griha Pravesh)', 'Evening Aarti', 'Friday Prayers', 'Energy Cleansing'],
    badge: 'Energy Purifier',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=900&q=80'
  }
];
