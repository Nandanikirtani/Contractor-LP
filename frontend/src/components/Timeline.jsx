import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="timeline-marker">
            <div className="timeline-icon">
              {typeof event.icon === 'string' && event.icon.startsWith('http') ? (
                <img src={event.icon} alt={event.title} className="timeline-icon-img" />
              ) : (
                event.icon
              )}
            </div>
          </div>
          <div className="timeline-content">
            <div className="timeline-year">{event.year}</div>
            <h4 className="timeline-title">{event.title}</h4>
            <p className="timeline-description">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
