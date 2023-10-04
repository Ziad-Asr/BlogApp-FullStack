import {useEffect, useState} from 'react'
import axios from 'axios'
import aboutMeImage from "../../assets/pexels-vanngo-ng-18450885.jpg";

import "./Sidebar.css";

const Sidebar = () => {
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:8000/api/categories')
      setCategory(res.data)
    }
    getCategories()
  },[])

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div className="sidebar-title">ABOUT ME</div>
        <img src={aboutMeImage} alt="abot_me_image" />
        <p>
          loremloremloremloremloreml oremloremloremloremloremlor
          emloremloremloremloremloremloremlorem
        </p>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">CATEGORIES</div>
        <ul className="sidebar-list">
        {category.map(cate => (
          <li className="sidebar-list-item">{cate.name}</li>
        ))}
        </ul>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title">FOLLOW US</div>
        <div className="sidebar-social">
          <i className="sidebar-icon fa-brands fa-square-facebook"></i>
          <i className="sidebar-icon fa-brands fa-square-twitter"></i>
          <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
          <i className="sidebar-icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
