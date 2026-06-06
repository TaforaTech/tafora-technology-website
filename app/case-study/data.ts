export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  gradient: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  results: { label: string; value: string }[];
};

export const categories = [
  "All",
  "Food",
  "Education",
  "Health",
  "Logistics",
  "Fintech",
  "E-Commerce",
];

export const projects: Project[] = [
  {
    slug: "khabar-express",
    title: "Khabar Express",
    category: "Food",
    tagline: "Hyperlocal cloud kitchen ordering platform",
    description:
      "Multi-vendor cloud kitchen marketplace with real-time order tracking, dynamic pricing, and rider management.",
    gradient: "from-orange-600 to-amber-400",
    services: ["UI/UX Design", "Web App Development", "Mobile App"],
    overview:
      "A multi-vendor cloud kitchen marketplace connecting home chefs and small kitchen operators with hungry customers across Dhaka. The platform handles everything from menu management and dynamic pricing to real-time order tracking and automated rider dispatch — turning fragmented food businesses into a unified delivery network.",
    challenge:
      "Hundreds of home chefs and small kitchen operators in Dhaka had no way to reach customers beyond word-of-mouth. Existing delivery platforms charged excessive commissions, and there was no infrastructure for quality control, order coordination, or last-mile delivery for micro-vendors.",
    solution:
      "We built a cloud kitchen marketplace with vendor onboarding, menu management, AI-driven demand pricing, and an integrated rider dispatch system. A quality scoring algorithm ensures consistent food standards across all vendors.",
    features: [
      "Multi-vendor marketplace with vendor dashboards",
      "AI-driven dynamic pricing based on demand",
      "Real-time GPS order tracking",
      "Automated rider dispatch and route optimization",
      "Quality scoring and customer feedback loop",
      "Kitchen analytics and inventory forecasting",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "bKash API"],
    results: [
      { label: "Active Kitchens", value: "350+" },
      { label: "Avg. Delivery Time", value: "28 min" },
      { label: "Monthly Orders", value: "45K+" },
    ],
  },
  {
    slug: "pathshala-ai",
    title: "Pathshala AI",
    category: "Education",
    tagline: "AI-powered adaptive learning for K-12 students",
    description:
      "Personalized learning platform with AI tutoring, adaptive quizzes, and real-time progress analytics for students.",
    gradient: "from-violet-600 to-purple-500",
    services: ["AI/ML Development", "UI/UX Design", "Mobile App"],
    overview:
      "An AI-powered adaptive learning platform designed for K-12 students in Bangladesh. The platform personalizes lesson plans based on each student's learning pace, identifies knowledge gaps through diagnostic assessments, and provides an AI tutor that explains concepts in Bangla and English — making quality education accessible regardless of location or income.",
    challenge:
      "Students in rural and semi-urban Bangladesh had limited access to quality tutoring. Classroom sizes of 60+ made personalized attention impossible, and parents had no visibility into their children's actual learning gaps versus syllabus completion.",
    solution:
      "We developed an adaptive learning engine that maps each student's knowledge graph, delivers personalized content paths, and provides an AI tutor capable of answering questions in natural Bangla. A parent dashboard surfaces real-time progress and gap analysis.",
    features: [
      "Adaptive learning paths based on student performance",
      "AI tutor with Bangla and English support",
      "Diagnostic gap analysis and knowledge mapping",
      "Gamified quizzes and achievement system",
      "Parent dashboard with progress insights",
      "Offline mode for low-connectivity areas",
    ],
    techStack: ["React Native", "Python", "LangChain", "FastAPI", "PostgreSQL"],
    results: [
      { label: "Active Students", value: "18K+" },
      { label: "Avg. Score Improvement", value: "+32%" },
      { label: "Retention Rate", value: "89%" },
    ],
  },
  {
    slug: "shastho-seba",
    title: "Shastho Seba",
    category: "Health",
    tagline: "Telemedicine and health records platform",
    description:
      "Telemedicine platform connecting patients with verified doctors, with integrated digital health records and pharmacy delivery.",
    gradient: "from-emerald-600 to-teal-400",
    services: ["UI/UX Design", "Web Development", "Mobile App"],
    overview:
      "A telemedicine platform connecting patients across Bangladesh with verified doctors through video consultations, voice calls, and chat. The platform maintains unified digital health records, enables e-prescriptions, and coordinates medicine delivery through partner pharmacies — bringing quality healthcare to underserved communities.",
    challenge:
      "Over 60% of Bangladesh's population lives in areas with limited access to specialist doctors. Patients traveled hours for consultations, medical records were scattered across paper files, and there was no continuity of care between visits.",
    solution:
      "We created a telemedicine ecosystem with doctor verification, multi-modal consultations, centralized health records, and pharmacy integration. An AI triage system prioritizes urgent cases and routes patients to the right specialists.",
    features: [
      "Video, voice, and chat consultations",
      "Unified digital health records",
      "E-prescription with pharmacy delivery",
      "AI-powered symptom triage",
      "Doctor verification and rating system",
      "Appointment scheduling with reminders",
    ],
    techStack: ["React", "Node.js", "Firebase", "WebRTC", "Twilio"],
    results: [
      { label: "Doctors Onboarded", value: "200+" },
      { label: "Consultations", value: "30K+" },
      { label: "Patient Satisfaction", value: "4.7/5" },
    ],
  },
  {
    slug: "cargobee",
    title: "CargoBee",
    category: "Logistics",
    tagline: "Freight management and fleet tracking system",
    description:
      "End-to-end freight management platform with live fleet tracking, load optimization, and automated invoicing.",
    gradient: "from-blue-600 to-cyan-500",
    services: ["Full Stack Development", "IoT Integration", "UI/UX Design"],
    overview:
      "An end-to-end freight management platform for logistics companies operating across Bangladesh and cross-border routes. The system provides live fleet tracking via GPS and IoT sensors, intelligent load optimization, automated invoicing, and a shipper portal for real-time shipment visibility — replacing spreadsheets and phone calls with a single command center.",
    challenge:
      "Logistics operators managed fleets using paper logs and phone calls. Load planning was guesswork, fuel costs were untracked, and shippers had zero visibility into shipment status — leading to empty return trips, delayed deliveries, and billing disputes.",
    solution:
      "We built a fleet command center with IoT-based live tracking, AI load optimization that reduces empty miles, automated invoicing tied to delivery confirmations, and a shipper-facing portal with real-time ETAs and proof-of-delivery.",
    features: [
      "Live GPS fleet tracking with geofencing",
      "AI-powered load and route optimization",
      "Automated invoicing and billing reconciliation",
      "Shipper portal with real-time ETAs",
      "Driver performance scoring",
      "Fuel consumption analytics and alerts",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "MQTT", "Google Maps API"],
    results: [
      { label: "Fleet Vehicles", value: "500+" },
      { label: "Empty Miles Reduced", value: "40%" },
      { label: "Invoice Disputes", value: "-85%" },
    ],
  },
  {
    slug: "nagad-hisab",
    title: "Nagad Hisab",
    category: "Fintech",
    tagline: "Smart expense tracking for SMEs",
    description:
      "Expense management and bookkeeping platform for small businesses with automated tax reporting and mobile-first invoicing.",
    gradient: "from-green-600 to-lime-400",
    services: ["Web Development", "Mobile App", "AI/ML"],
    overview:
      "A mobile-first expense management and bookkeeping platform built specifically for Bangladeshi SMEs. The app automates receipt scanning, categorizes expenses using AI, generates GST-compliant invoices, and produces tax-ready reports — replacing the pen-and-paper accounting that 80% of small businesses still rely on.",
    challenge:
      "Small businesses in Bangladesh managed finances through handwritten ledgers and scattered receipts. Tax season was chaos, cash flow was invisible, and owners made critical decisions without knowing their real profit margins or expense patterns.",
    solution:
      "We built a mobile-first platform with OCR receipt scanning, AI expense categorization, automated invoicing via bKash/Nagad integration, and one-tap tax report generation — designed for business owners who have never used accounting software.",
    features: [
      "AI-powered receipt scanning and categorization",
      "Mobile-first invoice generation",
      "bKash and Nagad payment integration",
      "Automated tax-ready report generation",
      "Cash flow forecasting and alerts",
      "Multi-user access with role permissions",
    ],
    techStack: ["React Native", "Python", "Tesseract OCR", "FastAPI", "PostgreSQL"],
    results: [
      { label: "SMEs Onboarded", value: "1.2K+" },
      { label: "Time Saved on Books", value: "75%" },
      { label: "Tax Filing Errors", value: "-90%" },
    ],
  },
  {
    slug: "learn-bridge",
    title: "LearnBridge",
    category: "Education",
    tagline: "Student-mentor matching with integrated LMS",
    description:
      "Intelligent mentor matching platform with video sessions, progress tracking, and outcome-based ratings.",
    gradient: "from-indigo-600 to-violet-400",
    services: ["Full Stack Development", "UI/UX Design", "AI/ML"],
    overview:
      "An intelligent student-mentor matching platform with an integrated learning management system. The platform uses ML-based matching algorithms to pair students with the right mentors based on learning goals, availability, subject expertise, and teaching style — then tracks outcomes to continuously improve match quality.",
    challenge:
      "Students struggled to find qualified mentors for competitive exam preparation and skill-based learning. Existing platforms offered no quality control, poor scheduling, and no way to measure whether mentorship actually improved outcomes.",
    solution:
      "We built an intelligent matching engine with mentor verification, integrated video sessions, assignment tracking, and outcome-based mentor ratings that improve match quality over time through feedback loops.",
    features: [
      "ML-powered mentor matching algorithm",
      "Integrated video sessions with screen sharing",
      "Assignment and quiz management",
      "Progress analytics dashboard",
      "Mentor verification and background checks",
      "Outcome-based rating algorithm",
    ],
    techStack: ["React", "Node.js", "MongoDB", "WebRTC", "Redis"],
    results: [
      { label: "Match Satisfaction", value: "93%" },
      { label: "Active Mentors", value: "600+" },
      { label: "Sessions Completed", value: "32K+" },
    ],
  },
  {
    slug: "shopna-mart",
    title: "Shopna Mart",
    category: "E-Commerce",
    tagline: "Multi-vendor e-commerce marketplace",
    description:
      "Full-featured multi-vendor marketplace with seller dashboards, integrated payments, and logistics coordination.",
    gradient: "from-pink-600 to-rose-400",
    services: ["Web Development", "UI/UX Design", "Payment Integration"],
    overview:
      "A full-featured multi-vendor e-commerce marketplace enabling local sellers across Bangladesh to set up digital storefronts. The platform handles product listings, inventory management, order fulfillment, integrated bKash/Nagad payments, and last-mile delivery coordination — empowering small retailers to compete in the digital economy.",
    challenge:
      "Small retailers and artisans had no affordable way to sell online. Existing marketplaces were designed for large sellers, with complex onboarding, high commissions, and no support for the cash-on-delivery and mobile payment preferences of Bangladeshi consumers.",
    solution:
      "We designed a seller-friendly marketplace with WhatsApp-assisted onboarding, mobile-first product management, dynamic commission tiers, and deep integration with local payment methods and courier networks.",
    features: [
      "Seller storefronts with custom branding",
      "Inventory and order management dashboard",
      "bKash, Nagad, and COD payment support",
      "Courier integration with tracking",
      "Customer review and trust scoring",
      "Promotional tools and discount engine",
    ],
    techStack: ["Next.js", "Strapi CMS", "PostgreSQL", "bKash API", "Pathao API"],
    results: [
      { label: "Active Sellers", value: "800+" },
      { label: "Monthly GMV", value: "৳2.5Cr" },
      { label: "Repeat Buyers", value: "55%" },
    ],
  },
  {
    slug: "green-pulse",
    title: "GreenPulse",
    category: "Logistics",
    tagline: "Waste collection management and recycling tracker",
    description:
      "Smart waste management platform with route optimization, recycling analytics, and citizen reporting.",
    gradient: "from-teal-700 to-green-500",
    services: ["Web Development", "Mobile App", "IoT Integration"],
    overview:
      "A smart waste management platform designed for municipalities and private waste operators. The system optimizes collection routes based on fill-level sensors, tracks recycling rates, manages fleet operations, and provides a citizen-facing app for reporting overflows and scheduling bulk pickups — turning waste management from reactive to predictive.",
    challenge:
      "Waste collection in growing cities was inefficient — trucks followed fixed routes regardless of bin fill levels, recycling was untracked, and citizens had no way to report overflows or schedule pickups, leading to public health concerns and wasted fuel.",
    solution:
      "We deployed IoT fill-level sensors on bins, built a route optimization engine that cuts fuel costs, and created a citizen app for real-time reporting. A recycling dashboard tracks diversion rates and helps meet sustainability targets.",
    features: [
      "IoT bin fill-level monitoring",
      "Dynamic route optimization for collection trucks",
      "Citizen reporting app with photo uploads",
      "Recycling rate tracking and analytics",
      "Fleet management and driver assignments",
      "Bulk pickup scheduling for businesses",
    ],
    techStack: ["Next.js", "Node.js", "InfluxDB", "MQTT", "Mapbox"],
    results: [
      { label: "Fuel Cost Reduction", value: "35%" },
      { label: "Bins Monitored", value: "2K+" },
      { label: "Citizen Reports Resolved", value: "94%" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
