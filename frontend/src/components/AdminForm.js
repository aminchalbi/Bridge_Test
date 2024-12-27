import React, { useState, useEffect } from 'react';
import { createCourse, getCourses, updateCourse } from '../services/api';
import './styles/Adminform.css'
const AdminForm = ({ courses, setCourses, editingCourse, setEditingCourse }) => {
    const [formData, setFormData] = useState({ title:'', price: '', image: '' });

    // Gérer les champs du formulaire
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Ajouter ou modifier un cours
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingCourse) {
            await updateCourse(editingCourse._id, formData);
        } else {
            await createCourse(formData);
        }
        setFormData({ title:'', price: '', image: '' });
        setEditingCourse(null);
        const data = await getCourses();
        setCourses(data);
    };

    useEffect(() => {
        if (editingCourse) {
            setFormData({ name: editingCourse.name, title:editingCourse.title, price: editingCourse.price, image: editingCourse.image });
        }
    }, [editingCourse]);

    return (
        <form onSubmit={handleSubmit}>
            
           < input name="title" value={formData.title} onChange={handleChange} placeholder="title" required />
            <input name="price" value={formData.price} onChange={handleChange} placeholder="Prix" type="number" required />
            <input name="image" value={formData.image} onChange={handleChange} placeholder="URL de l'image" />
            <button type="submit">{editingCourse ? 'Modifier' : 'Ajouter'}</button>
        </form>
    );
};

export default AdminForm;
