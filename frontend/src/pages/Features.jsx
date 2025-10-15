import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import '../styles/App.css';

const Features = () => {
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
    transition: { staggerChildren: 0.08 }
  };

  const allFeatures = [
    {
      icon: '👤',
      title: 'Biometric Attendance',
      description: 'Track employee attendance with advanced biometric integration. Monitor work hours, overtime, and generate automated attendance reports for payroll processing.'
    },
    {
      icon: '📝',
      title: 'Quotation',
      description: 'Create professional quotations in minutes with customizable templates. Include materials, labor costs, and terms. Track quotation status and conversion rates.'
    },
    {
      icon: '🎯',
      title: 'Lead Management',
      description: 'Capture, track, and nurture leads from multiple sources. Automated lead scoring, follow-up reminders, and pipeline visualization to maximize conversions.'
    },
    {
      icon: '👥',
      title: 'Client and Subcontractor Management',
      description: 'Maintain comprehensive databases of clients and subcontractors. Track contracts, performance metrics, payment history, and communication logs in one place.'
    },
    {
      icon: '🔐',
      title: 'Roles & Responsibilities',
      description: 'Define custom user roles with granular permissions. Control access to features, data, and functions based on team member responsibilities and hierarchy.'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Integrated marketing tools for email campaigns, social media scheduling, and lead generation. Track ROI and campaign performance with built-in analytics.'
    },
    {
      icon: '📦',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking for materials and equipment. Set reorder points, manage multiple warehouses, and generate purchase orders automatically.'
    },
    {
      icon: '📊',
      title: 'Project Progress Tracking',
      description: 'Visual project timelines with milestone tracking. Monitor progress with Gantt charts, task dependencies, and real-time status updates for stakeholders.'
    },
    {
      icon: '📋',
      title: 'RFQ (Request for Quotation)',
      description: 'Streamline vendor selection with RFQ management. Send requests to multiple suppliers, compare bids, and make informed procurement decisions.'
    },
    {
      icon: '📁',
      title: 'Files & Folders Management',
      description: 'Centralized document management system. Organize project files, drawings, contracts, and permits with version control and secure sharing capabilities.'
    },
    {
      icon: '📞',
      title: 'Centralised Contact System',
      description: 'Unified contact database for all stakeholders. Store detailed information, communication history, and relationship notes. Sync across all modules.'
    },
    {
      icon: '📅',
      title: 'Schedule Management',
      description: 'Advanced scheduling tools for projects, resources, and teams. Drag-and-drop calendar, conflict detection, and automated notifications for schedule changes.'
    },
    {
      icon: '✉️',
      title: 'Auto Email with Templates',
      description: 'Automated email workflows with professional templates. Trigger emails based on actions, customize content, and track open rates and responses.'
    },
    {
      icon: '📄',
      title: 'Work Orders',
      description: 'Generate and manage work orders efficiently. Assign tasks, track completion, capture signatures, and maintain detailed work order history.'
    },
    {
      icon: '💰',
      title: 'Subcontractor Billing',
      description: 'Automated billing for subcontractors based on completed work. Track invoices, payment schedules, retention amounts, and generate financial reports.'
    },
    {
      icon: '💵',
      title: 'Project-wise Expenses',
      description: 'Track and categorize expenses for each project. Monitor budgets vs. actuals, receipt management, expense approvals, and profitability analysis.'
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <motion.div className="features-hero-content" {...fadeInUp}>
            <h1 className="page-title">
              Comprehensive Features for
              <span className="gradient-text"> Modern Construction</span>
            </h1>
            <p className="page-subtitle">
              Everything you need to manage, grow, and scale your construction business. 
              From attendance tracking to financial management, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="all-features-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">All Features</h2>
            <p className="section-subtitle">
              Powerful tools designed to streamline your workflow
            </p>
          </motion.div>
          <motion.div 
            className="features-grid-large"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {allFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="feature-categories">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Organized by Category</h2>
            <p className="section-subtitle">
              Features grouped by business function
            </p>
          </motion.div>
              <motion.div 
            className="categories-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="category-icon">👥</div>
              <h3 className="category-title">Team Management</h3>
              <ul className="category-features">
                <li>Biometric Attendance</li>
                <li>Roles & Responsibilities</li>
                <li>Schedule Management</li>
                <li>Centralised Contact System</li>
              </ul>
            </motion.div>

            <motion.div 
              className="category-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="category-icon">📊</div>
              <h3 className="category-title">Project Management</h3>
              <ul className="category-features">
                <li>Project Progress Tracking</li>
                <li>Work Orders</li>
                <li>Files & Folders Management</li>
                <li>Project-wise Expenses</li>
              </ul>
            </motion.div>

            <motion.div 
              className="category-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="category-icon">💼</div>
              <h3 className="category-title">Business Development</h3>
              <ul className="category-features">
                <li>Lead Management</li>
                <li>Digital Marketing</li>
                <li>Client Management</li>
                <li>Quotation</li>
              </ul>
            </motion.div>

            <motion.div 
              className="category-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="category-icon">💰</div>
              <h3 className="category-title">Financial Management</h3>
              <ul className="category-features">
                <li>Subcontractor Billing</li>
                <li>RFQ Management</li>
                <li>Inventory Management</li>
                <li>Expense Tracking</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <motion.div className="container" {...fadeInUp}>
          <h2 className="cta-title">Ready to Experience These Features?</h2>
          <p className="cta-text">
            Start your free trial today and see how Shiven Infotech can transform your business
          </p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large">Start Free Trial</button>
            <button className="btn-secondary btn-large">Schedule Demo</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Features;
