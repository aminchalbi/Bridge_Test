const express = require('express');
const router = express.Router();
const Course = require('../models/course');  // Assurez-vous que le modèle Course est bien défini dans le dossier models

// CREATE - Ajouter un cours
router.post('/add', async (req, res) => {
    try {
        // Créer un nouveau cours avec les données envoyées dans le corps de la requête
        const newCourse = new Course({
           title: req.body.title,
          
            price: req.body.price,
            image: req.body.image
        });

        // Sauvegarder le cours dans la base de données
        const savedCourse = await newCourse.save();
        
        // Retourner une réponse avec le cours créé et un statut 201
        res.status(201).json(savedCourse);
    } catch (err) {
        // Si une erreur se produit, retourner une réponse avec un message d'erreur
        res.status(500).json({ message: err.message });
    }
});

// READ - Obtenir tous les cours
router.get('/', async (req, res) => {
    try {
        // Récupérer tous les cours de la base de données
        const courses = await Course.find();
        
        // Retourner une réponse avec les cours et un statut 200
        res.status(200).json(courses);
    } catch (err) {
        // Si une erreur se produit, retourner une réponse avec un message d'erreur
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Modifier un cours
router.put('/:id', async (req, res) => {
    try {
        // Mettre à jour un cours spécifique en fonction de son ID
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id, 
            {
                name: req.body.name,
             
                price: req.body.price,
                image: req.body.image
            },
            { new: true }  // Retourner le cours mis à jour
        );
        
        // Vérifier si le cours a bien été trouvé et mis à jour
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Cours non trouvé' });
        }
        
        // Retourner le cours mis à jour
        res.status(200).json(updatedCourse);
    } catch (err) {
        // Si une erreur se produit, retourner une réponse avec un message d'erreur
        res.status(500).json({ message: err.message });
    }
});

// DELETE - Supprimer un cours
router.delete('/:id', async (req, res) => {
    try {
        // Supprimer un cours spécifique en fonction de son ID
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        
        // Vérifier si le cours a bien été trouvé et supprimé
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Cours non trouvé' });
        }

        // Retourner une réponse confirmant la suppression du cours
        res.status(200).json({ message: 'Cours supprimé avec succès' });
    } catch (err) {
        // Si une erreur se produit, retourner une réponse avec un message d'erreur
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
