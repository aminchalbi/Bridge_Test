import axios from 'axios';

const API_URL = 'http://localhost:4000/api/courses';

// Fonction pour récupérer tous les cours
export const getCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Renvoie les données des cours
  } catch (error) {
    console.error('Erreur lors de la récupération des cours', error);
    throw error;
  }
};

// Fonction pour ajouter un nouveau cours
export const createCourse = async (courseData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, courseData);
    return response.data; // Renvoie les données du cours ajouté
  } catch (error) {
    console.error('Erreur lors de l\'ajout du cours', error);
    throw error;
  }
};

// Fonction pour mettre à jour un cours
export const updateCourse = async (id, courseData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, courseData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du cours', error);
    throw error;
  }
};

// Fonction pour supprimer un cours
export const deleteCourse = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du cours', error);
    throw error;
  }
};
