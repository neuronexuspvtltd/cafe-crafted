export interface MenuItem {
  id: string;
  name: string;
  category: 'ALL' | 'HOT COFFEE' | 'COLD COFFEE' | 'BEVERAGES' | 'STARTERS' | 'PIZZA' | 'PASTA' | 'MAINS' | 'DESSERTS';
  price: string;
  description: string;
  image: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isSignature?: boolean;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface ExperienceFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'utensils' | 'sparkles' | 'users' | 'coffee';
  image: string;
}

export interface InstagramReel {
  id: string;
  videoUrl: string;
  thumbnail: string;
  caption: string;
  likes: string;
  views: string;
  duration: string;
  tag: string;
}

export const CAFE_INFO = {
  name: "Cafe Crafted",
  tagline: "More than coffee — it's a craft.",
  subTagline: "Good food. Beautiful spaces. Crafted moments.",
  address: "Opposite Saraswati Hospital, Kagwade Mala, Ichalkaranji, Maharashtra 416115, India",
  city: "Ichalkaranji",
  state: "Maharashtra",
  pincode: "416115",
  landmark: "Opposite Saraswati Hospital",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  instagram: "@cafe_.crafted",
  instagramUrl: "https://www.instagram.com/cafe_.crafted/",
  hours: [
    { days: "Monday – Sunday", time: "10:00 AM – 11:00 PM" },
    { days: "Peak Coffee Hours", time: "04:00 PM – 09:30 PM" }
  ],
  googleMapsUrl: "https://maps.google.com/?q=Cafe+Crafted+Ichalkaranji",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.732483478912!2d74.4552!3d16.6974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc106f23bffffff%3A0x123456789abcdef!2sIchalkaranji!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const MENU_CATEGORIES = [
  'ALL',
  'HOT COFFEE',
  'COLD COFFEE',
  'BEVERAGES',
  'STARTERS',
  'PIZZA',
  'PASTA',
  'MAINS',
  'DESSERTS'
] as const;

export const SIGNATURE_ITEMS: MenuItem[] = [
  {
    id: 'sig-1',
    name: 'Handcrafted Truffle Artisanal Brew',
    category: 'HOT COFFEE',
    price: '₹240',
    description: 'Slow-extracted double espresso layered with velvety steamed whole milk, finished with organic cardamom & cocoa dust.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    isSignature: true,
    tags: ['Artisanal', 'Barista Pick']
  },
  {
    id: 'sig-2',
    name: 'Crafted Wood-Fired Margherita',
    category: 'PIZZA',
    price: '₹390',
    description: '48-hour fermented sourdough crust topped with San Marzano tomato reduction, fresh buffalo mozzarella & sweet basil leaves.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    isSignature: true,
    tags: ['Sourdough', 'Fresh Mozzarella']
  },
  {
    id: 'sig-3',
    name: 'Wild Mushroom Truffle Penne',
    category: 'PASTA',
    price: '₹420',
    description: 'Hand-tossed penne folded into a rich white truffle cream, shiitake mushrooms, aged parmesan & cracked black pepper.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    isSignature: true,
    tags: ['Creamy', 'House Special']
  },
  {
    id: 'sig-4',
    name: 'Iced Spanish Vanilla Latte',
    category: 'COLD COFFEE',
    price: '₹260',
    description: 'Signature espresso pulled fresh over condensed sweet milk, chilled milk & artisanal Madagascar vanilla pod syrup.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isSignature: true,
    tags: ['Customer Favorite', 'Chilled']
  },
  {
    id: 'sig-5',
    name: 'Golden Sourdough Avocado Toast',
    category: 'STARTERS',
    price: '₹310',
    description: 'Toasted artisanal rustic sourdough topped with smashed Hass avocado, chili flakes, microgreens & extra virgin olive drip.',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isSignature: true,
    tags: ['Healthy', 'Artisanal Bread']
  },
  {
    id: 'sig-6',
    name: 'Molten Belgian Chocolate Tart',
    category: 'DESSERTS',
    price: '₹280',
    description: 'Warm 70% dark Belgian cocoa ganache baked in a crisp butter crust, served with vanilla bean whip.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    isSignature: true,
    tags: ['Decadent', 'Dark Chocolate']
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...SIGNATURE_ITEMS,
  {
    id: 'm-1',
    name: 'Classic Espresso Single Origin',
    category: 'HOT COFFEE',
    price: '₹140',
    description: 'Rich, bold single-origin espresso shot with deep caramel undertones and golden crema.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-2',
    name: 'Silky Flat White',
    category: 'HOT COFFEE',
    price: '₹210',
    description: 'Ristretto shot folded under fine micro-foam milk for a dense, velvety coffee aroma.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-3',
    name: 'Hazelnut Cappuccino',
    category: 'HOT COFFEE',
    price: '₹230',
    description: 'Traditional cappuccino infused with toasted hazelnut oil and cocoa dust.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-4',
    name: 'Classic Cold Brew Tonic',
    category: 'COLD COFFEE',
    price: '₹250',
    description: '18-hour steep cold brew pour over sparkling botanical tonic water and fresh orange slice.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-5',
    name: 'Crafted Caramel Frappé',
    category: 'COLD COFFEE',
    price: '₹270',
    description: 'Blended espresso with salted caramel drip, whipped cream and crushed waffle bits.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-6',
    name: 'Artisanal Berry Hibiscus Cooler',
    category: 'BEVERAGES',
    price: '₹220',
    description: 'Steeped Egyptian hibiscus flowers blended with fresh strawberry puree and crushed mint ice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-7',
    name: 'Matcha Green Tea Cloud',
    category: 'BEVERAGES',
    price: '₹260',
    description: 'Ceremonial grade Uji matcha whisked with oat milk and topped with sea salt cream foam.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-8',
    name: 'Crispy Truffle Parmesan Fries',
    category: 'STARTERS',
    price: '₹240',
    description: 'Hand-cut russet fries tossed in white truffle oil, grated parmesan and garlic aioli dip.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-9',
    name: 'Stuffed Garlic Dough Knots',
    category: 'STARTERS',
    price: '₹260',
    description: 'Freshly baked sourdough knots filled with herb butter and melted mozzarella.',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-10',
    name: 'Quattro Formaggi Specialty Pizza',
    category: 'PIZZA',
    price: '₹440',
    description: 'Mozzarella, gorgonzola, smoked cheddar and aged parmesan melted over white cream sauce.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-11',
    name: 'Garden Pesto & Sun-dried Tomato Pizza',
    category: 'PIZZA',
    price: '₹410',
    description: 'House-made basil pesto base, sun-dried tomatoes, toasted pine nuts & feta crumble.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-12',
    name: 'Creamy Arrabbiata Rigatoni',
    category: 'PASTA',
    price: '₹380',
    description: 'Rigatoni cooked al dente in a spicy plum tomato, red pepper flake and fresh cream sauce.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-13',
    name: 'Crafted Mushroom Risotto Bowl',
    category: 'MAINS',
    price: '₹450',
    description: 'Slow-simmered Arborio rice with porcini mushrooms, white wine, thyme & butter glaze.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'm-14',
    name: 'Pistachio Kunafa Cheesecake',
    category: 'DESSERTS',
    price: '₹320',
    description: 'Crispy golden kunafa pastry crust layer topped with rich cream cheese and pistachio drizzle.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-coffee-into-a-cup-40813-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    caption: 'Slow mornings & double espresso pours. Crafted with love in Ichalkaranji ✨☕ #CafeCrafted #Reel',
    likes: '1.2k',
    views: '14.8k',
    duration: '0:15',
    tag: 'Barista Special'
  },
  {
    id: 'reel-2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-baker-putting-a-pizza-in-the-oven-43209-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    caption: '48-Hour fermented sourdough pizza going into high wood-fired heat 🔥🍕',
    likes: '2.4k',
    views: '28.1k',
    duration: '0:18',
    tag: 'Wood-Fired Pizza'
  },
  {
    id: 'reel-3',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-latte-art-40815-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    caption: 'Velvety micro-foam latte art poured fresh every single cup 🍃☕',
    likes: '1.8k',
    views: '19.5k',
    duration: '0:12',
    tag: 'Latte Art'
  },
  {
    id: 'reel-4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-cups-of-coffee-40814-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
    caption: 'Conversations, laughter, and warm ambient lighting. Find your favorite table.',
    likes: '980',
    views: '11.2k',
    duration: '0:20',
    tag: 'Atmosphere'
  },
  {
    id: 'reel-5',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-preparing-a-cold-coffee-drink-42452-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    caption: 'Chilled Spanish Vanilla Latte pour over ice 🧊✨ Tag a coffee lover!',
    likes: '3.1k',
    views: '34.6k',
    duration: '0:14',
    tag: 'Cold Coffee'
  },
  {
    id: 'reel-6',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-coffee-pouring-from-a-machine-42453-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    caption: 'Single origin arabica beans freshly ground & pulled. Taste the craft.',
    likes: '1.5k',
    views: '16.9k',
    duration: '0:16',
    tag: 'Single Origin'
  }
];

export const EXPERIENCE_FEATURES: ExperienceFeature[] = [
  {
    id: 'f-1',
    title: 'Crafted Food',
    subtitle: 'Culinary Intention',
    description: 'Every recipe is slow-cooked, ferment-tested, and plated with artistic precision using locally sourced, fresh ingredients.',
    iconName: 'utensils',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f-2',
    title: 'Beautiful Spaces',
    subtitle: 'Architectural Warmth',
    description: 'Designed for slow mornings, afternoon deep focus, intimate dates, and cozy evening conversations.',
    iconName: 'sparkles',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f-3',
    title: 'Good Company',
    subtitle: 'Community & Connection',
    description: 'A neighborhood sanctuary where friends gather, ideas ignite, and strangers become familiar faces.',
    iconName: 'users',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f-4',
    title: 'Little Moments',
    subtitle: 'Sensory Comfort',
    description: 'The aroma of freshly ground arabica beans, soft acoustics, ambient lighting, and warm hospitalities.',
    iconName: 'coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "Cafe Crafted is easily one of the most stunning spaces in town. The coffee aroma hits you the moment you step in, and their Sourdough Margherita is absolute perfection.",
    author: "Ananya Sharma",
    role: "Regular Visitor & Food Critic",
    rating: 5
  },
  {
    id: 't-2',
    quote: "More than just a café — it really feels like a tranquil sanctuary. The interior design, music, and baristas who remember your usual make every visit special.",
    author: "Rohan Kulkarni",
    role: "Local Architect",
    rating: 5
  },
  {
    id: 't-3',
    quote: "The Spanish Latte paired with their Truffle Penne is my go-to weekend treat. You can truly tell everything here is crafted with passion.",
    author: "Priya Patil",
    role: "Interior Designer",
    rating: 5
  }
];
