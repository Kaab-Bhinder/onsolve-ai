// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Chief Technology Officer",
    company: "InnovateTech Solutions",
    text: "Omnisolve AI completely revolutionized our development process. Their AI agents reduced our deployment time by 70% and improved our code quality significantly.",
    image: "/testimonials/client1.jpg"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "HealthFlow Medical",
    text: "The healthcare AI solutions provided by Omnisolve transformed patient care in our facilities. We've seen a 45% improvement in diagnostic accuracy.",
    image: "/testimonials/client2.jpg"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Head of Digital Marketing",
    company: "RetailGenius Corp",
    text: "Their Try-On AI technology boosted our online sales by 85%. Customer engagement increased dramatically, and returns decreased by 60%. Absolutely game-changing!",
    image: "/testimonials/client3.jpg"
  },
  {
    id: 4,
    name: "David Gonzalez",
    role: "Learning & Development Director",
    company: "EduTech Innovations",
    text: "The AI-powered training solutions streamlined our entire onboarding process. New employees are now 3x more productive in their first month. Outstanding results!",
    image: "/testimonials/client4.jpg"
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "Chief Executive Officer",
    company: "FinanceFirst Bank",
    text: "Omnisolve AI's business automation solutions helped us process transactions 5x faster while maintaining the highest security standards. Their team is exceptional.",
    image: "/testimonials/client5.jpg"
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Product Manager",
    company: "CloudScale Systems",
    text: "Working with Omnisolve was a transformative experience. Their AI consulting helped us identify new opportunities and optimize our product development cycle.",
    image: "/testimonials/client6.jpg"
  }
];

// Services Data for services page (icons will be imported in the component)
export const detailedServicesData = [
  {
    id: "ai-agents",
    icon: "🤖",
    iconName: "FaRocket",
    title: "AI Agents",
    description: "Automating 24/7 support and sales workflows with intelligent virtual assistants that scale your business operations and enhance customer experience.",
    badge: "Most Popular",
    stats: ["90% faster response", "24/7 availability", "Multi-language support"],
    detailedDescription: [
      "Transform your customer service with intelligent AI agents that work around the clock. Our advanced conversational AI understands context, learns from interactions, and provides personalized responses that feel genuinely human.",
      "From lead qualification to complex support queries, our AI agents integrate seamlessly with your existing systems. They can handle multiple languages, escalate complex issues appropriately, and maintain detailed interaction histories for improved service quality.",
      "Experience significant cost savings while improving customer satisfaction scores. Our AI agents reduce response times by up to 90% and can handle thousands of simultaneous conversations without compromising quality."
    ]
  },
  {
    id: "business-automation",
    icon: "⚙️",
    iconName: "FaCogs",
    title: "Business Automation",
    description: "Streamline HR, CRM, and finance processes to reduce manual work, increase operational efficiency, and eliminate repetitive tasks across your organization.",
    badge: "High Impact",
    stats: ["60% time savings", "99.9% accuracy", "Easy integration"],
    detailedDescription: [
      "Eliminate time-consuming manual processes with intelligent automation solutions. Our systems can handle everything from invoice processing and data entry to complex workflow orchestration across multiple departments.",
      "Integrate disparate business systems into cohesive workflows that reduce errors and improve efficiency. We specialize in connecting CRM, ERP, accounting, and HR systems to create seamless data flow and automated decision-making.",
      "Achieve measurable ROI through reduced operational costs and improved accuracy. Our automation solutions typically deliver 40-60% time savings on routine tasks while virtually eliminating human error in data processing."
    ]
  },
  {
    id: "predictive-analytics",
    icon: "📊",
    iconName: "FaChartLine",
    title: "Predictive Analytics",
    description: "Data-driven insights for smarter decisions using advanced machine learning and statistical analysis to forecast trends and optimize performance.",
    badge: "Smart Insights",
    stats: ["95% accuracy", "Real-time data", "Easy setup"],
    detailedDescription: [
      "Unlock the power of your data with advanced predictive modeling that reveals hidden patterns and future trends. Our machine learning algorithms analyze historical data to provide accurate forecasts for sales, demand, customer behavior, and market conditions.",
      "Make informed strategic decisions with real-time dashboards and automated reporting systems. Our analytics platforms integrate with your existing data sources to provide comprehensive insights without disrupting your current workflows.",
      "Gain competitive advantages through predictive maintenance, inventory optimization, and customer churn prevention. Our solutions help you anticipate problems before they occur and capitalize on opportunities before your competitors."
    ]
  },
  {
    id: "web-development",
    icon: "💻",
    iconName: "FaCode",
    title: "Web Development",
    description: "Modern, scalable websites and applications built with cutting-edge technologies, responsive design, and optimized for performance and SEO.",
    badge: "Full Stack",
    stats: ["100% responsive", "SEO optimized", "Modern tech"],
    detailedDescription: [
      "Create stunning digital experiences with our full-stack web development services. We build responsive, lightning-fast websites using modern frameworks like React, Next.js, and Vue.js, ensuring your online presence performs flawlessly across all devices.",
      "From e-commerce platforms to complex web applications, we deliver scalable solutions that grow with your business. Our development process includes comprehensive testing, security implementation, and performance optimization to ensure maximum uptime and user satisfaction.",
      "Boost your online visibility with SEO-optimized development practices and integrated analytics. Our websites are built for search engine success while maintaining exceptional user experience and conversion optimization."
    ]
  },
  {
    id: "mobile-apps",
    icon: "📱",
    iconName: "FaMobile",
    title: "Mobile Apps",
    description: "Cross-platform iOS and Android applications that deliver exceptional user experiences, seamless functionality, and robust performance across devices.",
    badge: "Cross Platform",
    stats: ["iOS & Android", "App Store ready", "Fast delivery"],
    detailedDescription: [
      "Reach your customers wherever they are with native and cross-platform mobile applications. Our development team creates intuitive, feature-rich apps that leverage device capabilities while maintaining consistent performance across iOS and Android platforms.",
      "Integrate advanced features like push notifications, offline functionality, real-time synchronization, and AI-powered personalization. Our apps are designed to engage users and drive business results through thoughtful UX design and robust backend integration.",
      "Launch faster and maintain easier with our cross-platform development approach using React Native and Flutter. This strategy reduces development time by up to 50% while ensuring native-level performance and user experience."
    ]
  },
  {
    id: "cloud-devops",
    icon: "☁️",
    iconName: "FaCloud",
    title: "Cloud & DevOps",
    description: "Reliable deployment and infrastructure scaling with automated CI/CD pipelines, cloud optimization, and enterprise-grade security implementations.",
    badge: "Scalable",
    stats: ["99.9% uptime", "Auto-scaling", "Secure by default"],
    detailedDescription: [
      "Modernize your infrastructure with cloud-native solutions that scale automatically based on demand. We specialize in AWS, Azure, and Google Cloud implementations that reduce costs while improving performance and reliability.",
      "Accelerate your development cycle with automated CI/CD pipelines, containerization, and infrastructure as code. Our DevOps practices reduce deployment time from hours to minutes while minimizing the risk of production issues.",
      "Ensure enterprise-level security and compliance with our comprehensive approach to cloud security, monitoring, and disaster recovery. We implement best practices for data protection, access control, and system resilience."
    ]
  }
];

// Simple Services Data (for basic usage)
export const services = [
  {
    id: 1,
    title: "AI Agents & Business Automation",
    description: "Intelligent automation solutions that streamline operations and boost productivity",
    icon: "🤖"
  },
  {
    id: 2,
    title: "Healthcare AI Solutions",
    description: "Advanced AI applications for medical diagnosis, patient care, and healthcare optimization",
    icon: "🏥"
  },
  {
    id: 3,
    title: "Virtual Try-On Technology",
    description: "Immersive AR/AI solutions for retail and e-commerce customer experiences",
    icon: "👓"
  },
  {
    id: 4,
    title: "Training & Consulting",
    description: "Expert guidance and training programs to maximize your AI implementation success",
    icon: "🎓"
  }
];

// Case Studies Data (if needed for future use)
export const caseStudies = [
  {
    id: 1,
    title: "HealthTech Revolution",
    client: "MediCore Systems",
    industry: "Healthcare Technology",
    challenge: "Manual patient data processing causing delays and errors in critical medical decisions",
    solution: "Implemented AI-powered diagnostic assistance and automated patient workflow management system",
    impact: "50% reduction in diagnosis time, 95% accuracy improvement, and seamless integration with existing EMR systems"
  },
  {
    id: 2,
    title: "Retail AI Transformation",
    client: "FashionForward Inc.",
    industry: "E-commerce & Retail",
    challenge: "High return rates and low customer engagement due to sizing uncertainties in online purchases",
    solution: "Developed virtual try-on technology with AI-powered size recommendation engine",
    impact: "85% increase in conversion rates, 60% reduction in returns, and enhanced customer satisfaction scores"
  },
  {
    id: 3,
    title: "Financial Process Automation",
    client: "SecureBank Corp",
    industry: "Financial Services",
    challenge: "Time-intensive manual transaction processing and compliance monitoring procedures",
    solution: "Created intelligent automation agents for transaction processing and real-time compliance monitoring",
    impact: "300% faster transaction processing, 99.9% compliance accuracy, and significant cost reduction"
  },
  {
    id: 4,
    title: "Manufacturing Optimization",
    client: "PrecisionTech Manufacturing",
    industry: "Industrial Manufacturing",
    challenge: "Inefficient production line management leading to bottlenecks and quality control issues",
    solution: "Deployed AI-driven predictive maintenance and quality assurance automation systems",
    impact: "40% increase in production efficiency, 75% reduction in defects, and optimized resource allocation"
  },
  {
    id: 5,
    title: "Educational AI Platform",
    client: "LearnSmart Academy",
    industry: "Education Technology",
    challenge: "Personalized learning at scale and effective student progress tracking challenges",
    solution: "Built adaptive learning AI platform with personalized curriculum and progress analytics",
    impact: "200% improvement in learning outcomes, personalized education for 10,000+ students, and enhanced teacher efficiency"
  }
];

// Timeline Case Studies for case-studies page
export const timelineCaseStudies = [
  {
    icon: "🛒",
    title: "ShopBot AI Agent for E-Commerce",
    challenge: "An online fashion retailer was losing customers due to slow support and abandoned carts.",
    solution: "Built a ShopBot AI Agent for instant support, product recommendations, and checkout integration.",
    impact: ["60% reduction in cart abandonment", "45% increase in repeat purchases", "Enhanced AI-driven personalization"]
  },
  {
    icon: "🏙",
    title: "Smart City Navigator",
    challenge: "Municipality needed a solution to reduce traffic congestion and improve commuting.",
    solution: "Developed Smart City Navigator with AI algorithms for real-time route suggestions and predictions.",
    impact: ["35% reduction in congestion", "20% faster travel times", "Improved citizen satisfaction"]
  },
  {
    icon: "📦",
    title: "Warehouse Management System (Python)",
    challenge: "Wholesale distributor faced delays and errors due to manual tracking.",
    solution: "Built a WMS automating stock, shipment, and order processing with analytics dashboards.",
    impact: ["70% better inventory accuracy", "40% faster order fulfillment", "60% fewer errors"]
  },
  {
    icon: "🏥",
    title: "Healthcare – Medicine Reminder & Patient Tracker",
    challenge: "Doctors and patients needed a system to improve medication adherence.",
    solution: "Created a Reminder & Tracker App with doctor-patient assignment and history tracking.",
    impact: ["85% increase in adherence", "Reduced hospital re-admissions", "Stronger doctor-patient relationships"]
  },
  {
    icon: "🏡",
    title: "Real Estate Property Match Agent",
    challenge: "Real estate company losing leads as clients struggled to find exact property matches.",
    solution: "Developed AI Property Match Agent for instant personalized recommendations and chat support.",
    impact: ["50% faster property matching", "30% more closed deals", "Higher satisfaction with personalization"]
  }
];

// Simple Case Studies for homepage section
export const simpleCaseStudies = [
  {
    id: "ai-customer-support",
    image: "/case1.png",
    title: "AI Customer Support Agent",
    description: "Reduced response time by 70% for enterprise clients using intelligent chatbots and automated workflows.",
    category: "AI Automation"
  },
  {
    id: "predictive-analytics-dashboard",
    image: "/case2.png", 
    title: "Predictive Analytics Dashboard",
    description: "Increased sales forecasting accuracy by 85% with machine learning models and real-time data visualization.",
    category: "Data Analytics"
  },
  {
    id: "e-commerce-mobile-app",
    image: "/case3.png",
    title: "E-commerce Mobile App",
    description: "Built cross-platform mobile application that boosted customer engagement by 60% and sales by 40%.",
    category: "Mobile Development"
  }
];

// Company Stats Data
export const companyStats = [
  {
    number: "500+",
    label: "AI Solutions Deployed",
    icon: "🚀"
  },
  {
    number: "95%",
    label: "Client Satisfaction Rate",
    icon: "⭐"
  },
  {
    number: "50+",
    label: "Industries Served",
    icon: "🏢"
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: "🔧"
  }
];

// FAQ Data
export const faqData = [
  {
    id: 1,
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary based on project complexity. Simple automation solutions can be deployed in 2-4 weeks, while comprehensive AI systems may take 2-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    id: 2,
    question: "What industries do you specialize in?",
    answer: "We work across multiple industries including healthcare, finance, retail, manufacturing, education, and technology. Our solutions are customized to meet the specific needs and compliance requirements of each sector."
  },
  {
    id: 3,
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer comprehensive post-implementation support including 24/7 monitoring, regular updates, performance optimization, and training for your team. Our support packages are tailored to your specific needs."
  },
  {
    id: 4,
    question: "How do you ensure data security and privacy?",
    answer: "Data security is our top priority. We implement enterprise-grade encryption, follow industry compliance standards (HIPAA, GDPR, SOC 2), conduct regular security audits, and ensure all data processing meets the highest security standards."
  },
  {
    id: 5,
    question: "Can AI solutions integrate with our existing systems?",
    answer: "Absolutely! Our AI solutions are designed for seamless integration with existing infrastructure. We work with popular platforms, databases, and software systems to ensure minimal disruption to your current operations."
  },
  {
    id: 6,
    question: "What is the ROI of implementing AI solutions?",
    answer: "ROI varies by use case, but our clients typically see 200-500% ROI within the first year through increased efficiency, cost reduction, and new revenue opportunities. We provide detailed ROI projections during our consultation."
  }
];
