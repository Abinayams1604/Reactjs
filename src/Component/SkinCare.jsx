import React, { useEffect, useState } from "react";
import axios from "axios";


export default function SkinCare() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      
      

      {/* Navbar */}
      <div className="navbar">
        <h2 className="logo">SKINCARE</h2>

        <div className="nav-links">
          <a href="#">SHOP</a>
          <a href="#">PRODUCT</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </div>

        <div className="nav-actions">
          <input type="text" placeholder="Search" />
          <button>SHOP NOW</button>
        </div>
      </div>

      {/* Products */}
      <div className="container">
        <h2 className="title">Shop by Category</h2>

        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid">
            {products.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}