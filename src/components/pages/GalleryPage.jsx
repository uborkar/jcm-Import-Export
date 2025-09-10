import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';


// Import all images
import agroProduct from '../../assets/img/agro-food.png';
import textileProduct from '../../assets/img/cotton-fabric.jpg';
import industrialProduct from '../../assets/img/cotton-fabric.jpg';
import chemicalProduct from '../../assets/img/cotton-fabric.jpg';
import logisticsService from '../../assets/img/cotton-fabric.jpg';
import globalMarket from '../../assets/img/cotton-fabric.jpg';
import foodProduct from '../../assets/img/cotton-fabric.jpg';
import garmentsProduct from '../../assets/img/cotton-fabric.jpg';
import businessService from '../../assets/img/cotton-fabric.jpg';
import freshProduce from '../../assets/img/cotton-fabric.jpg';
import fabricCollection from '../../assets/img/cotton-fabric.jpg';
import manufacturing from '../../assets/img/cotton-fabric.jpg';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Gallery data with imported images
  const galleryItems = [
    { id: 1, category: 'agro', title: 'Agro Products', image: agroProduct },
    { id: 2, category: 'textile', title: 'Textile Products', image: textileProduct },
    { id: 3, category: 'industrial', title: 'Industrial Goods', image: industrialProduct },
    { id: 4, category: 'chemical', title: 'Chemical Products', image: chemicalProduct },
    { id: 5, category: 'logistics', title: 'Logistics', image: logisticsService },
    { id: 6, category: 'global', title: 'Global Market', image: globalMarket },
    { id: 7, category: 'agro', title: 'Food Products', image: foodProduct },
    { id: 8, category: 'textile', title: 'Garments', image: garmentsProduct },
    { id: 9, category: 'services', title: 'Business Services', image: businessService },
    { id: 10, category: 'agro', title: 'Fresh Produce', image: freshProduce },
    { id: 11, category: 'textile', title: 'Fabric Collection', image: fabricCollection },
    { id: 12, category: 'industrial', title: 'Manufacturing', image: manufacturing },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'agro', name: 'Agro & Food' },
    { id: 'textile', name: 'Textile' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'chemical', name: 'Chemicals' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'global', name: 'Global Market' },
    { id: 'services', name: 'Services' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Split items into rows for sliding animation
  const rows = [];
  for (let i = 0; i < filteredItems.length; i += 4) {
    rows.push(filteredItems.slice(i, i + 4));
  }

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: "900px"}}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Gallery</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active text-secondary">Gallery</li>
          </ol>    
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-6 mb-4">Explore Our Products & Services</h1>
            <p className="fs-5 text-muted">Discover the quality and diversity of our offerings</p>
          </div>
          
          {/* Category Filters */}
          <div className="row justify-content-center mb-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`btn m-2 px-4 ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveCategory(category.id)}
                    style={{
                      backgroundColor: activeCategory === category.id ? '#FF5E15' : 'transparent',
                      borderColor: '#FF5E15',
                      color: activeCategory === category.id ? 'white' : '#FF5E15',
                      borderRadius: '30px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Gallery Grid with Sliding Rows */}
          <div className="gallery-container">
            {rows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`gallery-row ${rowIndex % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              >
                {row.map(item => (
                  <div key={item.id} className="gallery-item">
                    <div className="position-relative overflow-hidden rounded">
                      <img 
                        className="img-fluid w-100 gallery-image" 
                        src={item.image} 
                        alt={item.title}
                      />
                      <div className="gallery-overlay d-flex align-items-center justify-content-center">
                        <div className="text-center text-white p-3">
                          <h5 className="mb-0">{item.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-5 pt-4 wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="mb-4">Interested in Our Products?</h3>
            <Link 
              to="/contact" 
              className="btn btn-primary btn-lg px-5"
              style={{
                backgroundColor: '#FF5E15',
                borderColor: '#FF5E15',
                borderRadius: '30px'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;