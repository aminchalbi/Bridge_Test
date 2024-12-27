import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/api'; // Importez la fonction qui récupère les cours
import './styles/CoursesSection.css';

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les cours depuis le backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors de la récupération des cours');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="courses-section">
      <div className="section-header">
        <h2>Discover our Cours</h2>
        <button className="view-more-button">View More</button>
      </div>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.price} dt/Month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
