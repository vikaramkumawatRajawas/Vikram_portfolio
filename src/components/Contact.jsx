import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields before sending.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate form submission with confetti
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F5C542', '#FFD966', '#D4A72C', '#ffffff'],
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <span className="section-number">06</span>
        <h2 className="section-title">
          Let's Build <span className="text-gradient">Something Together</span>
        </h2>
        <p className="section-subtitle">
          Have a project, software engineering opportunity, or technical inquiry? Send a message below or contact me directly.
        </p>

        <div className="contact-grid">
          {/* Left Side: Contact Cards */}
          <div className="contact-info-column">
            <TiltCard className="contact-card">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={22} className="icon-gold" />
                </div>
                <div>
                  <span className="c-label">Direct Email</span>
                  <a href="mailto:kumawatvikram642@gmail.com" className="c-val text-gold">
                    kumawatvikram642@gmail.com
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="contact-card">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={22} className="icon-gold" />
                </div>
                <div>
                  <span className="c-label">Phone Number</span>
                  <a href="tel:9351680540" className="c-val text-gold">
                    +91 9351680540
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="contact-card">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={22} className="icon-gold" />
                </div>
                <div>
                  <span className="c-label">Location</span>
                  <span className="c-val">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Side: Contact Form */}
          <TiltCard className="contact-form-card">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">I typically respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Vikram Kumawat"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="form-input textarea-input"
                />
              </div>

              {status === 'error' && (
                <div className="form-alert alert-error">
                  <AlertCircle size={18} /> {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="form-alert alert-success">
                  <CheckCircle2 size={18} /> Thank you! Your message has been received. Vikram will get back to you soon.
                </div>
              )}

              <MagneticButton
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold form-submit-btn"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </MagneticButton>
            </form>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 32px;
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          padding: 24px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(245, 197, 66, 0.08);
          border: 1px solid var(--bg-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .c-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 2px;
        }

        .c-val {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-main);
          text-decoration: none;
        }

        .c-val.text-gold:hover {
          text-decoration: underline;
        }

        .contact-form-card {
          padding: 36px;
        }

        .form-title {
          font-size: 1.5rem;
          margin-bottom: 6px;
        }

        .form-subtitle {
          color: var(--text-muted);
          font-size: 0.92rem;
          margin-bottom: 28px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .form-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--bg-glass-border);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          outline: none;
        }

        .form-input:focus {
          border-color: var(--gold-primary);
          background: rgba(245, 197, 66, 0.05);
          box-shadow: 0 0 15px var(--gold-glow);
        }

        .textarea-input {
          resize: vertical;
        }

        .form-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
        }

        .alert-success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ade80;
        }

        .form-submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 1.05rem;
          margin-top: 8px;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
