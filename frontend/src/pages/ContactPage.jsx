import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="contact-page container">
      <div className="contact-header fade-in">
        <h1 className="premium-font">Get in Touch</h1>
        <p>We'd love to hear from you. Reach out for any inquiries or bespoke requests.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info fade-in">
          <div className="contact-item">
            <div className="icon-box"><Phone size={24} /></div>
            <div>
              <h3>Call Us</h3>
              <p>0699339288</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon-box"><Mail size={24} /></div>
            <div>
              <h3>Email Us</h3>
              <p>latifasara961@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box"><MapPin size={24} /></div>
            <div>
              <h3>Visit Us</h3>
              <p>Agadir, Morocco</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass fade-in">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button className="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding-top: 150px;
          min-height: 80vh;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .contact-header h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .contact-item {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          background: var(--bg-card);
          border: 1px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .contact-item h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 5px;
        }

        .contact-item p {
          font-size: 1.2rem;
          font-weight: 300;
        }

        .contact-form-container {
          padding: 40px;
          border: 1px solid var(--glass-border);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          padding: 12px;
          color: white;
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
