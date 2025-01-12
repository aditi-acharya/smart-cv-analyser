import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    skills: '',
    tools: '',
  });
  

  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { formData } });
  };

  return (
    <div className='home-page-container'>
    <div className="home-page">
      <h1>Upload Job Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Years of Experience:</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tools">Tools:</label>
          <input
            type="text"
            id="tools"
            name="tools"
            value={formData.tools}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default HomePage;

/*
{formData.role} for Role
{formData.tools} for Tools
{formData.experience} for years of experience
{formData.skills} for programming skills
 */