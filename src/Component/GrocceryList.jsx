import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SkinCare() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await axios.get("http://localhost:3001/categories");
    setData(res.data);
  };

  return (
    <div className="container">
      <h1 className="title">Shop by Category</h1>

      <div className="grid">
        {data.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/category/${item.title}`)}
          >
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}