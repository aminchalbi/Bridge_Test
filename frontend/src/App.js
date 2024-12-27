import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Admin from './components/AdminPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCourses } from './services/api';  

function App() {
    const [courses, setCourses] = useState([]);

    // Charger les cours depuis le backend
    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses(); // Récupérer les cours depuis le backend
            setCourses(data);
        };
        fetchCourses();
    }, []);

    return (
        <Router>
            <div className="App">
            
                <Navbar />

                <Routes>
                  
                    <Route path="/admin" element={<Admin />} />
                    
                  
                    <Route
                        path="/"
                        element={
                            <>
                                <HeroSection
                                    title="Improve your skills on your own"
                                    subtitle="To prepare for a better future"
                                    buttons={[{ text: "Register now", class: "secondary" }]}
                                />
                                <CoursesSection courses={courses} />
                                <ContactForm />
                            </>
                        }
                    />
                </Routes>

              
                <Footer />
            </div>
        </Router>
    );
}

export default App;
