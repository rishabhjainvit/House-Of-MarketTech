
import React, { useEffect } from 'react';
import Bubble from './Bubble';

const BubbleContainer = () => {
 
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '80px 20px',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    lineHeight: '1.8',
    textAlign: 'center',
  };

  const listStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    lineHeight: '1.8',
    listStyleType: 'disc',
    paddingLeft: '20px',
    textAlign: 'center',
  };

  const quoteStyle = {
    fontSize: '1.1rem',
    maxWidth: '700px',
    lineHeight: '1.6',
    fontStyle: 'italic',
    marginBottom: '20px',
    borderLeft: '4px solid #fff',
    paddingLeft: '16px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

 
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          section.style.opacity = 1;
          section.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '400vh', 
        overflow: 'hidden',
        backgroundColor: '#121212',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
    
      <div
        className="fade-in-section"
        style={{
          ...sectionStyle,
          padding: '50px 20px',
        }}
      >
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to Rouser Lab</h1>
        <p style={paragraphStyle}>
          At Rouser Lab, we craft extraordinary experiences through innovative technology solutions.
          Discover more about our mission, team, and values as you explore.
        </p>
      </div>


      <div className="fade-in-section" style={sectionStyle}>
        <h2 style={headerStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          We aim to push the boundaries of innovation by delivering solutions that empower businesses 
          to bring their visions to life. From digital transformation to custom software, we’re here to help shape the future.
        </p>
      </div>


      <div className="fade-in-section" style={sectionStyle}>
        <h2 style={headerStyle}>Our Services</h2>
        <ul style={listStyle}>
          <li>Custom Software Development</li>
          <li>Cloud Solutions and Integration</li>
          <li>Data Analytics and AI-powered Insights</li>
          <li>Mobile Application Development</li>
          <li>Website Development and E-commerce Solutions</li>
        </ul>
      </div>


      <div className="fade-in-section" style={sectionStyle}>
        <h2 style={headerStyle}>What Our Clients Say</h2>
        <blockquote style={quoteStyle}>
          "Rouser Lab transformed our digital presence and helped us reach new heights. Their team was incredibly responsive and a pleasure to work with!"
          <footer style={{ textAlign: 'right', marginTop: '10px' }}>- Client A</footer>
        </blockquote>
        <blockquote style={quoteStyle}>
          "The custom software solution has streamlined our operations and improved our efficiency immensely. Highly recommended!"
          <footer style={{ textAlign: 'right', marginTop: '10px' }}>- Client B</footer>
        </blockquote>
      </div>


      <div className="fade-in-section" style={sectionStyle}>
        <h2 style={headerStyle}>Our Team</h2>
        <p style={paragraphStyle}>
          We are a passionate team of designers, developers, and strategists who love what we do. 
          We work collaboratively to ensure the best outcomes for our clients.
        </p>
      </div>


      <div className="fade-in-section" style={sectionStyle}>
        <h2 style={headerStyle}>Our Values</h2>
        <p style={paragraphStyle}>
          We are driven by integrity, innovation, and a commitment to excellence. These values shape our culture
          and guide us in all our endeavors, ensuring we create value for our clients and community.
        </p>
      </div>


      <div className="fade-in-section" style={sectionStyle}>
        <h2 style={headerStyle}>Get in Touch</h2>
        <p style={paragraphStyle}>
          Ready to start a project with us? Contact us today and let's discuss how we can bring your vision to life!
        </p>
        <button style={buttonStyle}>Contact Us</button>
      </div>


      <div className="fade-in-section" style={{ ...sectionStyle, textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          © 2024 Rouser Lab - All rights reserved.
        </p>
      </div>


      <Bubble />
    </div>
  );
};

export default BubbleContainer;
