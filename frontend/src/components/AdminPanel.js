import React, { useState, useEffect } from 'react';
import { getCourses, deleteCourse } from '../services/api';
import AdminForm from './AdminForm';
import './styles/Admin.css';
import { useNavigate } from 'react-router-dom';
const AdminPanel = () => {
    const [courses, setCourses] = useState([]);
    const [editingCourse, setEditingCourse] = useState(null);
    const navigate = useNavigate();
    // Charger les cours
    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();
            setCourses(data);
        };
        fetchCourses();
    }, []);

    // Supprimer un cours
    const handleDelete = async (id) => {
        await deleteCourse(id);
        const data = await getCourses();
        setCourses(data);
    };

    // Préparer l'édition
    const handleEdit = (course) => {
        setEditingCourse(course);
    };
    const handleBack = () => {
        navigate(-1);  // Retourner à la page précédente
    };

    return (
        <div>
            <h1>Admin Panel</h1>
             {/* Bouton pour revenir à la page précédente */}
             <button onClick={handleBack} className="btn-back">
                Retour à la page précédente
                </button>
            <AdminForm
                courses={courses}
                setCourses={setCourses}
                editingCourse={editingCourse}
                setEditingCourse={setEditingCourse}
            />

            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course._id}>
                           
                            <td>{course.title}</td>
                            <td>{course.price}</td>
                            <td>
                                <button onClick={() => handleEdit(course)}>Modifier</button>
                                <button onClick={() => handleDelete(course._id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
