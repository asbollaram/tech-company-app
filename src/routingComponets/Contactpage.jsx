import React from 'react';

const Contactpage = () => {
  return (
    <div className="formContainer">
      <form>
        <h3>Get in Touch</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />
        </div>
        <button className="btnOrange" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactpage;
