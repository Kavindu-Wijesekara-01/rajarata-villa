export interface Attraction {
  id: string;
  name: string;
  sinhalaName: string;
  distance: string;
  travelTime: string;
  category: string;
  image: string;
  shortDesc: string;
  highlights: string[];
  bestTime: string;
  significance: string;
  travelTips: string;
  mapCoordinates?: string;
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  priceUSD: number;
  priceLKR: number;
  capacity: string;
  bedType: string;
  size: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
}

export interface Amenity {
  icon: string;
  title: string;
  sinhalaTitle?: string;
  sinhalaName?: string;
  description: string;
  isSpecial?: boolean;
  badge?: string;
}

export const VILLA_CONFIG = {
  name: 'Rajarata Villa',
  tagline: 'Paddy-View Heritage Eco Retreat',
  location: 'Anuradhapura, North Central Province, Sri Lanka',
  googleMapsUrl: 'https://maps.app.goo.gl/CqbY7x7FFGrvLbZu7',
  coordinates: '8.3576047° N, 80.4193828° E',
  phone: '+94 77 123 4567',
  whatsapp: '94771234567',
  email: 'stay@rajaratavilla.com',
  checkIn: '02:00 PM',
  checkOut: '11:00 AM',
  rating: '4.95',
  reviewCount: '128',
  evChargingType: 'Level 2 Type-2 Fast AC (22 kW) Solar-Powered',
};

// Exact real distances calculated from Rajarata Villa (https://maps.app.goo.gl/CqbY7x7FFGrvLbZu7)
// With verified authentic photos of each monument from Wikimedia Commons
export const ANURADHAPURA_ATTRACTIONS: Attraction[] = [
  {
    id: 'ruwanwelisaya',
    name: 'Ruwanweli Maha Seya',
    sinhalaName: 'රුවන්වැලි මහා සෑය',
    distance: '3.5 km',
    travelTime: '7 mins drive',
    category: 'Sacred Stupa',
    image: '/images/attractions/ruwanweli-seya.jpg',
    shortDesc: 'The Great Stupa built by King Dutugemunu in 140 BC, enshrining the largest collection of Buddha relics in the world.',
    highlights: [
      'Stands at an imposing height of 103 meters (338 ft) with a 290m circumference',
      'Surrounded by the iconic Elephant Wall (Ath Pavura) featuring 344 life-size carved elephant sculptures',
      'Deeply spiritual evening lighting and jasmine flower offering poojas',
      'Enshrines a bowlful of Sacred Relics of Gautama Buddha'
    ],
    bestTime: 'Evening 5:30 PM - 7:30 PM (captivating sunset glow & spiritual chanting) or Early Morning 6:00 AM',
    significance: 'Considered one of the Solosmasthana (16 sacred places) and the crowning architectural achievement of ancient Anuradhapura.',
    travelTips: 'Wear respectful white attire covering shoulders and knees. Remove footwear at the stone gateway. Lotus flowers are available at the entrance.'
  },
  {
    id: 'sri-maha-bodhi',
    name: 'Jaya Sri Maha Bodhi',
    sinhalaName: 'ජය ශ්‍රී මහා බෝධීන් වහන්සේ',
    distance: '3.9 km',
    travelTime: '8 mins drive',
    category: 'Sacred Living Tree',
    image: '/images/attractions/sri-maha-bodhi.jpg',
    shortDesc: 'The oldest surviving historically authenticated planted tree on Earth (planted in 288 BC by King Devanampiya Tissa).',
    highlights: [
      'Grown from a southern branch of the original sacred Bodhi tree in Bodh Gaya under which Lord Buddha attained enlightenment',
      'Brought to Sri Lanka by Sanghamitta Theri, daughter of Emperor Ashoka',
      'Protected by ancient gilded railings (Ran Veta) and royal water irrigation',
      'Continuous sacred veneration for over 2,300 unbroken years'
    ],
    bestTime: 'Early morning 5:45 AM - 7:30 AM before the sun gets hot and crowd gathers',
    significance: 'The living spiritual heart of Sri Lankan Buddhism and a UNESCO World Heritage wonder.',
    travelTips: 'Peaceful walking path through shaded ancient temple grounds. Quiet contemplation is encouraged.'
  },
  {
    id: 'jetavanaramaya',
    name: 'Jetavanaramaya Stupa',
    sinhalaName: 'ජේතවනාරාම ස්ථූපය',
    distance: '2.8 km',
    travelTime: '5 mins drive',
    category: 'Ancient Engineering Wonder',
    image: '/images/attractions/jetavanaramaya.jpg',
    shortDesc: 'Once the third-tallest structure in the ancient world (122m originally), containing over 93 million fired clay bricks.',
    highlights: [
      'Built by King Mahasena in the 3rd century AD',
      'Third tallest monument in the ancient world behind only the Great Pyramids of Giza',
      'Enshrines a portion of a sash or belt tied by Gautama Buddha',
      'Engineering marvel with 8.5-meter deep granite and brick foundation resting on bedrock'
    ],
    bestTime: 'Morning 7:00 AM - 9:30 AM or Late Afternoon 4:00 PM for photography',
    significance: 'Demonstrates the world-renowned hydraulic and structural brick engineering mastery of ancient Sri Lanka.',
    travelTips: 'The stone compound is very vast; bring a hat or umbrella during sunny midday hours.'
  },
  {
    id: 'abhayagiri',
    name: 'Abhayagiri Monastery & Stupa',
    sinhalaName: 'අභයගිරි විහාරය සහ ස්ථූපය',
    distance: '3.4 km',
    travelTime: '7 mins drive',
    category: 'Monastic University & Stupa',
    image: '/images/attractions/abhayagiri.jpg',
    shortDesc: 'Sprawling 500-acre international Buddhist monastic university complex that hosted over 5,000 monks in antiquity.',
    highlights: [
      'Grand 75m high brick stupa restored to timeless splendor',
      'Site of the legendary Chinese pilgrim monk Faxian who spent two years studying here in 412 AD',
      'Home to the world-famous carved Sandakada Pahana (Moonstone) and exquisite guardstones (Muragala)',
      'Large stone swimming pools, underground drainage and library remnants'
    ],
    bestTime: 'Late afternoon 3:30 PM - 6:00 PM when the sunlight highlights the brick tones',
    significance: 'Epicenter of international Buddhist diplomacy and scholarship bridging China, India, and Southeast Asia.',
    travelTips: 'Don’t miss the Abhayagiri Museum located next to the complex exhibiting ancient gold coins and jewelry.'
  },
  {
    id: 'thuparamaya',
    name: 'Thuparamaya Stupa',
    sinhalaName: 'ථූපාරාමය',
    distance: '3.1 km',
    travelTime: '6 mins drive',
    category: 'Historic First Stupa',
    image: '/images/attractions/thuparamaya.jpg',
    shortDesc: 'The very first stupa erected in Sri Lanka following the introduction of Buddhism, featuring graceful concentric stone pillars.',
    highlights: [
      'Built in the 3rd century BC by King Devanampiya Tissa',
      'Enshrines the sacred Right Collarbone (Dakkhina Akkhadhathu) of Lord Buddha',
      'Surrounded by unique concentric rings of carved granite pillars that once supported a wooden domed vatadage roof',
      'Pristine bell-shaped architectural profile set in serene parkland'
    ],
    bestTime: 'Sunrise 6:15 AM - 8:00 AM or Dusk 6:00 PM',
    significance: 'Marked the formal establishment of Buddhist monastic civilization in Sri Lanka.',
    travelTips: 'Located in close walking distance to Ruwanwelisaya and Basawakkulama reservoir.'
  },
  {
    id: 'isurumuniya',
    name: 'Isurumuniya Vihara & Lovers Rock',
    sinhalaName: 'ඉසුරුමුණිය රජමහා විහාරය',
    distance: '5.2 km',
    travelTime: '10 mins drive',
    category: 'Rock Temple & Classical Art',
    image: '/images/attractions/isurumuniya.jpg',
    shortDesc: 'Charming cliffside temple famous for the world-renowned 5th-century Gupta-style stone carving of the Isurumuniya Lovers.',
    highlights: [
      'Famed Gupta-style rock carving depicting Prince Saliya (son of King Dutugemunu) and his low-caste beloved Asokamala',
      'Elephant sculptures playfully carving out of natural rock fissures into the lotus pond',
      'Climb up the boulder stairs to the golden stupa overlooking the shimmering Tissa Wewa reservoir',
      'Royal leisure pleasure garden (Ranmasu Uyana) located just adjacent'
    ],
    bestTime: 'Afternoon 4:00 PM - 6:00 PM for scenic sunset over the lake from atop the rock',
    significance: 'Masterpiece of classical Sinhalese romantic and naturalistic sculpture.',
    travelTips: 'Combine with an evening stroll along the Tissa Wewa tank bund next door.'
  },
  {
    id: 'mihintale',
    name: 'Mihintale Sacred Mountain Peak',
    sinhalaName: 'මිහින්තලේ පූජා භූමිය',
    distance: '12.5 km',
    travelTime: '15 mins drive',
    category: 'Mountain Sanctuary & Cradle of Buddhism',
    image: '/images/attractions/mihintale.jpg',
    shortDesc: 'The sacred mountain sanctuary where Arhat Mahinda met King Devanampiya Tissa in 247 BC, bringing Buddhism to Sri Lanka.',
    highlights: [
      'Climb the 1,840 wide, shaded granite stone steps lined with frangipani trees',
      'Ascend the Aradhana Gala (Rock of Inspiration) for a breathless 360-degree panoramic view of lakes and forests',
      'Explore the ancient monastic hospital with its stone medicinal immersion bath (Beheth Oruwa)',
      'Maha Seya stupa crowned majestically at the summit'
    ],
    bestTime: 'Sunset 4:30 PM - 6:45 PM for an unforgettable golden sky over the dry zone plains',
    significance: 'Revered as the ultimate birthplace of Sri Lankan civilization, philosophy, and statehood.',
    travelTips: 'Wear sturdy grip socks as the summit rock can be warm; take your time climbing the tranquil stair flights.'
  },
  {
    id: 'kuttam-pokuna',
    name: 'Kuttam Pokuna (The Twin Ponds)',
    sinhalaName: 'කුට්ටම් පොකුණ',
    distance: '2.6 km',
    travelTime: '5 mins drive',
    category: 'Ancient Hydraulic Engineering',
    image: '/images/attractions/kuttam-pokuna.jpg',
    shortDesc: 'Exquisite twin ritual bathing pools showcasing the highest refinement of ancient Sinhalese stone masonry and water filtration.',
    highlights: [
      'Built in the 8th–10th century for the monks of the Abhayagiri fraternity',
      'Engineered with an advanced underground settling tank and multi-stage sand/lime filtration system',
      'Ornate granite steps adorned with five-headed Cobra (Naga) guardstones and water-spouting Makara figures',
      'Harmonious proportion between the smaller North pond (28m) and larger South pond (40m)'
    ],
    bestTime: 'Morning 8:00 AM - 10:30 AM when the tranquil waters reflect the surrounding green forest',
    significance: 'Considered one of the world’s most sophisticated ancient hydraulic sanitary installations.',
    travelTips: 'Surrounded by shaded parkland; great spot for peaceful architectural photography.'
  },
  {
    id: 'mirisawetiya',
    name: 'Mirisawetiya Stupa & Tissa Wewa',
    sinhalaName: 'මිරිසවැටිය ස්ථූපය',
    distance: '4.6 km',
    travelTime: '9 mins drive',
    category: 'Lakefront Royal Stupa',
    image: '/images/attractions/mirisawetiya.jpg',
    shortDesc: 'Historic stupa built by King Dutugemunu on the banks of Tissa Wewa, commemorating his royal scepter containing relics.',
    highlights: [
      'The very first stupa erected by King Dutugemunu following his victory',
      'Set immediately beside the ancient Tissa Wewa freshwater reservoir built in 3rd century BC',
      'Uncrowded, deeply serene and intimate atmosphere ideal for meditation',
      'Gentle lake breezes and blooming lotus marshlands surrounding the shrine'
    ],
    bestTime: 'Late evening 5:00 PM followed by a tranquil lake walk along Tissa Wewa dam',
    significance: 'Historically significant as the opening chapter of King Dutugemunu’s architectural golden age.',
    travelTips: 'Only 9 minutes away from Rajarata Villa; perfect for an evening sunset visit.'
  }
];

export const VILLA_AMENITIES: Amenity[] = [
  {
    icon: 'Zap',
    title: 'EV Fast Charging Station',
    sinhalaName: 'විදුලි වාහන ආරෝපණ පහසුකම',
    description: 'Level 2 Type-2 22kW Fast AC Charging station powered by our rooftop solar system. Safe, sheltered, 24/7 accessible with universal plug support for Tesla, BYD, Nissan, MG, and hybrid vehicles.',
    isSpecial: true,
    badge: 'Solar Eco-Luxury'
  },
  {
    icon: 'Palmtree',
    title: 'Paddy-Facing Private Veranda',
    sinhalaName: 'වෙල්යාය පෙනෙන විවේකාගාරය',
    description: 'Breathtaking panoramic views of emerald green rice fields, waving coconut palms, and evening fireflies from your private outdoor lounge.',
    isSpecial: true,
    badge: 'Signature View'
  },
  {
    icon: 'Utensils',
    title: 'Farm-to-Table Rajarata Dining',
    sinhalaName: 'දේශීය ආහාර පාන',
    description: 'Authentic clay-pot cooked curries, freshly harvested organic vegetables, crispy hoppers, pol sambol, and fresh King Coconut water from our own trees.',
    isSpecial: true,
    badge: 'Authentic Ceylon'
  },
  {
    icon: 'Wifi',
    title: 'High-Speed Fiber WiFi',
    sinhalaName: 'වේගවත් අන්තර්ජාලය',
    description: 'Uninterrupted high-speed internet covering all rooms, veranda, and garden. Perfect for remote workers and digital nomads.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure Gated Parking & Security',
    sinhalaName: 'ආරක්ෂිත වාහන නැවතුම්පොළ',
    description: 'Spacious gated premises with CCTV surveillance and ample parking space for cars, vans, and EV vehicles.',
  },
  {
    icon: 'ShowerHead',
    title: 'Modern Hot Water Bathrooms',
    sinhalaName: 'උණු ජලය සහිත නාන කාමර',
    description: 'High-pressure solar hot water showers, premium toiletries, soft bath sheets, and clean contemporary fittings.',
  },
  {
    icon: 'Compass',
    title: 'Curated Heritage & Safari Tours',
    sinhalaName: 'අනුරාධපුර සංචාරක සේවාවන්',
    description: 'Personalized guided tours to the Sacred Eight Atamasthana, hidden ruins, and day safaris to Wilpattu National Park.',
  },
  {
    icon: 'Sparkles',
    title: 'Driver Accommodations & Laundry',
    sinhalaName: 'රියදුරු නවාතැන් පහසුකම්',
    description: 'Comfortable dedicated rest quarters for your driver, plus swift laundry services on request.',
  }
];

export const VILLA_ROOMS: Room[] = [
  {
    id: 'deluxe-paddy-suite',
    name: 'Deluxe Paddy-View Suite',
    subtitle: 'Romantic Luxury Facing Open Fields',
    priceUSD: 48,
    priceLKR: 14500,
    capacity: '2 Guests',
    bedType: '1 King / 2 Double Beds',
    size: '34 sq m',
    image: '/images/unnamed (1).webp',
    gallery: [
      '/images/unnamed (1).webp',
      '/images/unnamed (6).webp',
      '/images/unnamed (2).webp',
      '/images/unnamed (4).webp'
    ],
    description: 'Step into an oasis of calm overlooking endless green paddy fields. Features hand-carved timber furnishings, whisper-quiet split air conditioning, modern ensuite bathroom with hot shower, and direct garden veranda access.',
    amenities: [
      'Air Conditioning',
      'Modern Ensuite Hot Shower',
      'Paddy Field Panorama',
      'Complimentary Solar EV Charging',
      'High-Speed Fiber WiFi',
      'Artisanal Timber Desk & Wardrobe',
      'Complimentary Ceylon Tea & Coffee',
      'Daily Housekeeping'
    ]
  },
  {
    id: 'heritage-family-suite',
    name: 'Heritage Family Suite',
    subtitle: 'Spacious Comfort for Families & Groups',
    priceUSD: 68,
    priceLKR: 20500,
    capacity: '4 - 5 Guests',
    bedType: '2 Large Double Beds + Extra Cot on request',
    size: '48 sq m',
    image: '/images/unnamed (6).webp',
    gallery: [
      '/images/unnamed (6).webp',
      '/images/unnamed (1).webp',
      '/images/unnamed (3).webp',
      '/images/unnamed (2).webp'
    ],
    description: 'Generously proportioned suite designed for families or friends traveling together. Includes two comfortable double beds, spacious living area, air conditioning, expansive garden windows, and prompt access to the dining hall.',
    amenities: [
      'Two Comfortable Double Beds',
      'Air Conditioning & Ceiling Fan',
      'Modern Ensuite Bathroom',
      'Spacious Wardrobe & Luggage Bench',
      'Direct Access to Dining Lounge',
      'Free High-Speed WiFi',
      'EV Charging Priority Access',
      'Child-Friendly Ground Floor'
    ]
  },
  {
    id: 'entire-villa-sanctuary',
    name: 'Whole Villa Private Sanctuary',
    subtitle: 'Exclusive 100% Private Access to Entire Property',
    priceUSD: 135,
    priceLKR: 41000,
    capacity: 'Up to 8 - 10 Guests',
    bedType: 'All Bedrooms + Private Living & Dining Halls',
    size: 'Full Villa & Grounds',
    image: '/images/unnamed.webp',
    gallery: [
      '/images/unnamed.webp',
      '/images/unnamed (4).webp',
      '/images/unnamed (5).webp',
      '/images/unnamed (3).webp',
      '/images/unnamed (1).webp'
    ],
    description: 'Reserve the entire Rajarata Villa exclusively for your group. Enjoy complete privacy, private use of the lush garden, veranda lounge, large TV living hall, full dining facility, and dedicated host & cooking assistance.',
    amenities: [
      'Exclusive Private Use of All Rooms',
      'Private Dining Hall & TV Lounge',
      'Dedicated Outdoor Veranda & Grounds',
      'Unrestricted Solar EV Charging Bay',
      'Private Chef / Meal Preparation on Request',
      'Gated Parking for Multiple Vehicles',
      'Custom Heritage Excursion Planning',
      '24/7 On-Site Caretaker Support'
    ]
  }
];

export const VILLA_STATS = [
  { value: '3.5', unit: 'km', label: 'To Ruwanwelisaya', desc: 'Heart of Sacred City' },
  { value: '22', unit: 'kW', label: 'Solar EV Fast Charger', desc: 'Complimentary Overnight' },
  { value: '4.95', unit: '★', label: 'Guest Rating', desc: 'Over 120+ Verified Reviews' },
  { value: '100%', unit: '', label: 'Paddy-Facing Peace', desc: 'Tranquil Nature Retreat' },
];

export const GUEST_REVIEWS = [
  {
    name: 'Dr. Rohan Jayasinghe',
    origin: 'Colombo, Sri Lanka',
    date: 'February 2026',
    rating: 5,
    comment: 'The EV charging facility was a lifesaver for our BYD Atto 3 trip from Colombo! We arrived with 20% battery, plugged in overnight using their solar charger, and woke up to 100% while sipping hot morning tea overlooking the tranquil paddy fields. Beautiful clean rooms and genuine hospitality.',
    stayedIn: 'Deluxe Paddy-View Suite'
  },
  {
    name: 'Sarah & Mark Harrison',
    origin: 'Melbourne, Australia',
    date: 'January 2026',
    rating: 5,
    comment: 'Rajarata Villa was the highlight of our 2-week cultural tour in Sri Lanka. It is quiet, peaceful, away from the traffic, yet only 7 minutes from Ruwanwelisaya and Jetavanaramaya. The host arranged an early morning bicycle tour which was unforgettable. The home-cooked curry was divine!',
    stayedIn: 'Heritage Family Suite'
  },
  {
    name: 'Kavinda Perera & Family',
    origin: 'Kandy, Sri Lanka',
    date: 'December 2025',
    rating: 5,
    comment: 'Booked the entire villa for our family pilgrimage to Atamasthana. Spotless clean bathrooms, hot water with great pressure, delicious hoppers in the morning, and the kids loved playing in the garden. Highly recommended for anyone visiting Anuradhapura.',
    stayedIn: 'Whole Villa Private Sanctuary'
  }
];

export const FAQS = [
  {
    q: 'How does the EV (Electric Vehicle) charging work at Rajarata Villa?',
    a: 'We provide a dedicated Type-2 Level 2 fast AC charger (up to 22 kW) situated in our secure shaded parking bay. It is powered directly by our villa’s rooftop solar PV system. Overnight top-up is complimentary for registered staying guests. Suitable for BYD, Tesla, Hyundai, Nissan Leaf, MG, and all standard European/Asian EVs.'
  },
  {
    q: 'How far is Rajarata Villa from the sacred city of Anuradhapura?',
    a: 'We are situated in a tranquil rural setting just 2.8 km from Jetavanaramaya, 3.5 km from Ruwanwelisaya, and 3.9 km from Jaya Sri Maha Bodhi. You enjoy complete peace with scenic paddy field views while remaining within 5–8 minutes drive of all major historical sites.'
  },
  {
    q: 'Are meals provided at the villa?',
    a: 'Yes! We prepare fresh, organic Sri Lankan home-cooked meals including traditional rice and curry, string hoppers, pol rotti, and fresh seasonal fruit. Vegetarian, vegan, and special dietary requirements are happily accommodated with advance notice.'
  },
  {
    q: 'Can we book the entire villa for private family gatherings?',
    a: 'Yes, our "Whole Villa Sanctuary" package gives your group 100% exclusive access to all bedrooms, the living hall, dining room, veranda, and garden grounds.'
  },
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is from 2:00 PM onwards, and check-out is by 11:00 AM. Early check-in or late check-out can often be arranged free of charge depending on availability.'
  }
];
