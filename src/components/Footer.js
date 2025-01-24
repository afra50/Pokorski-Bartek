import React, { useState } from "react";
import "../styles/Footer.scss";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We will contact you soon!`);
    // Tu możesz dodać obsługę wysyłki formularza.
  };

  return (
    <section id="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label>
            My name is
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            I am interested in
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            My e-mail
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>
            <i class="fa-solid fa-phone"></i>
            <span>+48 535 823 255</span>
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i>
            <span>bartekgm0@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
