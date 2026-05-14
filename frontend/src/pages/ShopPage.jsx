import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products", err);
        // Fallback data if backend not running
        setProducts([
          { _id: '1', name: 'Noir Elegance', price: 120, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800', category: 'Eau de Parfum' },
          { _id: '2', name: 'Golden Sands', price: 95, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800', category: 'Eau de Parfum' },
          { _id: '3', name: 'Royal Rose', price: 110, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800', category: 'Eau de Parfum' },
          { _id: '4', name: 'Velvet Orchid', price: 135, image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800', category: 'Eau de Parfum' },
          { _id: '5', name: 'Silver Mountain', price: 145, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800', category: 'Eau de Parfum' },
          { _id: '6', name: 'Amber Wood', price: 155, image: 'https://images.unsplash.com/photo-1588405748353-057ca5049d1e?auto=format&fit=crop&q=80&w=800', category: 'Extrait de Parfum' },
          { _id: '7', name: 'Crystal Blossom', price: 75, image: 'https://images.unsplash.com/photo-1616948055599-921c16928bc7?auto=format&fit=crop&q=80&w=800', category: 'Eau de Toilette' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="shop-page container">
      <div className="shop-header">
        <h1 className="premium-font">Our Collections</h1>
        <p>Explore our masterfully crafted fragrances</p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card fade-in">
            <Link to={`/product/${product._id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </Link>
            <div className="product-info">
              <span className="product-cat">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .shop-page {
          padding-top: 150px;
        }

        .shop-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .shop-header h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 40px;
        }

        .product-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        .product-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }

        .product-image {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .product-card:hover .product-image img {
          transform: scale(1.1);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .product-info {
          padding: 20px;
          text-align: center;
        }

        .product-cat {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 10px;
          display: block;
        }

        .product-info h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .product-price {
          font-weight: 600;
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
};

export default ShopPage;
