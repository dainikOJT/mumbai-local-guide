import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="page-section">
      <h1>Contact Us</h1>
      <p>Need specific route advice? Reach out to us from our headquarters in Virar, Mumbai.</p>
      
      {submitted ? (
        <div className="success-message">Thank you! Your message has been received.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </section>
  );
}
