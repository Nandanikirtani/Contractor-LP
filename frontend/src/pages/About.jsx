// pages/About.js
import React from "react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";
import AnimatedCounter from "../components/AnimatedCounter";
import "../styles/App.css";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
     <section
    className="about-hero"
    style={{
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(10px)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Inline gradient animation */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.5,
        background: "linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80, #ff6ec4)",
        backgroundSize: "800% 800%",
        animation: "gradientShift 10s ease infinite",
      }}
    ></div>

    {/* Hero content */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ fontSize: "3rem", color: "#fff", fontWeight: "bold", zIndex: 10 }}
    >
      Shiven Infotech
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ color: "#eee", fontSize: "1.25rem", maxWidth: "600px", zIndex: 10 }}
    >
      Innovating Construction Technology for Smarter Businesses
    </motion.p>

    {/* Inline style keyframes */}
    <style>
      {`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}
    </style>
  </section>

      {/* Our Story */}
      <section className="about-story container" style={{ padding: "4rem 0" }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Our Story
          </h2>
          <div className="about-description">
            <SplitText
              text=" Shiven Infotech was founded to empower construction and contracting businesses with modern technology. 
    Our platform combines project management, CRM, inventory, and financial tools in one seamless solution, helping companies streamline operations, increase productivity, and scale efficiently."
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
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section
        className="about-mission container"
        style={{
          padding: "4rem 0",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(5px)",
        }}
      >
        <motion.div {...fadeInUp}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Mission & Vision
          </h2>
          <motion.div
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Our mission is to simplify construction business operations through
            innovation, automation, and real-time insights. We envision a future
            where every construction project is efficient, transparent, and
            scalable, allowing teams to focus on delivering quality results and
            growing their business.
          </motion.div>
        </motion.div>
      </section>

      {/* Feature/Stats Cards */}
      <motion.div className="about-stats-enhanced" {...fadeInUp} style={{margin: "4rem"}}>
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

      {/* Why Choose Us */}
      <section
        className="about-why container"
        style={{
          padding: "32px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(5px)",
          marginBottom: "4rem",
        }}
      >
        <motion.div {...fadeInUp}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Why Choose Us
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {[
              {
                icon: "📊",
                title: "Real-time Analytics",
                desc: "Track project metrics and performance in real-time.",
                padding: "1.5rem",
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                desc: "Bank-level security for your business data.",
                padding: "1.5rem",
              },
              {
                icon: "📱",
                title: "Mobile Access",
                desc: "Manage projects on-the-go via mobile apps.",
                padding: "1.5rem",
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                desc: "24/7 support for your business needs.",
                padding: "1.5rem",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                style={{
                  flex: "1 1 22%",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  padding: feature.padding,
                  borderRadius: "1rem",
                  textAlign: "center",
                  color: "#fff",
                  minWidth: "220px",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        className="cta-section"
        style={{ padding: "4rem 0", textAlign: "center" }}
      >
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: "#fff" }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="cta-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "#ccc", marginBottom: "2rem" }}
        >
          Join hundreds of construction companies already using Shiven Infotech
        </motion.p>
        <motion.button
          className="btn-cta-main"
          whileHover={{ scale: 1.08, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => (window.location.href = "/pricing")}
        >
          Get Started Today →
        </motion.button>
      </section>
    </div>
  );
};

export default About;
