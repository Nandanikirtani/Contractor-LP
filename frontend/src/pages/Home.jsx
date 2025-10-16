import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import PricingCard from '../components/PricingCard';
import InteractiveBackground from '../components/InteractiveBackground';
import CardSwap, { Card } from '../components/CardSwap';
import SplitText from '../components/SplitText';
import AnimatedCounter from '../components/AnimatedCounter';
import RealTimeImg from '../assets/Real_time.jpg';
import SecureImg from '../assets/Secure.jpg';
import MobileAccessImg from '../assets/Mobile Access.jpg';
import DedicatedSupportImg from '../assets/Dedicated Support.png';
import '../styles/App.css';

const FAQCard = ({ question, answer, index, isOpen, onToggle }) => {
  return (
    <motion.div
      className="faq-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div className={`faq-number ${isOpen ? 'active' : ''}`}>
        {String(index + 1).padStart(2, '0')}
      </motion.div>
      <motion.button
        className="faq-question"
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(0, 204, 0, 0.05)" }}
      >
        <div className="faq-question-content">
          <motion.span 
            className="faq-question-icon"
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {isOpen ? '✨' : '❓'}
          </motion.span>
          <span className="faq-question-text">{question}</span>
        </div>
        <motion.span
          className="faq-icon"
          animate={{ 
            rotate: isOpen ? 180 : 0, 
            scale: isOpen ? 1.2 : 1,
            color: isOpen ? "#00cc00" : "rgba(0, 204, 0, 0.7)"
          }}
          transition={{ duration: 0.4 }}
        >
          ▼
        </motion.span>
      </motion.button>
      <motion.div
        className="faq-answer-wrapper"
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        style={{ overflow: "hidden" }}
      >
        <motion.div
          className="faq-answer"
          initial={{ rotateX: -20, opacity: 0 }}
          animate={{ 
            rotateX: isOpen ? 0 : -20, 
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -10
          }}
          transition={{ duration: 0.4, delay: isOpen ? 0.1 : 0 }}
        >
          <div className="faq-answer-content">
            <div className="faq-answer-icon">💡</div>
            <p>{answer}</p>
          </div>
        </motion.div>
      </motion.div>
      {isOpen && (
        <motion.div 
          className="faq-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

const Home = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 }
  };


  const heroFeatures = [
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track project metrics and performance in real-time with powerful analytics.',
      image: RealTimeImg
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Bank-level security for your business data with encryption.',
      image: SecureImg
    },
    {
      icon: '📱',
      title: 'Mobile Access',
      description: 'Manage projects on-the-go with mobile apps for iOS and Android.',
      image: MobileAccessImg
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 customer support for your business needs and queries.',
      image: DedicatedSupportImg
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Construction Director',
      image: 'https://i.pravatar.cc/150?img=12',
      testimonial: 'Shiven Infotech has transformed how we manage our construction projects. The biometric attendance and project tracking features are game-changers!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      image: 'https://i.pravatar.cc/150?img=47',
      testimonial: 'The lead management and CRM features have helped us increase our client conversion rate by 40%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Project Manager',
      image: 'https://i.pravatar.cc/150?img=33',
      testimonial: 'Finally, a solution that brings everything together - from quotations to billing. It has saved us countless hours every week.',
      rating: 5
    }
  ];


  const faqItems = [
    {
      question: 'What is Shiven Infotech?',
      answer: 'Shiven Infotech is an all-in-one platform designed specifically for construction and contracting businesses. It combines project management, CRM, billing, inventory control, and business analytics in a single integrated solution.',
      category: 'general'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required. You can explore all features and see how Shiven Infotech can benefit your business before committing.',
      category: 'pricing'
    },
    {
      question: 'How is the pricing structured?',
      answer: 'We offer three flexible plans: Basic ($49/month), Standard ($99/month), and Premium ($199/month). Each plan is billed monthly and can be cancelled anytime. We also offer custom pricing for enterprise clients.',
      category: 'pricing'
    },
    {
      question: 'Does your platform support mobile access?',
      answer: 'Absolutely! All plans include mobile access through our dedicated iOS and Android apps. You can manage your projects, track team members, and access important data from anywhere.',
      category: 'features'
    },
    {
      question: 'What security measures are in place?',
      answer: 'We use bank-level encryption, regular security audits, and comply with international data protection regulations. Your data is stored on secure servers with automatic backups.',
      category: 'features'
    },
    {
      question: 'What is your customer support like?',
      answer: 'We provide 24/7 customer support for all plans. Basic plan includes email support, Standard includes priority email/chat support, and Premium includes dedicated account managers and phone support.',
      category: 'general'
    },
    {
      question: 'Can I integrate Shiven Infotech with other tools?',
      answer: 'Yes! The Standard and Premium plans include API access. We also have pre-built integrations with popular tools like accounting software, payment gateways, and communication platforms.',
      category: 'features'
    },
    {
      question: 'How do I migrate my existing data?',
      answer: 'Our team provides free data migration assistance. We can import your existing projects, clients, and team members. Our onboarding team will guide you through the entire process.',
      category: 'general'
    }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pricingPlans = [
    {
      title: 'Basic',
      price: '49',
      features: [
        'Up to 5 Users',
        'Basic Project Management',
        'Lead Management',
        'Email Support',
        '5GB Storage',
        'Mobile Access'
      ]
    },
    {
      title: 'Standard',
      price: '99',
      popular: true,
      features: [
        'Up to 20 Users',
        'Advanced Project Management',
        'Full CRM Suite',
        'Priority Support',
        '50GB Storage',
        'Custom Reports',
        'API Access',
        'Digital Marketing Tools'
      ]
    },
    {
      title: 'Premium',
      price: '199',
      features: [
        'Unlimited Users',
        'Enterprise Features',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        '500GB Storage',
        'Custom Integrations',
        'White Label Options',
        'Advanced Analytics',
        'Training & Onboarding'
      ]
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <InteractiveBackground />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SplitText
            text="Transform Your Construction Business"
            className="hero-title"
            tag="h1"
            delay={50}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, x: -30, y: 20 }}
            to={{ opacity: 1, x: 0, y: 0 }}
            threshold={0.5}
            rootMargin="0px"
            textAlign="left"
          />
          <h1 className="hero-title" style={{ marginTop: '0' }}>
            <span className="gradient-text"> with Shiven Infotech</span>
          </h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            All-in-one platform for project management, CRM, billing, and business growth. 
            Built specifically for construction and contracting businesses.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Demo</button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-cards"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <CardSwap
            width={420}
            height={340}
            cardDistance={30}
            verticalDistance={40}
            delay={4000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card>
              <div className="feature-showcase-card">
                <span className="showcase-icon">📊</span>
                <h4>Real-time Tracking</h4>
                <p>Monitor project progress with live updates and analytics</p>
              </div>
            </Card>
            <Card>
              <div className="feature-showcase-card">
                <span className="showcase-icon">✓</span>
                <h4>Task Completed</h4>
                <p>Streamline workflow with automated task management</p>
              </div>
            </Card>
            <Card>
              <div className="feature-showcase-card">
                <span className="showcase-icon">👥</span>
                <h4>Team Collaboration</h4>
                <p>Connect and coordinate with your entire team effortlessly</p>
              </div>
            </Card>
          </CardSwap>
        </motion.div>
      </section>

      {/* About Us Section - Enhanced */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">About Shiven Infotech</h2>
            <p className="section-subtitle">
              Your trusted partner in construction technology
            </p>
          </motion.div>

          <div className="about-description">
            <SplitText
              text="At Shiven Infotech, we understand the unique challenges faced by construction and contracting businesses. Our comprehensive platform combines project management, CRM, inventory control, and financial tools in one seamless solution."
              className="about-desc-text"
              tag="p"
              delay={30}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
            <SplitText
              text="We've helped over 500+ construction companies streamline their operations, improve team collaboration, and grow their business."
              className="about-desc-text"
              tag="p"
              delay={30}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
          </div>

          {/* Animated Stats Counter */}
          <motion.div className="about-stats-enhanced" {...fadeInUp}>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-icon">👥</div>
              <h4 className="stat-number">
                <AnimatedCounter end={500} suffix="+" duration={2.5} />
              </h4>
              <p className="stat-label">Happy Clients</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-icon">🎯</div>
              <h4 className="stat-number">
                <AnimatedCounter end={98} suffix="%" duration={2.5} />
              </h4>
              <p className="stat-label">Satisfaction Rate</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-icon">⏰</div>
              <h4 className="stat-number">24/7</h4>
              <p className="stat-label">Support Available</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-icon">✨</div>
              <h4 className="stat-number">
                <AnimatedCounter end={50} suffix="+" duration={2.5} />
              </h4>
              <p className="stat-label">Features</p>
            </motion.div>
          </motion.div>
          
          {/* Explore Features Button */}
          <motion.div 
            className="features-cta" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button 
              className="btn-explore-features"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.location.href = '/features'}
            >
              <span className="btn-text">Explore All Features</span>
              <span className="btn-icon">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section 
        className="features-preview"
        onMouseMove={(e) => {
          const section = e.currentTarget;
          const rect = section.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          section.style.setProperty('--mouse-x', `${x}%`);
          section.style.setProperty('--mouse-y', `${y}%`);
        }}
      >
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Why Choose Us</h2>
          </motion.div>
          <motion.div className="subtitle-container" {...fadeInUp}>
            <SplitText
              text="Powerful features designed for construction professionals"
              className="section-subtitle"
              tag="p"
              delay={30}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
            <SplitText
              text="From real-time analytics to dedicated support, we provide everything you need to streamline your construction business operations."
              className="features-description"
              tag="p"
              delay={30}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
            <SplitText
              text="Our platform combines cutting-edge technology with industry expertise to deliver solutions that drive growth and efficiency."
              className="features-description"
              tag="p"
              delay={30}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
            />
          </motion.div>
          <motion.div 
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {heroFeatures.map((feature, index) => {
              // Define different entry directions for each card
              const directions = [
                { x: -100, y: -100 }, // Card 0: Top-left
                { x: 100, y: -100 },  // Card 1: Top-right
                { x: -100, y: 100 },  // Card 2: Bottom-left
                { x: 100, y: 100 }    // Card 3: Bottom-right
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: directions[index].x, y: directions[index].y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Happy Clients</h2>
            <p className="section-subtitle">
              See what our clients have to say about us
            </p>
          </motion.div>
          <motion.div 
            className="testimonials-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about Shiven Infotech
            </p>
          </motion.div>
          
          {/* FAQ Search Bar */}
          <motion.div 
            className="faq-search-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="faq-search-wrapper">
              <span className="faq-search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search FAQ..." 
                className="faq-search-input"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div 
            className="faq-categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              className={`faq-category ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            <button 
              className={`faq-category ${selectedCategory === 'general' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('general')}
            >
              General
            </button>
            <button 
              className={`faq-category ${selectedCategory === 'pricing' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('pricing')}
            >
              Pricing
            </button>
            <button 
              className={`faq-category ${selectedCategory === 'features' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('features')}
            >
              Features
            </button>
          </motion.div>

          <motion.div 
            className="faq-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredFAQs.map((item, index) => (
              <FAQCard 
                key={index} 
                question={item.question} 
                answer={item.answer} 
                index={index}
                isOpen={openFAQIndex === index}
                onToggle={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
              />
            ))}
          </motion.div>

          {filteredFAQs.length === 0 && (
            <motion.div 
              className="faq-no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="no-results-icon">🔍</span>
              <p>No questions found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="why-need-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Why Your Business Needs Shiven Infotech</h2>
            <p className="section-subtitle">
              Transform challenges into opportunities with our comprehensive solution
            </p>
          </motion.div>

          <div className="why-need-grid">
            {/* Problem Column */}
            <motion.div 
              className="problem-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="column-title problem-title">
                <span className="title-icon">❌</span>
                Without Shiven Infotech
              </h3>
              <div className="problem-list">
                <motion.div className="problem-item" whileHover={{ x: 5 }}>
                  <span className="problem-icon">😫</span>
                  <div>
                    <h4>Manual Project Tracking</h4>
                    <p>Lose track of multiple projects, deadlines, and resources</p>
                  </div>
                </motion.div>
                <motion.div className="problem-item" whileHover={{ x: 5 }}>
                  <span className="problem-icon">📝</span>
                  <div>
                    <h4>Paper-Based Management</h4>
                    <p>Drowning in paperwork and manual documentation</p>
                  </div>
                </motion.div>
                <motion.div className="problem-item" whileHover={{ x: 5 }}>
                  <span className="problem-icon">💸</span>
                  <div>
                    <h4>Revenue Leakage</h4>
                    <p>Missing payments, incorrect billing, and financial errors</p>
                  </div>
                </motion.div>
                <motion.div className="problem-item" whileHover={{ x: 5 }}>
                  <span className="problem-icon">🔀</span>
                  <div>
                    <h4>Scattered Tools</h4>
                    <p>Using multiple disconnected tools that don't talk to each other</p>
                  </div>
                </motion.div>
                <motion.div className="problem-item" whileHover={{ x: 5 }}>
                  <span className="problem-icon">⏰</span>
                  <div>
                    <h4>Time Wastage</h4>
                    <p>Hours spent on repetitive tasks and data entry</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* VS Divider */}
            <motion.div 
              className="vs-divider"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="vs-circle">
                <span>VS</span>
              </div>
            </motion.div>

            {/* Solution Column */}
            <motion.div 
              className="solution-column"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="column-title solution-title">
                <span className="title-icon">✅</span>
                With Shiven Infotech
              </h3>
              <div className="solution-list">
                <motion.div className="solution-item" whileHover={{ x: -5 }}>
                  <span className="solution-icon">🚀</span>
                  <div>
                    <h4>Real-Time Monitoring</h4>
                    <p>Track all projects, teams, and progress in one dashboard</p>
                  </div>
                </motion.div>
                <motion.div className="solution-item" whileHover={{ x: -5 }}>
                  <span className="solution-icon">📱</span>
                  <div>
                    <h4>Digital Everything</h4>
                    <p>100% paperless operations with cloud storage</p>
                  </div>
                </motion.div>
                <motion.div className="solution-item" whileHover={{ x: -5 }}>
                  <span className="solution-icon">💰</span>
                  <div>
                    <h4>Automated Billing</h4>
                    <p>Never miss a payment with automated invoicing</p>
                  </div>
                </motion.div>
                <motion.div className="solution-item" whileHover={{ x: -5 }}>
                  <span className="solution-icon">🎯</span>
                  <div>
                    <h4>All-in-One Platform</h4>
                    <p>Everything you need in a single, integrated system</p>
                  </div>
                </motion.div>
                <motion.div className="solution-item" whileHover={{ x: -5 }}>
                  <span className="solution-icon">⚡</span>
                  <div>
                    <h4>Save 10+ Hours Weekly</h4>
                    <p>Automate repetitive tasks and focus on growth</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div 
            className="impact-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="impact-stat">
              <motion.div 
                className="stat-value"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={40} suffix="%" duration={2} />
              </motion.div>
              <p className="stat-description">Increase in Productivity</p>
            </div>
            <div className="impact-stat">
              <motion.div 
                className="stat-value"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={60} suffix="%" duration={2} />
              </motion.div>
              <p className="stat-description">Reduction in Errors</p>
            </div>
            <div className="impact-stat">
              <motion.div 
                className="stat-value"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={3} suffix="x" duration={2} />
              </motion.div>
              <p className="stat-description">Faster Project Delivery</p>
            </div>
            <div className="impact-stat">
              <motion.div 
                className="stat-value"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={95} suffix="%" duration={2} />
              </motion.div>
              <p className="stat-description">Client Satisfaction</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="why-need-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button 
              className="btn-transform"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Transform Your Business Today
              <span className="btn-arrow">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Subscription Plans</h2>
            <p className="section-subtitle">
              Choose the perfect plan for your business
            </p>
          </motion.div>
          <motion.div 
            className="pricing-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  popular={plan.popular}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="cta-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of construction companies already using Shiven Infotech
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="btn-cta-main"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="btn-text">Get Started Today</span>
              <motion.span 
                className="btn-icon"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
