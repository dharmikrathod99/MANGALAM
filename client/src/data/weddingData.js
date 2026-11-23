export const BRAND_INFO = {
  name: "Nimantran Studio",
  tagline: "Bespoke Digital Wedding Invitations & E-Stationery",
  contact: {
    whatsapp: "+91 98765 43210",
    whatsappClean: "919876543210",
    email: "concierge@nimantran.com",
    instagram: "@nimantranstudio",
    pinterest: "nimantran_invitations",
    studio: "Civil Lines & Bandra West, Mumbai & New Delhi",
    hours: "Mon – Sat: 10:00 AM – 7:30 PM IST"
  }
};

// 12 Wedding Invitation Collections required
export const COLLECTIONS = [
  {
    id: "traditional-indian",
    title: "Traditional Indian Wedding",
    subtitle: "Heritage Opulence & Sacred Motifs",
    description: "Intricately detailed designs featuring sacred Shubh Vivah verses, peacock feathers, royal mandap architectures, and traditional kalash motifs.",
    accentColor: "#D8B879",
    tag: "Timeless Classic",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FFF9F3] border-[#D8B879] text-[#632D3F]",
    popularFor: "Hindu, Jain, and Marwari Weddings"
  },
  {
    id: "royal-wedding",
    title: "Royal Wedding Invitations",
    subtitle: "Palatial Splendor & Golden Crests",
    description: "Inspired by Rajasthani palace jharokhas, gilded foil embossing, bespoke couple monograms, and Mughal-style botanical arches.",
    accentColor: "#C8A252",
    tag: "Destination Royalty",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FDF7EE] border-[#C8A252] text-[#43212E]",
    popularFor: "Udaipur & Jaipur Palace Celebrations"
  },
  {
    id: "minimalist-wedding",
    title: "Minimalist Wedding Invitations",
    subtitle: "Understated Grace & Clean Lines",
    description: "Curated for the modern couple who adores generous whitespace, refined serif typography, delicate hairline frames, and quiet luxury.",
    accentColor: "#865365",
    tag: "Modern Editorial",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FFFDF8] border-[#EDE2D5] text-[#2C2225]",
    popularFor: "Intimate Weddings & Modern Celebrations"
  },
  {
    id: "floral-wedding",
    title: "Floral Wedding Invitations",
    subtitle: "Botanical Romance & Watercolor Blooms",
    description: "Hand-painted wild roses, cascading jasmine garlands, eucalyptus sprigs, and soft pastel petals dancing across luxury parchment textures.",
    accentColor: "#EBC0CE",
    tag: "Romantic Garden",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FCF5F7] border-[#EBC0CE] text-[#865365]",
    popularFor: "Spring & Garden Lawn Soirees"
  },
  {
    id: "modern-luxury",
    title: "Modern Luxury Invitations",
    subtitle: "Contemporary Chic & Metallic Foils",
    description: "Architectural layouts, champagne gold embossing, asymmetrical artistic frames, and bespoke motion typography for cosmopolitan ceremonies.",
    accentColor: "#D8B879",
    tag: "High Fashion",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FFFDF9] border-[#D8B879] text-[#2C2225]",
    popularFor: "Five-Star Hotel & Luxury Resort Galas"
  },
  {
    id: "haldi-ceremony",
    title: "Haldi Ceremony Invitations",
    subtitle: "Sunshine Marigolds & Festive Radiance",
    description: "Vibrant yellow turmeric motifs, floral urlis, painted clay pots, marigold strings, and joyful typography celebrating the auspicious golden bath.",
    accentColor: "#F7E99A",
    tag: "Golden Joy",
    image: "https://images.unsplash.com/photo-1609151162377-794fa6ec4a39?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FFFDEB] border-[#F7E99A] text-[#7A4B10]",
    popularFor: "Haldi & Pithi Celebrations"
  },
  {
    id: "mehendi-ceremony",
    title: "Mehendi Ceremony Invitations",
    subtitle: "Henna Filigree & Bohemian Vibrance",
    description: "Henna scrollwork patterns, vibrant parrot motifs, dholak beats, festive umbrellas, and rich jewel-toned accents celebrating bridal mehndi.",
    accentColor: "#D9E8D3",
    tag: "Henna Festive",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#F3F9F1] border-[#D9E8D3] text-[#2F5233]",
    popularFor: "Mehendi & Sangeet Evenings"
  },
  {
    id: "engagement-invitations",
    title: "Engagement Invitations",
    subtitle: "The Beginning of Forever",
    description: "Ring exchange ceremony cards featuring delicate sparkling band illustrations, starry foil touches, and romantic engagement party announcements.",
    accentColor: "#EBC0CE",
    tag: "Ring Ceremony",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FAF4F6] border-[#EBC0CE] text-[#632D3F]",
    popularFor: "Roka, Sagai & Ring Exchange Ceremonies"
  },
  {
    id: "save-the-date",
    title: "Save The Date",
    subtitle: "Chic & Shareable Digital Teasers",
    description: "Sleek animated mobile-first countdowns, custom illustrated couple silhouettes, and calendar tear-off cards perfect for quick WhatsApp broadcasting.",
    accentColor: "#865365",
    tag: "Quick Dispatch",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FFFDF8] border-[#865365] text-[#2C2225]",
    popularFor: "Pre-invitation 6-Month Announcements"
  },
  {
    id: "reception-invitations",
    title: "Reception Invitations",
    subtitle: "Gala Evening & Formal Celebration",
    description: "Champagne flute motifs, black-tie elegance, glittering chandelier details, and stately typography welcoming guests to dinner & dancing.",
    accentColor: "#D8B879",
    tag: "Grand Gala",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FDFBF7] border-[#D8B879] text-[#2C2225]",
    popularFor: "Evening Receptions & Cocktail Soirees"
  },
  {
    id: "animated-wedding",
    title: "Animated Wedding Invitations",
    subtitle: "Living Stationery with Music & Motion",
    description: "Unfolding wax seal envelopes, floating flower petals, gentle flute melodies, and interactive multi-slide itinerary motion videos.",
    accentColor: "#865365",
    tag: "Audio & Motion",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FFF8FA] border-[#865365] text-[#43212E]",
    popularFor: "Viral WhatsApp Video & Story Invitations"
  },
  {
    id: "multi-event-wedding",
    title: "Multi-Event Wedding Invitations",
    subtitle: "The Complete Wedding Chronicle",
    description: "Comprehensive 5-day wedding suite including Welcome Dinner, Mehendi, Haldi, Sangeet, Muhurtham/Pheras, and Reception with interactive Google Map links.",
    accentColor: "#D8B879",
    tag: "Complete 5-Card Suite",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    cardTheme: "bg-[#FAF5EA] border-[#D8B879] text-[#4A2E35]",
    popularFor: "Big Fat Indian Weddings & Destination Weekends"
  }
];

// Featured Designs with deep attributes for filtering & preview modals
export const FEATURED_DESIGNS = [
  {
    id: "template-1",
    title: "The Royal Entrance & Storybook Suite",
    category: "Royal",
    categoryKey: "royal",
    badge: "Interactive Doors",
    tag: "Animated Doors & Film",
    priceQuote: "From ₹3,999 ($48)",
    rating: 5.0,
    reviewsCount: 168,
    dimensions: "Interactive Mobile & Web Experience",
    leadTime: "24 to 48 Hours",
    description: "Grand opening doors reveal, cinematic intro film, scratch-to-reveal wedding date, photo carousel, and 1-tap WhatsApp RSVP.",
    eventsIncluded: ["Mehendi", "Sangeet", "Pheras", "Reception"],
    features: [
      "Grand animated door unboxing reveal",
      "Scratch card to reveal the sacred wedding date",
      "Cinematic intro film and musical scoring",
      "Interactive photo gallery carousel",
      "Direct 1-tap WhatsApp RSVP & Google Maps integration"
    ],
    palette: ["#D8B879", "#865365", "#FFFDF8", "#2C2225"],
    coupleSample: "Mayank & Shreya",
    dateSample: "November 24, 2026",
    venueSample: "Taj Lake Palace, Udaipur",
    heroImage: "/templates/template-1/images/og-preview.webp",
    previewUrl: "/templates/template-1/index.html"
  },
  {
    id: "template-2",
    title: "Hand-Painted Garden & Lanterns Suite",
    category: "Floral",
    categoryKey: "floral",
    badge: "Wish Lanterns",
    tag: "Botanical Romance",
    priceQuote: "From ₹3,499 ($42)",
    rating: 4.9,
    reviewsCount: 142,
    dimensions: "Interactive Mobile & Web Experience",
    leadTime: "24 Hours",
    description: "Hand-painted bougainvillea courtyard, wax seal unboxing film, live countdown timer, and interactive floating wish lanterns.",
    eventsIncluded: ["Haldi", "Mehendi", "Sangeet", "Shaadi", "Reception"],
    features: [
      "Tappable gold wax seal & cinematic opening film",
      "Hand-painted bougainvillea courtyard illustrations",
      "Interactive floating wish lanterns guest activity",
      "Live countdown timer to wedding muhurtham",
      "Dress code color guide & multi-event itinerary"
    ],
    palette: ["#F8DDE5", "#EBC0CE", "#D9E8D3", "#865365"],
    coupleSample: "Anushka & Shivam",
    dateSample: "December 08, 2026",
    venueSample: "The Leela Palace, Bengaluru",
    heroImage: "/templates/template-2/images/garden-courtyard.jpg",
    previewUrl: "/templates/template-2/index.html"
  },
  {
    id: "template-3",
    title: "Velvet Monogram & Two-City Timeline",
    category: "Modern",
    categoryKey: "modern",
    badge: "Two-City Timeline",
    tag: "Contemporary Noir",
    priceQuote: "From ₹3,799 ($46)",
    rating: 5.0,
    reviewsCount: 185,
    dimensions: "Interactive Mobile & Web Experience",
    leadTime: "24 Hours",
    description: "Deep royal wine & gold monogram, full-screen opening film, scratch card date reveal, and multi-city celebration timeline.",
    eventsIncluded: ["Cocktail Party", "Haldi", "Sangeet", "Vivah"],
    features: [
      "Bespoke gold couple monogram intro animation",
      "Interactive scratch-to-reveal card experience",
      "Two-city wedding timeline (Mumbai & Delhi)",
      "Embedded music player with ceremonial audio track",
      "Instant Google Calendar invite & RSVP tracking"
    ],
    palette: ["#6E1F2F", "#D8B879", "#FAF4F6", "#2C2225"],
    coupleSample: "Aayush & Nikita",
    dateSample: "January 16, 2027",
    venueSample: "St. Regis Mumbai & Taj Palace Delhi",
    heroImage: "/templates/template-3/images/hero-poster.webp",
    previewUrl: "/templates/template-3/index.html"
  },
  {
    id: "template-4",
    title: "Pop-Up Palace & Jhumars Suite",
    category: "Royal",
    categoryKey: "royal",
    badge: "Pop-Up Palace",
    tag: "Rajasthani Heritage",
    priceQuote: "From ₹4,299 ($52)",
    rating: 5.0,
    reviewsCount: 220,
    dimensions: "Interactive Mobile & Web Experience",
    leadTime: "24 to 48 Hours",
    description: "Storybook film opening onto a 3D pop-up palace, Shri Ganesh Vakratunda shloka, ivory arches, and swaying golden jhumars.",
    eventsIncluded: ["Mehndi", "Haldi", "Sangeet", "Wedding Ceremony"],
    features: [
      "3D Pop-up palace animation book cover reveal",
      "Shri Ganesh Vakratunda Mahakaya shloka reveal",
      "Swaying gold jhumars under ivory architectural arches",
      "Full Mehndi, Haldi, Sangeet & Vivah storybook cards",
      "One-tap Google Maps directions and venue itinerary"
    ],
    palette: ["#F3D9C4", "#C8A252", "#865365", "#FFFDF8"],
    coupleSample: "Arjun & Kiara",
    dateSample: "February 21, 2027",
    venueSample: "The Palace Lawns, Udaipur",
    heroImage: "/templates/template-4/images/og-preview.webp",
    previewUrl: "/templates/template-4/index.html"
  },
  {
    id: "template-5",
    title: "Harmandir Sahib Anand Karaj Suite",
    category: "Traditional",
    categoryKey: "traditional",
    badge: "Anand Karaj",
    tag: "Sacred Heritage",
    priceQuote: "From ₹4,499 ($55)",
    rating: 5.0,
    reviewsCount: 195,
    dimensions: "Interactive Mobile & Web Experience",
    leadTime: "24 to 48 Hours",
    description: "Sacred storybook film revealing Harmandir Sahib, Ik Onkar, Gurbani shabad, and royal Gurdwara ceremony invitations.",
    eventsIncluded: ["Maiyan", "Choora & Mehendi", "Sangeet", "Anand Karaj", "Reception"],
    features: [
      "Harmandir Sahib golden reveal animation",
      "Ik Onkar & sacred Gurbani shabad verses",
      "Swaying golden jhumars under floral ivory arches",
      "Complete Gurdwara Sahib itinerary & map routing",
      "Bilingual wording with Punjabi & English typography"
    ],
    palette: ["#F3D9C4", "#C8A252", "#2C2225", "#FFFDF8"],
    coupleSample: "Karanveer & Harleen",
    dateSample: "March 14, 2027",
    venueSample: "Gurdwara Sahib, Sarabha Nagar, Ludhiana",
    heroImage: "/templates/template-5/images/og-preview.webp",
    previewUrl: "/templates/template-5/index.html"
  }
];

// 3 Configurable Pricing Packages
export const PRICING_PACKAGES = [
  {
    id: "starter",
    name: "Starter Package",
    tagline: "Ideal for intimate ceremonies & quick dispatch",
    priceINR: "₹2,499",
    priceUSD: "$32",
    popular: false,
    delivery: "Within 24 Hours",
    features: [
      "1 Single-event bespoke digital invitation card",
      "High-resolution mobile-optimized JPEG & PDF",
      "Personalized bride & groom names, date, venue",
      "Standard design customization from catalog",
      "Interactive Google Maps venue link embedded",
      "Up to 2 complimentary review rounds",
      "Instant WhatsApp sharing format"
    ],
    buttonText: "Get Custom Quote",
    badge: "Essential"
  },
  {
    id: "premium",
    name: "Premium Package",
    tagline: "Our most chosen suite for 3 to 4 event celebrations",
    priceINR: "₹4,499",
    priceUSD: "$58",
    popular: true,
    delivery: "Within 48 Hours",
    features: [
      "Up to 4 event itinerary cards (Mehendi, Sangeet, Pheras, Reception)",
      "Custom brand color palette & refined typography pairing",
      "Animated digital teaser / Save The Date included",
      "Bespoke couple monogram or crest designed",
      "Interactive digital RSVP link & dress code guide",
      "Subtle 2D motion graphics & shimmer accents",
      "Up to 4 review revisions until perfection",
      "WhatsApp broadcast guidelines & copy included"
    ],
    buttonText: "Get Custom Quote",
    badge: "Most Popular"
  },
  {
    id: "luxury",
    name: "Luxury Bespoke Package",
    tagline: "The pinnacle of royal craftsmanship & animated grandeur",
    priceINR: "₹8,999",
    priceUSD: "$115",
    popular: false,
    delivery: "Priority 48-72 Hours",
    features: [
      "Complete multi-event wedding suite (unlimited events)",
      "Full cinematic animated invitation with music & envelope reveal",
      "100% custom-drawn illustrations (venue/couple motif)",
      "Bilingual wording options (English + regional language)",
      "Interactive mobile web page with RSVP dashboard & countdown",
      "VIP personalized guest versions (e.g. customized names)",
      "Direct Senior Creative Director consultation",
      "Print-ready CMYK files included for physical mementos",
      "Unlimited revisions & dedicated WhatsApp concierge"
    ],
    buttonText: "Get Custom Quote",
    badge: "Royalty Suite"
  }
];

// Customer Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    couple: "Ananya & Kabir Singhania",
    location: "Udaipur & London",
    invitationDesign: "The Royal Udaipur Pichwai",
    rating: 5,
    quote: "Our guests in London and Delhi were completely mesmerized! Opening the digital envelope felt like unwrapping real palace stationery. The gold details, music, and effortless WhatsApp sharing made our wedding prep stress-free.",
    date: "Married Nov 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    couple: "Dr. Meera & Siddharth Varma",
    location: "Bengaluru",
    invitationDesign: "Gulmohar & Blush Botanica",
    rating: 5,
    quote: "Rivayat brought our love for soft pastel botanicals to life. The team customized every single leaf to match our wedding decor theme. Even our grandparents figured out how to RSVP with one tap!",
    date: "Married Oct 2026",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    couple: "Rhea & Armaan Kapoor",
    location: "Jaipur & Dubai",
    invitationDesign: "Noor-e-Khaas Animated Suite",
    rating: 5,
    quote: "The animated video was pure poetry. The shehnai instrumental gently playing as the wax seal cracked open gave everyone goosebumps. Best investment for our destination wedding!",
    date: "Married Dec 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    couple: "Shreya & Rohan Patel",
    location: "Ahmedabad & California",
    invitationDesign: "Kashi Heritage Mandap",
    rating: 5,
    quote: "We needed bilingual cards in Gujarati and English for our families across two continents. Rivayat delivered within 24 hours without a single typo. The typography hierarchy was simply exquisite.",
    date: "Married Jan 2027",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

// Why Choose Us - 8 key USPs
export const WHY_CHOOSE_US = [
  {
    id: "personalized",
    title: "Personalized Designs",
    description: "Every couple has a distinct love story. We customize colors, monogram crests, and illustrations to mirror your unique wedding aesthetic.",
    icon: "Sparkles"
  },
  {
    id: "unique-themes",
    title: "Unique Wedding Themes",
    description: "From palatial royal heritage to modern minimalist editorial, our themes are handcrafted by fine artists, never generic computer-generated templates.",
    icon: "Palette"
  },
  {
    id: "premium-quality",
    title: "Premium Quality",
    description: "Pin-sharp vector graphics, calibrated typography, and exquisite gold foil effects that look stunning on retina iPhone and Android displays.",
    icon: "Crown"
  },
  {
    id: "quick-delivery",
    title: "Quick 24-48h Delivery",
    description: "Wedding planning moves fast. Receive your complete proof within 24 to 48 hours, with express same-day emergency turnaround available.",
    icon: "Clock"
  },
  {
    id: "mobile-friendly",
    title: "Mobile-First Optimization",
    description: "Tailored to standard 9:16 mobile screens, ensuring zero pinching or zooming for your guests reading on WhatsApp and Instagram.",
    icon: "Smartphone"
  },
  {
    id: "affordable-packages",
    title: "Affordable Luxury",
    description: "Transparent, flexible pricing packages designed for every budget, saving thousands compared to heavy paper printing and shipping.",
    icon: "Gem"
  },
  {
    id: "multiple-events",
    title: "Multiple Event Suites",
    description: "Seamlessly organize multi-day Indian festivities from Roka, Haldi, and Mehendi to Pheras and Grand Reception with coordinated visual identity.",
    icon: "Layers"
  },
  {
    id: "whatsapp-ready",
    title: "Easy WhatsApp Sharing",
    description: "Optimized ultra-lightweight files and pre-composed invite captions that forward effortlessly to hundreds of family members with one tap.",
    icon: "Share2"
  }
];

// How It Works - 4 Steps
export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose Your Design",
    description: "Browse our curated atelier collection of traditional, floral, royal, and modern invitation styles, or request a custom blank canvas concept.",
    time: "Browse in 5 mins",
    icon: "Eye"
  },
  {
    step: "02",
    title: "Share Your Details",
    description: "Fill our simple WhatsApp questionnaire with couple names, wedding dates, ceremony venues, function times, and any preferred photos or quotes.",
    time: "Takes 3 mins",
    icon: "FileEdit"
  },
  {
    step: "03",
    title: "Personalize & Perfect",
    description: "Our senior stationery artisans craft your personalized digital card, tuning fonts, borders, and animations. You review proofs and request refinements.",
    time: "24-48h Draft Proof",
    icon: "Sparkles"
  },
  {
    step: "04",
    title: "Receive & Share Joy",
    description: "Get your finished high-definition digital invitations, interactive links, and custom WhatsApp message copy ready to broadcast to all your loved ones.",
    time: "Instant Broadcast",
    icon: "Send"
  }
];

// FAQ Section - 8 Required Questions
export const FAQS = [
  {
    q: "What is a digital wedding invitation?",
    a: "A digital wedding invitation (or E-Invite) is a modern, eco-friendly, and beautifully designed electronic card or animated video crafted specifically for viewing on smartphones, WhatsApp, and email. It allows you to invite guests worldwide instantly with clickable venue maps, calendar links, and RSVP buttons—saving thousands in printing and courier costs while creating an unforgettable first impression."
  },
  {
    q: "Can I customize the invitation?",
    a: "Yes, completely! You can customize couple names, wedding dates, venue details, family host names, color palettes, fonts, background melodies, and add sacred shlokas, quotes, or personalized dress codes. For bespoke projects, we can even hand-draw your venue facade or create a custom couple monogram."
  },
  {
    q: "How long does delivery take?",
    a: "Our standard draft proof is delivered within 24 to 48 hours after receiving your wedding details. Once you review and approve the design, final high-resolution files are delivered immediately. We also offer express 12-hour turnaround for emergency wedding timelines."
  },
  {
    q: "Can I include multiple wedding functions?",
    a: "Absolutely! Indian weddings are renowned for multi-day celebrations. We create unified multi-page suites covering Haldi, Mehendi, Sangeet, Cocktails, Pheras (Vivah), and Reception, keeping each event visually distinguished yet part of a cohesive aesthetic theme."
  },
  {
    q: "Can I share invitations through WhatsApp?",
    a: "Yes! Every single design is purposefully engineered for WhatsApp, Instagram stories, and email. We format the files to standard 9:16 mobile aspect ratio and optimize the file size under 1MB so your cards load instantaneously without eating into your guests' mobile data."
  },
  {
    q: "Can you create animated invitations?",
    a: "Yes, our animated suites are among our most sought-after creations! They feature realistic unfolding wax seals, drifting jasmine petals, sparkling gold dust, and custom background music like shehnai, sitar, or romantic violin melodies delivered as high-definition MP4 videos."
  },
  {
    q: "Can I request a completely custom design?",
    a: "Yes! If you have a specific dream theme, a destination palace, a beloved color palette, or a unique cross-cultural concept in mind, our creative director will work directly with you in our Luxury Bespoke tier to craft a 100% one-of-a-kind creation."
  },
  {
    q: "How can I place an order?",
    a: "You can place an order in three effortless ways: 1) Click 'Create Your Invitation' anywhere on the page, 2) Select your favorite design and tap 'Customize This Design', or 3) Tap our WhatsApp Concierge button to message our team directly. We will guide you through every joyful step!"
  }
];

