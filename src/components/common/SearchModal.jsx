import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ onSearch, searchHistory, onClearHistory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Ensure searchHistory is always an array
  const safeSearchHistory = searchHistory || [];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      // Close the modal
      const modal = document.getElementById('searchModal');
      const modalInstance = window.bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
      // Navigate to services page with search query
      navigate(`/services?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleHistoryClick = (term) => {
    setSearchTerm(term);
    onSearch(term);
    const modal = document.getElementById('searchModal');
    const modalInstance = window.bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
    navigate(`/services?search=${encodeURIComponent(term)}`);
  };

  return (
    <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h4 className="modal-title mb-0" id="searchModalLabel">Search by keyword</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="input-group w-75 mx-auto d-flex">
                  <input 
                    type="search" 
                    className="form-control p-3" 
                    placeholder="Enter keywords to search services..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
              
              {safeSearchHistory.length > 0 && (
                <div className="search-history mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Recent Searches</h5>
                    <button 
                      className="btn btn-sm btn-outline-secondary" 
                      onClick={onClearHistory}
                    >
                      Clear History
                    </button>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {safeSearchHistory.map((term, index) => (
                      <button
                        key={index}
                        className="btn btn-outline-primary"
                        onClick={() => handleHistoryClick(term)}
                      >
                        {term} <i className="fas fa-redo ms-2"></i>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;