import React from 'react';

const Servicespage = () => {
  const services = [
    {
      title: 'Web Development',
      imageUrl: 'https://via.placeholder.com/300',
      description:
        'We build responsive and high-performance web applications tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      imageUrl: 'https://via.placeholder.com/300',
      description:
        'Our team creates intuitive and user-friendly mobile applications for both iOS and Android platforms.',
    },
    {
      title: 'Cloud Solutions',
      imageUrl: 'https://via.placeholder.com/300',
      description:
        'We offer scalable and secure cloud solutions to ensure your business is always online.',
    },
    {
      title: 'Cybersecurity',
      imageUrl: 'https://via.placeholder.com/300',
      description:
        'Our cybersecurity services protect your data and infrastructure from potential threats.',
    },
  ];
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.imageUrl} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicespage;
