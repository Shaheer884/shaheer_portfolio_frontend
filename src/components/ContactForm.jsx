import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Mapping to backend which expects subject field
      const submitData = {
        name: formData.name,
        email: formData.email,
        subject: "Direct Portfolio Inquiry",
        message: formData.message,
      };

      const res = await axios.post('/api/messages', submitData);
      if (res.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out. I\'ll get back to you soon!',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'danger',
        message: error.response?.data?.message || 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card p-4 p-md-5 border-0">
      <Form onSubmit={handleSubmit} className="text-start">
        {status.type && (
          <Alert
            variant={status.type}
            className="d-flex align-items-center gap-2 py-3 mb-4 rounded-3 border-0 shadow-sm"
            style={{
              background: status.type === 'success' ? 'rgba(20, 184, 166, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              color: status.type === 'success' ? '#14b8a6' : '#ef4444',
            }}
          >
            {status.type === 'success' ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
            <span className="small fw-semibold">{status.message}</span>
          </Alert>
        )}

        <Form.Group className="mb-4" controlId="formName">
          <Form.Label className="small fw-semibold text-secondary">Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            maxLength={100}
            className="custom-input shadow-none"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label className="small fw-semibold text-secondary">Your Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
            maxLength={255}
            className="custom-input shadow-none"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label className="small fw-semibold text-secondary">Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            maxLength={1000}
            className="custom-input shadow-none"
            style={{ resize: 'none' }}
          />
        </Form.Group>

        <Button
          type="submit"
          className="btn-premium w-100 py-3 d-flex align-items-center justify-content-center gap-2"
          disabled={loading}
        >
          {loading ? (
            'Sending...'
          ) : (
            <>
              <Send size={18} /> Send Message
            </>
          )}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
