import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h4 className="premium-font">ESSENCE OF LUXURY</h4>
          <h1 className="premium-font">Unveil Your <br /> Hidden Signature</h1>
          <p>Discover our curated collection of artisanal fragrances, <br /> crafted to leave a lasting impression.</p>
          <div className="hero-btns">
            <button className="btn btn-primary">EXPLORE COLLECTIONS</button>
            <button className="btn btn-outline">LEARN MORE</button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Section placeholder */}
      <section className="featured container">
        <h2 className="premium-font section-title">Featured Scents</h2>
        {/* We'll add product cards here later */}
      </section>

      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background: url('https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=2000') no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-content h4 {
          color: var(--primary);
          letter-spacing: 5px;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .hero-content h1 {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 30px;
          letter-spacing: -2px;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 50px;
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
