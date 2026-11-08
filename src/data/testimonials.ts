export interface Testimonial {
  id: string;
  name: string;
  age: number;
  role: string;
  location: string;
  category: "Sugar Mummy" | "Sugar Daddy" | "LGBT" | "Diaspora";
  avatar: string;
  rating: number;
  story: string;
  verifiedDate: string;
  perks: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Emeka O.",
    age: 26,
    role: "Software Developer",
    location: "Victoria Island, Lagos, Nigeria",
    category: "Sugar Mummy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "I was skeptical at first, but within 48 hours of contacting Afro-Connect on WhatsApp, I was introduced to Chief Mrs. Folake in Victoria Island. She helped sponsor my tech hub startup and we share an amazing mutual connection. 100% genuine agency.",
    verifiedDate: "October 2026",
    perks: "₦950,000/month upkeep + Tech seed funding"
  },
  {
    id: "test-2",
    name: "Kofi M.",
    age: 29,
    role: "Fitness Coach",
    location: "Airport Residential, Accra, Ghana",
    category: "Sugar Mummy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "Afro-Date Agency is real and discreet. Connected with a lovely executive mummy in Airport Residential Area. The support allowance is consistent and everything is kept strictly private as promised.",
    verifiedDate: "September 2026",
    perks: "GH₵12,000 monthly allowance + Luxury apartment"
  },
  {
    id: "test-3",
    name: "Chidinma N.",
    age: 24,
    role: "Graduate Student & Model",
    location: "Maitama / Bwari, Abuja, Nigeria",
    category: "Sugar Daddy",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "Getting a generous Sugar Daddy who respects boundaries seemed impossible until I registered here. My tuition, wardrobe and upkeep in Abuja are fully taken care of. God bless the team.",
    verifiedDate: "September 2026",
    perks: "₦1,200,000/month allowance + Tuition fully covered"
  },
  {
    id: "test-4",
    name: "Lerato D.",
    age: 31,
    role: "Fashion Boutique Owner",
    location: "Sandton, Johannesburg, South Africa",
    category: "Sugar Daddy",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "I joined looking for a companion who matches my busy lifestyle. Afro-Connect matched me with a high-profile mining executive from Sandton. Professional, respectful, and completely safe.",
    verifiedDate: "August 2026",
    perks: "R35,000 monthly support + Overseas vacations"
  },
  {
    id: "test-5",
    name: "David B.",
    age: 27,
    role: "Civil Engineering Graduate",
    location: "Old GRA, Port Harcourt, Nigeria",
    category: "Sugar Mummy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "Connected with an oil sector executive lady in Old GRA within 3 days. The CAC verification gave me confidence, and their customer agent guided me through the entire meeting process seamlessly.",
    verifiedDate: "August 2026",
    perks: "₦850,000 allowance + Direct oil & gas internship"
  },
  {
    id: "test-6",
    name: "Marcus T.",
    age: 33,
    role: "Creative Director",
    location: "Canary Wharf, London, United Kingdom",
    category: "Diaspora",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "Even living in the UK, I wanted an authentic African connection. Afro-Connect set up an introduction with an established businesswoman visiting from Lagos. Flawless coordination and high class.",
    verifiedDate: "July 2026",
    perks: "£2,500/month allowance + First class flight tickets"
  },
  {
    id: "test-7",
    name: "Aisha K.",
    age: 25,
    role: "Event Planner & Caterer",
    location: "Mombasa / Nairobi, Kenya",
    category: "Sugar Daddy",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "The discretion and security here is top tier. They don't expose your pictures publicly unless verified, and the matchmaker personally confirmed my partner's background before our first dinner.",
    verifiedDate: "July 2026",
    perks: "KSh 180,000 monthly maintenance + Car gift"
  },
  {
    id: "test-8",
    name: "Tobi S.",
    age: 28,
    role: "Real Estate Broker",
    location: "Bodija, Ibadan, Nigeria",
    category: "Sugar Mummy",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "I had been scammed by fake online blogs before. When I contacted Afro-Connect Agency, they handled everything transparently. Now living comfortably with ongoing monthly support and business links.",
    verifiedDate: "June 2026",
    perks: "₦700,000 monthly upkeep + Land investment deals"
  },
  {
    id: "test-9",
    name: "Kwame J.",
    age: 30,
    role: "Hospitality Executive",
    location: "Haie Vive, Cotonou, Benin Republic",
    category: "LGBT",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    story:
      "As someone in the LGBT community, finding a safe, private matchmaking agency in West Africa is rare. Afro-Connect provided total privacy, empathy, and connected me with an understanding executive partner.",
    verifiedDate: "May 2026",
    perks: "CFA 1,500,000 allowance + High level privacy"
  },
];
