import React from 'react';

const Homepage = () => {
  return (
    <div className="landing-page">
      <section className="banner">
        <div className="banner-text">
          <h1>Welcome to Our IT Services</h1>
          <p>
            Your success is our priority. Let us help you innovate and grow.
          </p>
        </div>
      </section>
      <section className="content">
        <div className="column column-left">
          <h2>Why Choose Us</h2>
          <p>
            Our team of experts is dedicated to providing top-notch solutions
            tailored to your business needs. We pride ourselves on our customer
            service and our ability to deliver results.
          </p>
        </div>
        <div className="column column-right">
          <h2>Our Expertise</h2>
          <p>
            From web development to mobile app creation and cybersecurity, we
            have the skills and experience to tackle any challenge. Partner with
            us to take your business to the next level.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
