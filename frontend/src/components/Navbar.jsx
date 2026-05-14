import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <Link to="/" className="nav-logo premium-font">
          LAIBER <span>PERFUME</span>
        </Link>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/shop">COLLECTIONS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="nav-actions">
          <Search size={20} />
          <User size={20} />
          <div className="cart-icon">
            <ShoppingCart size={20} />
            <span className="cart-count">0</span>
          </div>
          <Menu className="mobile-menu" size={24} />
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: var(--transition);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .nav-logo {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 4px;
          color: var(--primary);
        }

        .nav-logo span {
          font-weight: 300;
          font-size: 0.9rem;
          display: block;
          margin-top: -5px;
          color: var(--text-main);
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          gap: 25px;
          align-items: center;
          color: var(--text-main);
        }

        .nav-actions svg {
          cursor: pointer;
          transition: var(--transition);
        }

        .nav-actions svg:hover {
          color: var(--primary);
        }

        .cart-icon {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -10px;
          right: -10px;
          background: var(--primary);
          color: #000;
          font-size: 0.7rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
