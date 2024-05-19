import React from 'react';

const Aboutpage = () => {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'CEO',
      imageUrl: 'https://via.placeholder.com/150',
      description:
        'Alice is the visionary behind our company with over 20 years of experience in the industry.',
    },
    {
      name: 'Bob Smith',
      role: 'CTO',
      imageUrl: 'https://via.placeholder.com/150',
      description:
        'Bob leads our tech team, ensuring we stay ahead with cutting-edge technology.',
    },
    {
      name: 'Carol White',
      role: 'COO',
      imageUrl: 'https://via.placeholder.com/150',
      description:
        'Carol oversees our operations, making sure everything runs smoothly.',
    },
    {
      name: 'Alice Johnson',
      role: 'CEO',
      imageUrl: 'https://via.placeholder.com/150',
      description:
        'Alice is the visionary behind our company with over 20 years of experience in the industry.',
    },
    {
      name: 'Bob Smith',
      role: 'CTO',
      imageUrl: 'https://via.placeholder.com/150',
      description:
        'Bob leads our tech team, ensuring we stay ahead with cutting-edge technology.',
    },
    {
      name: 'Carol White',
      role: 'COO',
      imageUrl: 'https://via.placeholder.com/150',
      description:
        'Carol oversees our operations, making sure everything runs smoothly.',
    },
  ];

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imageUrl} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
      <section className="mission">
        <h1>Our Mission</h1>
        <p>
          To innovate and lead the market with cutting-edge solutions that meet
          the needs of our customers.
        </p>
      </section>
      <section className="history">
        <h1>Our History</h1>
        <p>
          Founded in 2001, our company has grown from a small startup to a
          leading player in the industry. Our journey is marked by continuous
          innovation and a commitment to excellence.
        </p>
      </section>
      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={member.name} />
              <div className="member-info">
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
