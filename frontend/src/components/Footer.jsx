import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="premium-font">LAIBER PERFUME</h2>
          <p>The essence of timeless luxury and artisanal craftsmanship.</p>
        </div>
        
        <div className="footer-links">
          <div>
            <h4>SHOP</h4>
            <ul>
              <li><a href="/shop">Collections</a></li>
              <li><a href="/shop">New Arrivals</a></li>
              <li><a href="/shop">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4>CONTACT</h4>
            <ul>
              <li><a href="tel:0699339288">0699339288</a></li>
              <li><a href="mailto:latifasara961@gmail.com">latifasara961@gmail.com</a></li>
              <li>Agadir, Morocco</li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; 2024 Laiber Perfume. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background: #050505;
          padding: 80px 0 30px;
          margin-top: 100px;
          border-top: 1px solid var(--glass-border);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand h2 {
          letter-spacing: 4px;
          margin-bottom: 20px;
          color: var(--primary);
        }

        .footer-brand p {
          color: var(--text-muted);
          max-width: 300px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-links h4 {
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 25px;
          color: var(--text-main);
        }

        .footer-links ul li {
          margin-bottom: 12px;
        }

        .footer-links ul li a {
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .footer-links ul li a:hover {
          color: var(--primary);
        }

        .newsletter {
          display: flex;
          gap: 10px;
        }

        .newsletter input {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          color: white;
          padding: 10px;
          width: 100%;
          outline: none;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: #444;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
