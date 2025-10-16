import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import PricingCard from '../components/PricingCard';
import InteractiveBackground from '../components/InteractiveBackground';
import CardSwap, { Card } from '../components/CardSwap';
import SplitText from '../components/SplitText';
import AnimatedCounter from '../components/AnimatedCounter';
import RealTimeImg from '../assets/Real_time.jpg';
import SecureImg from '../assets/Secure .png';
import MobileAccessImg from '../assets/Mobile Access.jpg';
import DedicatedSupportImg from '../assets/Dedicated Support.png';
import '../styles/App.css';

const Home = () => {
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
