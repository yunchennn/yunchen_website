import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Send form data to the backend API
      const response = await axios.post('http://localhost:3001/api/sendemail', formData);
      if (response.data.success) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('An error occurred while sending the email.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>{status}</p>
    </div>
  );
};

export default Contact;
