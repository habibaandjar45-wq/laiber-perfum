import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShoppingBag, Star, ShieldCheck, RefreshCcw } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product", err);
        // Mock fallback
        setProduct({
          name: "Noir Elegance",
          brand: "Laiber Perfume",
          description: "A deep, mysterious fragrance with notes of oud, leather, and black pepper. Perfect for evening wear and formal occasions. Experience the essence of sophistication.",
          price: 120,
          category: "Eau de Parfum",
          image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
          topNotes: ["Black Pepper", "Bergamot"],
          middleNotes: ["Leather", "Rose"],
          baseNotes: ["Oud", "Patchouli"],
          rating: 4.8
        });
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading || !product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail-page container">
      <div className="product-layout">
        <div className="product-gallery fade-in">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details fade-in">
          <span className="brand">{product.brand}</span>
          <h1 className="premium-font">{product.name}</h1>
          
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "var(--primary)" : "none"} color="var(--primary)" />
            ))}
            <span>({product.rating})</span>
          </div>

          <p className="price">${product.price}</p>
          
          <p className="description">{product.description}</p>

          <div className="notes-section">
            <div className="note-group">
              <strong>Top Notes:</strong>
              <p>{product.topNotes?.join(", ")}</p>
            </div>
            <div className="note-group">
              <strong>Heart Notes:</strong>
              <p>{product.middleNotes?.join(", ")}</p>
            </div>
            <div className="note-group">
              <strong>Base Notes:</strong>
              <p>{product.baseNotes?.join(", ")}</p>
            </div>
          </div>

          <div className="actions">
            <button className="btn btn-primary add-to-cart">
              <ShoppingBag size={18} /> ADD TO BAG
            </button>
          </div>

          <div className="benefits">
            <div className="benefit">
              <ShieldCheck size={20} />
              <span>Authentic Product</span>
            </div>
            <div className="benefit">
              <RefreshCcw size={20} />
              <span>Free Returns</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-detail-page {
          padding-top: 150px;
        }

        .product-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .product-gallery img {
          width: 100%;
          border: 1px solid var(--glass-border);
        }

        .brand {
          color: var(--primary);
          letter-spacing: 3px;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .product-details h1 {
          font-size: 3.5rem;
          margin: 10px 0 20px;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 20px;
          color: var(--text-muted);
        }

        .price {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .description {
          color: var(--text-muted);
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .notes-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
        }

        .note-group strong {
          display: block;
          color: var(--primary);
          font-size: 0.7rem;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .note-group p {
          font-size: 0.9rem;
        }

        .add-to-cart {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px;
          font-size: 1rem;
          margin-bottom: 30px;
        }

        .benefits {
          display: flex;
          gap: 40px;
          border-top: 1px solid var(--glass-border);
          padding-top: 30px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .product-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
